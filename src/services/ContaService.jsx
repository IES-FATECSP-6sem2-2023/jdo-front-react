import axios from "axios";
import { API_URL } from "../utils/constants";

    const api = API_URL;

    const getConta = async (idJogador) => {
        try{
            const response = await axios.get(api.concat(`/consulta/jogador/${idJogador}`));
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const atualizaConta = async (nome, username, email, senha) => {
        try{
            const response = await axios.post(api.concat(`/autenticacao/altera`), {
                nome: nome,
                username: username,
                email: email,
                senha: senha
            });
            return response;
        } catch (e) {
            throw e;
        }
    }

const ContaService = {

    getConta,
    atualizaConta

}

export default ContaService