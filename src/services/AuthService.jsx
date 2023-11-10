import axios from "axios";

    const api= 'http://localhost:8080';

    const authLoginConta = async (email, senha) => {
        try{
            const authContaRequest = {
                email: email,
                senha: senha
            }
            const response = await axios.post(api.concat('/autenticacao/verifica'), authContaRequest);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    };

    const authCadastroConta = async (nome, username, email, senha) => {
        try {
            const authCadastroContaRequest = {
                nome: nome,
                username: username,
                email: email,
                senha: senha
            }
            const response = await axios.post(api.concat('/autenticacao/cadastra'), authCadastroContaRequest);
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