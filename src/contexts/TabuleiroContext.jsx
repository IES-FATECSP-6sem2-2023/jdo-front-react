import { Stomp } from '@stomp/stompjs';
import { createContext, useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
import Sockjs from "sockjs-client/dist/sockjs";
import TabuleiroService from "../services/TabuleiroService";
import useAuthConta from '/src/hooks/AuthConta';
import { API_URL } from '../utils/constants';

export const TabuleiroContext = createContext({});

export const TabuleiroProvider = ({ children }) => {
    const navigate = useNavigate();
    const [jogadorAtualCronometro, setJogadorAtualCronometro] = useState(1);
    const [pecasComidas, setPecasComida] = useState(0);
    const stompClient = useRef(null);
    const { user } = useAuthConta();
    const [partida, setPartida] = useState({});
    const [tempoRestante, setTempoRestante] = useState(10);
    const [websocketRoom, setWebsocketRoom] = useState('');
    const jogadorSessao = parseInt(JSON.parse(localStorage.getItem("partidaSession"))?.time, 10);

    useEffect(() => {
        return () => {
            if (stompClient.current) {
                stompClient.current.disconnect(() => {
                    console.log('Desconectado do WebSocket.');
                });
            }
        };
    }, []);

    const criarPartida = async (tipo) => {
        try {
            if (user && user.jogador) {
                const idJogador = user.jogador.id;
                
                // Verifica se o cliente Stomp já existe; se não, cria e conecta
                if (!stompClient.curent) {
                    stompClient.current = Stomp.over(() => new Sockjs(API_URL.concat('/ws')));
                    stompClient.current.connect({}, async function(frame) {
                        await iniciarPartida(stompClient.current, tipo, idJogador);
                    });
                } else {
                    // Cliente já conectado, apenas inicia a partida
                    await iniciarPartida(stompClient.current, tipo, idJogador);
                }
                console.log()
                return true;
            }
        } catch (e) {
            console.error(e);
            toast.error("Erro ao tentar criar uma partida!");
            return false;
        }
    };
    
    const iniciarPartida = async (client, tipo, idJogador) => {
        const teste = await TabuleiroService.iniciaPartida(idJogador, tipo);
        const room = teste.data.partida.idpartida;
        setWebsocketRoom(room);
        
        client.subscribe('/topic/gamestate/' + room, function(message) {
            const gamestate = JSON.parse(message.body);
            if (gamestate.iniciandoPartida) {
                setPartida(gamestate?.partida);
                setTimeout(() => {
                    navigate('/tabuleiro');
                }, 2000);
                return;
            }
            passarVez(); 
            setPartida(gamestate.partida);
        });
    
        client.subscribe('/topic/finish-game/' + room, function(message) {
            const partidaFinalizada = JSON.parse(message.body);
            if (idJogador === partidaFinalizada.idVencedor) {
                navigate(`/vitoria/${jogadorSessao}`);
            } else {
                navigate(`/derrota/${jogadorSessao}`);
            }
        });
    
        if (teste.data.partidaOcupada) {
            client.publish({ destination: "/app/game/move/" + room, body: JSON.stringify({partida: teste.data.partida, iniciandoPartida: true })});
            setPartida(teste.data.partida);
            setTimeout(() => {
                navigate('/tabuleiro');
            }, 2000);
        } else {
            setPartida(teste.data.partida.idpartida);
        }
    };    

    useEffect(()=>{
        if (pecasComidas === 6) {
            setTimeout(() => {
                stompClient.current.publish({
                    destination: "/app/game/finish/" + websocketRoom,
                    body: JSON.stringify({
                        idPartida: partida.idpartida,
                        idVencedor: partida?.primeirojogador?.idJogador,
                        partidaAbandonada: false,
                    })
                })
            }, 1000)
        }else{
            passarVez()
        }
    },[pecasComidas])

    useEffect(() => {
        
        if (partida && partida !== undefined) {
            
            const temp = Object.keys(partida?.segundojogador?.posicoes ?? {}).length;
            setPecasComida(14 - temp);
            if (localStorage.getItem("userLogin") && !localStorage.getItem("partidaSession")){
                let session = JSON.parse(localStorage.getItem("userLogin"));
                if (session?.jogador?.id === partida?.primeirojogador?.idJogador) localStorage.setItem("partidaSession", JSON.stringify({"time":1, "idPartida": partida.idpartida}));
                if (session?.jogador?.id === partida?.segundojogador?.idJogador) localStorage.setItem("partidaSession", JSON.stringify({"time":2, "idPartida": partida.idpartida}));
            }
            for (let chave in partida?.primeirojogador?.posicoes) {
                if (!partida?.primeirojogador?.posicoes[chave]) {
                    setTimeout(() => {
                        stompClient.current.publish({
                            destination: "/app/game/finish/" + websocketRoom,
                            body: JSON.stringify({
                                idPartida: partida.idpartida,
                                idVencedor: partida?.segundojogador?.idJogador,
                                partidaAbandonada: false,
                            })
                        })
                    }, 1000)
                }
            }
        }
        
    }, [partida]);

    const passarVez = () => {
        setJogadorAtualCronometro((jogadorAtualCronometro) => (jogadorAtualCronometro === 1 ? 2 : 1))
    }
    
    const movimentarPartida = async (xOri, yOri, xDes, yDes, jogador) => {
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
                if (diferencaX > 0 && diferencaY === 0) {
                    // Movimento na horizontal
                    for (let i = 1; i < diferencaX; i++) {
                        const xPulado = xOri + (xDes > xOri ? i : -i);
                        const yPulado = yOri;
                        coordenadasPuladas += `${xPulado},${yPulado};`;
                    }
                } else if (diferencaY > 0 && diferencaX === 0) {
                    // Movimento na vertical
                    for (let i = 1; i < diferencaY; i++) {
                        const xPulado = xOri;
                        const yPulado = yOri + (yDes > yOri ? i : -i);
                        coordenadasPuladas += `${xPulado},${yPulado};`;
                    } 
                } else if (diferencaX === diferencaY) {
                    // Movimento na diagonal
                    for (let i = 1; i < diferencaX; i++) {
                        const xPulado = xOri + (xDes > xOri ? i : -i);
                        const yPulado = yOri + (yDes > yOri ? i : -i);
                        coordenadasPuladas += `${xPulado},${yPulado};`;
                    }
                }
                
                if (valoresDestino.includes(`${xDes},${yDes}`)) {
                    limpaPosicoes(atualizaPartida.primeirojogador.posicoes)
                    limpaPosicoes(atualizaPartida.segundojogador.posicoes)

                    delete atualizaPartida[jogadorAtual].posicoes[coordenadaOrigem];
                    atualizaPartida[jogadorAtual].posicoes[coordenadaDestino] = "";
                    
                    if (coordenadasPuladas) {
                        if (atualizaPartida.segundojogador.posicoes.hasOwnProperty(coordenadasPuladas)) {
                            delete atualizaPartida.segundojogador.posicoes[coordenadasPuladas];
                        }
                    }
                    
                    try {
                        const novaMovimentacao = await TabuleiroService.movimentaPartida(atualizaPartida);
                        stompClient.current.publish({ destination: "/app/game/move/" + websocketRoom, body: JSON.stringify({partida: novaMovimentacao})});                       
                        return true;
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

    const finalizarPartida = async (timeVitoria, desistencia) => {
        if (partida) {
            try {
                const idVencedor = timeVitoria === 1 ? partida.primeirojogador.idJogador : partida.segundojogador.idJogador;
                const partidaReturn = await TabuleiroService.finalizaPartida(partida.idpartida, idVencedor, desistencia ? true : false);
                setPartida(partidaReturn.data);
                if (timeVitoria === jogadorSessao){
                    navigate(`/vitoria/${jogadorSessao}`)
                }else{
                    navigate(`/derrota/${jogadorSessao}`)
                }
                return true;
            } catch (e) {
                toast.error("Erro inesperado ao finalizar partida!")
                return false;
            }
        }
    }

    const excluirPartida = async (idPartida) => {
        if (partida) {
            try {

                const response = await TabuleiroService.excluirPartida(idPartida);
                if (response.status === 200) {
                    toast.success("Partida excluida!")
                    stompClient.current.disconnect(() => {
                        console.log('Desconectado do WebSocket.');
                    });
                    return response;
                }
            } catch (e) {
                throw e
            }
            
        }
    }

    return (
        <TabuleiroContext.Provider value={{
            partida, 
            pecasComidas,
            criarPartida,
            movimentarPartida,
            finalizarPartida,
            excluirPartida,
            jogadorAtualCronometro,
            passarVez, 
            tempoRestante,
            setTempoRestante,
            stompClient,
            jogadorSessao,
            websocketRoom
        }}>
            {children}
        </TabuleiroContext.Provider>
    )
}
