import axios from "axios";

    const api= 'http://localhost:8080';

    const getOpcoesCompraSkin = async (idUsuario) => {
        try{
            const response = await axios.get(api +`/loja/consulta/${idUsuario}`);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const sendSkin = async (idUser, idItem, tipoPagamento) => {
        try {
            const authBuySkinsRequest = {
                idJogador: idUser,
                idItens: [{
                    idItem: idItem,
                    qntItem: 1,
                    itemFavorito: true
                }],
                pagamentoMoedaRara: tipoPagamento,
                valorTotal: 0
            }
            const response = axios.post(api.concat('/loja/compra'), authBuySkinsRequest);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

const LojaSkinsService = {
    getOpcoesCompraSkin,
    sendSkin
}

export default LojaSkinsService