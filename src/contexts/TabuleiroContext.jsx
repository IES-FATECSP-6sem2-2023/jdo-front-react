import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import TabuleiroService from "../services/TabuleiroService";

export const TabuleiroContext = createContext({});

export const TabuleiroProvider = ({ children }) => {
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
            "1,1;": "",
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

    const criarPartida = async () => {
        try {
            if (user && user.jogador) {
                const idJogador = user.jogador.id;
                await TabuleiroService.iniciaPartida(idJogador);
            }
            return;
        } catch (e) {
            toast.error("Erro ao tentar criar uma partida!");
            return;
        }
    }

    // const participarPartida = async () => {
    //     if (user && user.jogador) {
    //         try {
    //             const idJogador = user.jogador.id;
    //             const partida = await TabuleiroService.participaPartida(idJogador);
    //             setPartida(partida.data);
    //             return;
    //         } catch (e) {
    //             toast.error("Erro ao tentar entrar em uma partida!");
    //             return;
    //         }
    //     }
    // }

    useEffect(() => {
        
        if (partida && partida !== undefined) {
            console.log(partida)
            if (!localStorage.getItem("timeTabuleiro")){
                let session = JSON.parse(localStorage.getItem("userLogin"));
                if (session.jogador.id === partida?.primeirojogador?.idJogador) localStorage.setItem("timeTabuleiro", 1);
                if (session.jogador.id === partida?.segundojogador?.idJogador) localStorage.setItem("timeTabuleiro", 2);
            }
        
            // const fetchData = async () => {
            //     try {
            //         const partidaReturn = await TabuleiroService.movimentaPartida(partida);
            //         debugger
            //         if (partidaReturn) setPartida(partidaReturn.data);
            //     } catch (e) {
            //         toast.error("Erro ao tentar efetuar movimentação!");
            //         // @ToDo: ver como voltar o tabuleiro à versão anterior dessa movimentação
            //     }
            // };
        
            // fetchData();
        }
    }, []);

    const movimentarPartida = (xOri, yOri, xDes, yDes, jogador) => {
        console.log("PASSOU AQUI", partida)
        if (partida) {
            const coordenadaOrigem = `${xOri},${yOri};`;
            const coordenadaDestino = `${xDes},${yDes};`;
            let atualizaPartida = { ...partida };
            const jogadorAtual = jogador === 1 ? 'primeirojogador' : 'segundojogador';

            if (atualizaPartida[jogadorAtual].posicoes.hasOwnProperty(coordenadaOrigem)) {
                const valoresDestino = atualizaPartida[jogadorAtual].posicoes[coordenadaOrigem].split(";");
                
                if (valoresDestino.includes(`${xDes},${yDes}`)) {
                    limpaPosicoes(atualizaPartida.primeirojogador)
                    limpaPosicoes(atualizaPartida.segundojogador)

                    delete atualizaPartida[jogadorAtual].posicoes[coordenadaOrigem];
                    atualizaPartida[jogadorAtual].posicoes[coordenadaDestino] = "";
                    
                    setPartida(atualizaPartida);
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
                const idVencedor = timeVitoria === "onca" ? partida.primeirojogador.idJogador :partida.segundojogador.idJogador;
                const finalRequest = {
                    idpartida: partida.idpartida,
                    idVendedor: idVencedor
                }
                const partidaReturn = await TabuleiroService.finalizaPartida(finalRequest);
                setPartida(partidaReturn.data);
                return;
            } catch (e) {
                toast.error("Erro inesperado ao finalizar partida!")
                return;
            }
        }
    }

    return (
        <TabuleiroContext.Provider value={{partida, criarPartida, movimentarPartida, finalizarPartida}}>
            {children}
        </TabuleiroContext.Provider>
    )
}