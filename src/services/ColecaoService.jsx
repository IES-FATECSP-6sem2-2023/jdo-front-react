import axios from "axios";
import { API_URL } from "../utils/constants";

    const api = API_URL;

    const getColecao = async (idUsuario) => {
        try{
            const response = await axios.get(api.concat(`/item/${idUsuario}/all`));
            return response;
        } catch (e) {
            throw e;
        }
    }

    const authItemFavorito = async (idUsuario, idItem) => {
        try {
            const response = await axios.put(api.concat(`/item/${idUsuario}/favorito/${idItem}`));
            return response;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

const ColecaoService = {
    getColecao,
    authItemFavorito
}

export default ColecaoService