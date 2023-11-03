import React, {useState } from 'react';
import { useNavigate } from 'react-router';
import './LojaMoeda.css';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import LojaMoedaService from '/src/services/LojaMoedasService';

function LojaMoeda() {
    const navigate = useNavigate()
    const { user } = useAuthConta();
    const [idCompra, setIdCompra] = useState(null);

    // @Todo: pegar informação da "compra" e salvar na conta do usuário + atulizar sessão (paulo fica responsavel pela parte da sessão)

    const compraMoeda = (event) => {
        let idMoeda = parseInt(event.target.value)
        let qtdeMoeda, tipoMoeda;
        setIdCompra(idMoeda);

        switch (idMoeda) {
            case 1:
                qtdeMoeda = 100;
                tipoMoeda = 0;
                break;
            case 2:
                qtdeMoeda = 500;
                tipoMoeda = 0;
                break;
            case 3:
                qtdeMoeda = 1000;
                tipoMoeda = 0;
                break;
            case 4:
                qtdeMoeda = 100;
                tipoMoeda = 1;
                break;
            case 5:
                qtdeMoeda = 1000;
                tipoMoeda = 1;
                break;
            case 6:
                qtdeMoeda = 10000;
                tipoMoeda = 1;
                break;
            default:
                imgItemComprado = '';
                txtItemComprado = '';
                break;
        }

        // const compraMoedas = async (id, moeda, quantidade) => {
        //     try {
        //         const data = await LojaMoedaService.sendCoins(id, moeda, quantidade);
                
        //         if (data.status === 200) {
        //             setResponse(data);
        //         } 
        //         else {
        //             console.error('Erro na resposta do servidor:', data);
        //         }
        //     } 
        //     catch (error) {
        //         console.error('Erro na busca de dados:', error);
        //     }
        // };

        // compraMoedas(1, tipoMoeda, qtdeMoeda);
    }
    
    return(
        <section className="bg-loja-moeda">
            <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
                <div className="menu-superior-loja-moeda">
                    <div className="menu-loja-moeda">
                        <button className="item-retorno-loja-moeda" onClick={() => {navigate("/menu")}}>
                            <ReturnIcon />
                        </button>
                    </div>
                    <div className="titulo-loja-moeda">
                        <div className="placa-titulo-loja-moeda">
                            <h1>LOJA</h1>
                        </div>
                    </div>
                </div>
                <div className="moedas-atuais-loja-moeda">
                    <div className="item-qtde-loja-moeda esmeraldas-loja-moeda">
                        <div className="icon-loja-moeda icon-esmeralda-loja-moeda"></div>
                        <div className="info-esmeralda-loja-moeda">
                            <p className="info-p-loja-moeda">{user?.jogador?.qntmoedaespecial}</p>
                        </div>
                    </div>
                    <div className="item-qtde-loja-moeda moedas-loja-moeda">
                        <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
                        <div className="info-esmeralda-loja-moeda">
                            <p className="info-p-loja-moeda">{user?.jogador?.qntmoedanormal}</p>
                        </div>
                    </div>
                </div>
                <div className="loja-loja-moeda">
                    <div className="loja-esmeralda-loja-moeda">
                        <div className="loja-esmeralda-item-loja-moeda">
                            <div className="foto-item-loja-moeda esmeralda-p-loja-moeda"></div>
                            <div className="nome-item-loja-moeda">
                                <h1>100 ESMERALDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value="1" id="1" onClick={compraMoeda}>R$10,00</button>
                        </div>
                        <div className="loja-esmeralda-item-loja-moeda">
                            <div className="foto-item-loja-moeda esmeralda-m-loja-moeda"></div>
                            <div className="nome-item-loja-moeda">
                                <h1>500 ESMERALDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value="2" onClick={compraMoeda}>R$50,00</button>
                        </div>
                        <div className="loja-esmeralda-item-loja-moeda">
                            <div className="foto-item-loja-moeda esmeralda-g-loja-moeda"></div>
                            <div className="nome-item-loja-moeda">
                                <h1>1.000 ESMERALDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value={3} onClick={compraMoeda}>R$100,00</button>
                        </div>
                    </div>
                    <div className="loja-moeda-loja-moeda">
                        <div className="loja-moeda-item-loja-moeda">
                            <div className="foto-item-loja-moeda moeda-p-loja-moeda">
                            </div>
                            <div className="nome-item-loja-moeda">
                                <h1>100 MOEDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value={4} onClick={compraMoeda}>R$50,00</button>
                        </div>
                        <div className="loja-moeda-item-loja-moeda">
                            <div className="foto-item-loja-moeda moeda-m-loja-moeda">
                            </div>
                            <div className="nome-item-loja-moeda">
                                <h1>1.000 MOEDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value={5} onClick={compraMoeda}>R$20,00</button>
                        </div>
                        <div className="loja-moeda-item-loja-moeda">
                            <div className="foto-item-loja-moeda moeda-g-loja-moeda">
                            </div>
                            <div className="nome-item-loja-moeda">
                                <h1>10.000 MOEDAS</h1>
                            </div>
                            <button className="valor-loja-moeda" value={6} onClick={compraMoeda}>R$50,00</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LojaMoeda