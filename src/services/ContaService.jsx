import axios from "axios";

    const api= 'http://localhost:8080'

    const getConta = async (idJogador) => {
        try{
            const response = await axios.get(`${api}/consulta/jogador/${idJogador}`);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const atualizaConta = async (nome, username, email, senha) => {
        try{
            debugger
            const response = await axios.post(`${api}/autenticacao/altera`, {
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