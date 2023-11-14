import axios from "axios";

    const api= 'http://localhost:8080'

    const iniciaPartida = async (idJogador, time) => {
        try{
            const requestInciarPartida = {
                idJogador: idJogador,
                tipo: time
            }
            debugger
            const idPartida = await axios.post(api.concat('/partida/iniciar'), requestInciarPartida);
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

    const finalizaPartida = async (idPartida, idJogador) => {
        try {
            const finalRequest = {
                idPartida: idPartida,
                idVendedor: idJogador
            }
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