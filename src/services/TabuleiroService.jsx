import axios from "axios";

    const api= 'http://localhost:8080'

    const iniciaPartida = async (idJogador) => {
        try{
            const idPartida = await axios.get(api + '/paritda/iniciar', idJogador);
            return idPartida;
        } catch (e) {
            throw e;
        }
    }

    const participaPartida = async (idJogador) => {
        try{
            const response = await axios.get(api + '/partida/participar', idJogador);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const movimentaPartida = async (partida) => {
        try {
            const response = await axios.get(api + '/partida/movimentar', partida);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const finalizaPartida = async (finalRequest) => {
        try {
            const response = await axios.get(api + '/partida/finalizar', finalRequest);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

const TabuleiroService = {

    iniciaPartida,
    participaPartida,
    movimentaPartida,
    finalizaPartida

}

export default TabuleiroService