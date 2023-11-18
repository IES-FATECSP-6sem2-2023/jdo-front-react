import axios from "axios";
import { API_URL } from "../utils/constants";

    const api = API_URL;

    const authLoginConta = async (email, senha) => {
        try{
            const response = await axios.post(api.concat('/autenticacao/verifica'), {
                email: email,
                senha: senha
            });
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    const authCadastroConta = async (nome, username, email, senha) => {
        try {
            const response = await axios.post(api.concat('/autenticacao/cadastra'), {
                nome: nome,
                username: username,
                email: email,
                senha: senha
            });
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

const AuthService = {
    authLoginConta,
    authCadastroConta
}

export default AuthService