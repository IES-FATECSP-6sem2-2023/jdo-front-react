import axios from "axios";
import { API_URL } from "../utils/constants";

    const api = API_URL;

    const iniciaPartida = async (idJogador, time) => {
        try{
            const idPartida = await axios.post(api.concat('/partida/iniciar'), {
                idJogador: idJogador,
                tipo: time
            });
            return idPartida;
        } catch (e) {
            throw e;
        }
    }

    const movimentaPartida = async (partida) => {
        try {
            const response = await axios.post(api.concat('/partida/movimentar'), partida);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const finalizaPartida = async (idPartida, idJogador, desistencia) => {
        try {
            const response = await axios.post(api.concat('/partida/finalizar'), {
                idPartida: idPartida,
                idVencedor: idJogador,
                partidaAbandonada: desistencia
            });
            return response;
        } catch (e) {
            throw e;
        }
    }

    const excluirPartida = async (idPartida) => {
        try {
            const response = await axios.post(api.concat(`/partida/excluir/${idPartida}`));
            return response;
        } catch (e) {
            throw e;
        }
    }

const TabuleiroService = {

    iniciaPartida,
    movimentaPartida,
    finalizaPartida,
    excluirPartida

}

export default TabuleiroService