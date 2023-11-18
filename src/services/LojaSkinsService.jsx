import axios from "axios";
import { API_URL } from "../utils/constants";

    const api = API_URL;

    const getOpcoesCompraSkin = async (idUsuario) => {
        try{
            const response = await axios.get(api.concat(`/loja/consulta/${idUsuario}`));
            return response;
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
                valorTotal: null
            }
            const response = axios.post(api.concat('/loja/compra'), authBuySkinsRequest);
            return response;
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