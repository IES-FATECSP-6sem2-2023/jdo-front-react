import axios from "axios";

    const api= 'http://localhost:8080'

    const iniciaPartida = async (idJogador) => {
        try{
            const idPartida = await axios.post(api + '/paritda/iniciar', idJogador);
            return idPartida;
        } catch (e) {
            throw e;
        }
    }

    const movimentaPartida = async (partida) => {
        try {
            const response = await axios.post(api + '/partida/movimentar', partida);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const finalizaPartida = async (finalRequest) => {
        try {
            const response = await axios.post(api + '/partida/finalizar', finalRequest);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

const TabuleiroService = {

    iniciaPartida,
    movimentaPartida,
    finalizaPartida

}

export default TabuleiroService