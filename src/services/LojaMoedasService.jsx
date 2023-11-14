import axios from "axios";

const api = 'http://localhost:8080';

const sendCoins = async (idUser, tipoMoeda, quantidadeMoeda) => {
    try {
        const authSendCoinsRequest = {
            idJogador: idUser,
            idItens: [{
                idItem: tipoMoeda,
                qntItem: quantidadeMoeda,
                itemFavorito: false
            }],
            pagamentoMoedaRara: false,
            valorTotal: 0
        }
        const response = axios.post(api.concat('/loja/compra'), authSendCoinsRequest);
        return response;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

const LojaMoedaService = {
    sendCoins
}

export default LojaMoedaService;