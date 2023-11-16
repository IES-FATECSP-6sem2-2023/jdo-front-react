import { createContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
import Sockjs from "sockjs-client/dist/sockjs";
import { Stomp } from '@stomp/stompjs';
import useAuthConta from '/src/hooks/AuthConta';
import TabuleiroService from "../services/TabuleiroService";


export const TabuleiroContext = createContext({});

export const TabuleiroProvider = ({ children }) => {
    const navigate = useNavigate();
    const [pecasComidas, setPecasComida] = useState(0);
    const { user } = useAuthConta();
    const [partida, setPartida] = useState({});

    const wsConexao = new Sockjs('http://localhost:8080/ws')
    const stompClient = Stomp.over(wsConexao)
    stompClient.connect({}, function(frame) {})


    const criarPartida = async (tipo) => {
        try {
            if (user && user.jogador) {
                const idJogador = user.jogador.id;
                // debugger
                const teste = await TabuleiroService.iniciaPartida(idJogador,tipo);
                stompClient.subscribe('/topic/gamestate', function(message) {
                    const gamestate = JSON.parse(message.body)
                    console.log(message.body)

                    if (gamestate.iniciandoPartida) {
                        setPartida(gamestate?.partida)
                        setTimeout(() => {
                           navigate('/tabuleiro')
                        }, 2000)
                        return
                    }

                    setPartida(gamestate.partida)
                });

                if (teste.data.partidaOcupada) {
                    stompClient.send("/topic/gamestate", {}, JSON.stringify({partida: teste.data.partida, iniciandoPartida: true }))
                    setPartida(teste.data.partida)
                    setTimeout(() => {
                        navigate('/tabuleiro')
                    }, 2000)
                } else {
                    setPartida(teste.data.partida.idpartida)
                }
                
            }
            return;
        } catch (e) {
            console.log(e)
            toast.error("Erro ao tentar criar uma partida!");
            return;
        }
    }

    useEffect(() => {
        
        if (partida && partida !== undefined) {
            console.log(partida)
            if (!localStorage.getItem("timeTabuleiro")){
                let session = JSON.parse(localStorage.getItem("userLogin"));
                if (session?.jogador?.id === partida?.primeirojogador?.idJogador) localStorage.setItem("timeTabuleiro", 1);
                if (session?.jogador?.id === partida?.segundojogador?.idJogador) localStorage.setItem("timeTabuleiro", 2);
            }
        }
    }, []);

    // useEffect(() => {
    //     console.log("Uma peça de cachorro foi comida, total:", pecasComidas)
    // }, [pecasComidas]);

    const movimentarPartida = async (xOri, yOri, xDes, yDes, jogador) => {
        console.log("PASSOU AQUI", partida)
        if (partida) {
            const coordenadaOrigem = `${xOri},${yOri};`;
            const coordenadaDestino = `${xDes},${yDes};`;
            let atualizaPartida = { ...partida };
            const jogadorAtual = jogador === 1 ? 'primeirojogador' : 'segundojogador';

            if (atualizaPartida[jogadorAtual].posicoes.hasOwnProperty(coordenadaOrigem)) {
                const valoresDestino = atualizaPartida[jogadorAtual].posicoes[coordenadaOrigem].split(";");

                const diferencaX = Math.abs(xDes - xOri);
                const diferencaY = Math.abs(yDes - yOri);
                let coordenadasPuladas = "";
                if (diferencaX > 0) {
                    for (let i = 1; i < diferencaX; i++) {
                        const xPulado = xOri + (xDes > xOri ? i : -i);
                        const yPulado = yOri;
                        coordenadasPuladas= `${xPulado},${yPulado};`;
                    }
                } else if (diferencaY > 0) {
                    for (let i = 1; i < diferencaY; i++) {
                        const xPulado = xOri;
                        const yPulado = yOri + (yDes > yOri ? i : -i);
                        coordenadasPuladas = `${xPulado},${yPulado};`;
                    }
                }
                
                if (valoresDestino.includes(`${xDes},${yDes}`)) {
                    limpaPosicoes(atualizaPartida.primeirojogador.posicoes)
                    limpaPosicoes(atualizaPartida.segundojogador.posicoes)

                    delete atualizaPartida[jogadorAtual].posicoes[coordenadaOrigem];
                    atualizaPartida[jogadorAtual].posicoes[coordenadaDestino] = "";
                    
                    if (coordenadasPuladas) {
                        // debugger
                        delete atualizaPartida.segundojogador.posicoes[coordenadasPuladas];
                        setPecasComida(prevPecasComida => {
                            console.log("Valor anterior de pecasComida:", prevPecasComida);
                            return prevPecasComida + 1;
                          });
                    }
                    
                    try {
                        console.log(JSON.stringify({ partida: atualizaPartida }))
                        const novaMovimentacao = await TabuleiroService.movimentaPartida(atualizaPartida);
                        stompClient.send("/topic/gamestate", {}, JSON.stringify({partida: novaMovimentacao}));
                        return true
                    } catch (e) {
                        toast.error("Erro ao tentar efetuar movimentação!");
                    }
                }
            }
        }
    }

    const limpaPosicoes = (posicoes) => {
        for (const chave in posicoes) {
            posicoes[chave] = "";
        }
    }

    const finalizarPartida = async (timeVitoria) => {
        if (partida) {
            try {
                const idVencedor = timeVitoria === 1 ? partida.primeirojogador.idJogador : partida.segundojogador.idJogador;
                const partidaReturn = await TabuleiroService.finalizaPartida(partida.idpartida, idVencedor);
                setPartida(partidaReturn.data);
                return;
            } catch (e) {
                toast.error("Erro inesperado ao finalizar partida!")
                return;
            }
        }
    }

    const excluirPartida = async (idPartida) => {
        if (partida) {
            try {
                const response = await TabuleiroService.excluirPartida(idPartida);
                if (response.status === 200) {
                    toast.success("Partida excluida!")
                    return response;
                }
            } catch (e) {
                throw e
            }
            
        }
    }

    return (
        <TabuleiroContext.Provider value={{partida, pecasComidas, criarPartida, movimentarPartida, finalizarPartida, excluirPartida}}>
            {children}
        </TabuleiroContext.Provider>
    )
}