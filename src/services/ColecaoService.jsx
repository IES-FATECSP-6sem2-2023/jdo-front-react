import axios from "axios";

    const api= 'http://localhost:8080';

    const getColecao = async (idUsuario) => {
        try{
            const response = await axios.get(api +`/item/${idUsuario}/all`);
            //const response = await axios.get(`http://backendjogodaonca-env.eba-d9srpszz.us-east-1.elasticbeanstalk.com/item/${idUsuario}/all`);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const authItemFavorito = (idUsuario, idItemFavorito) => {
        try {
            const authDefaultSkinRequest = {
                "idjogador": idUsuario,
                "iditem": idItemFavorito 
            }
            const response = axios.patch(`${api}/item/${idUsuario}/favorito/${idItem}`, authDefaultSkinRequest);
            return response.data;
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