import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import TabuleiroService from "../services/TabuleiroService";

export const TabuleiroContext = createContext({});

export const TabuleiroProvider = ({ children }) => {
    const [partida, setPartida] = useState({
        "idpartida": 1,
        "primeirojogador": {
          "idJogador": 1,
          "posicoes": {
            "2,2;": ""
          }
        },
        "segundojogador": {
          "idJogador": 4,
          "posicoes": {
            "0,0;": "",
            "1,0;": "",
            "0,1;": "",
            "2,0;": "",
            "1,1;": "",
            "0,2;": "",
            "2,1;": "",
            "1,2;": "",
            "0,3;": "",
            "1,3;": "",
            "0,4;": "",
            "2,3;": "",
            "1,4;": "",
            "2,4;": ""
          }
        }
      });

    useEffect(() => {
        if (partida != undefined) {
            let session = JSON.parse(localStorage.getItem("userLogin"));
            if (session.jogador.id === partida.primeirojogador.idJogador) localStorage.setItem("timeTabuleiro", 1);
            if (session.jogador.id === partida.segundojogador.idJogador) localStorage.setItem("timeTabuleiro", 2);
        }
    }, [partida]);

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

    const participarPartida = async () => {
        if (user && user.jogador) {
            try {
                const idJogador = user.jogador.id;
                const partida = await TabuleiroService.participaPartida(idJogador);
                setPartida(partida.data);
                return;
            } catch (e) {
                toast.error("Erro ao tentar entrar em uma partida!");
                return;
            }
        }
    }

    const movimentarPartida = async (xOri, yOri, xDes, yDes, jogador) => {
        if (partida) {
            try {
                debugger
                const partidaReturn = await TabuleiroService.movimentaPartida(partida);
                setPartida(partidaReturn.data);
                return;
            } catch (e) {
                toast.error("Erro ao tentar efetuar movimentação!")
                // @ToDo: ver como voltar o tabuleiro a versão anterior dessa movimentação
                return;
            }            
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
        <TabuleiroContext.Provider value={{partida, criarPartida, participarPartida, movimentarPartida, finalizarPartida}}>
            {children}
        </TabuleiroContext.Provider>
    )
}