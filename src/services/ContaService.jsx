import axios from "axios";

    const api= 'http://localhost:8080'

    const getConta = async (idJogador) => {
        try{
            const response = await axios.get(api +`/consulta/jogador/${idJogador}`);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

const ContaService = {

    getConta

}

export default ContaService