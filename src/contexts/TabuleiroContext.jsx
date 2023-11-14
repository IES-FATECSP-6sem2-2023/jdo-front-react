import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuthConta from '/src/hooks/AuthConta';
import TabuleiroService from "../services/TabuleiroService";

export const TabuleiroContext = createContext({});

export const TabuleiroProvider = ({ children }) => {
    const [pecasComidas, setPecasComida] = useState(0);
    const { user } = useAuthConta();
    const [partida, setPartida] = useState({
        "idpartida": 279186306,
        "primeirojogador": {
          "idJogador": 3,
          "idSkinFavorita": 3,
          "nomeSkinFavorita": "Skin onca padrÃ£o",
          "posicoes": {
            "2,2;": "3,1;3,2;3,3;"
          }
        },
        "segundojogador": {
          "idJogador": 4,
          "idSkinFavorita": 4,
          "nomeSkinFavorita": "Skin cachorro padrÃ£o",
          "posicoes": {
            "1,0;": "",
            "0,1;": "",
            "0,0;": "",
            "2,0;": "3,0;3,1;",
            "1,2;": "",
            "0,3;": "",
            "3,2;": "",
            "2,1;": "3,1;",
            "0,2;": "",
            "1,4;": "",
            "1,3;": "",
            "2,3;": "3,3;",
            "0,4;": "",
            "2,4;": "3,3;3,4;"
          }
        }
      });

    const criarPartida = async (tipo) => {
        try {
            if (user && user.jogador) {
                const idJogador = user.jogador.id;
                debugger
                const teste = await TabuleiroService.iniciaPartida(idJogador,tipo);
            }
            return;
        } catch (e) {
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
                        debugger
                        delete atualizaPartida.segundojogador.posicoes[coordenadasPuladas];
                        setPecasComida(prevPecasComida => {
                            console.log("Valor anterior de pecasComida:", prevPecasComida);
                            return prevPecasComida + 1;
                          });
                    }
                    
                    try {
                        const novaMovimentacao = await TabuleiroService.movimentaPartida(atualizaPartida);
                        if (novaMovimentacao) setPartida(novaMovimentacao);
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

    return (
        <TabuleiroContext.Provider value={{partida, pecasComidas, criarPartida, movimentarPartida, finalizarPartida}}>
            {children}
        </TabuleiroContext.Provider>
    )
}