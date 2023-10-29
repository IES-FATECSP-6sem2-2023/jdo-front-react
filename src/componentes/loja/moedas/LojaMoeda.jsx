import React from 'react';
import { useNavigate } from 'react-router';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import LojaMoedaService from '/src/services/LojaMoedasService';
import './LojaMoeda.css';

function LojaMoeda() {
    const navigate = useNavigate()
    const compraMoeda = (event) => {
        const modal = document.getElementById("modal")
        const modalCompra = document.getElementById("modal-compra")
        const bgLojaMoeda = document.getElementById("bg-lojaMoeda")
        const imgItem = document.getElementById("img-item-comprado");
        const textoItem = document.getElementById("texto-item-comprado-loja-moeda");

        bgLojaMoeda.style.display = 'none';
        modal.style.display = 'flex';
        modalCompra.style.display = 'block';

        let imgItemComprado = '';
        let txtItemComprado = '';
        let tipoMoeda = 0; //0-esmeralda; 1-moeda
        let qtdeMoeda = 0;

        switch (parseInt(event.target.value)) {
            case 1:
                imgItemComprado = '/src/assets/imagens/vetores/poucas_esmeraldas.png';
                txtItemComprado = '100 ESMERALDAS!';
                qtdeMoeda = 100;
                break;
            case 2:
                imgItemComprado = '/src/assets/imagens/vetores/saco_esmeraldas.png';
                txtItemComprado = '500 ESMERALDAS!';
                qtdeMoeda = 500;
                break;
            case 3:
                imgItemComprado = '/src/assets/imagens/vetores/balde_esmeraldas.png';
                txtItemComprado = '1.000 ESMERALDAS!';
                qtdeMoeda = 1000;
                break;
            case 4:
                imgItemComprado = '/src/assets/imagens/vetores/poucas_moedas.png';
                txtItemComprado = '100 MOEDAS!';
                tipoMoeda = 1;
                qtdeMoeda = 100;
                break;
            case 5:
                imgItemComprado = '/src/assets/imagens/vetores/saco_moedas.png';
                txtItemComprado = '1.000 MOEDAS!';
                tipoMoeda = 1;
                qtdeMoeda = 1000;
                break;
            case 6:
                imgItemComprado = '/src/assets/imagens/vetores/balde_moedas.png';
                txtItemComprado = '10.000 MOEDAS!';
                tipoMoeda = 1;
                qtdeMoeda = 10000;
                break;
            default:
                imgItemComprado = '';
                txtItemComprado = '';
                break;
        }

        imgItem.style.backgroundImage = `url(${imgItemComprado})`;
        textoItem.innerText = "VOCÊ COMPROU " + txtItemComprado;

        const compraMoedas = async (id, moeda, quantidade) => {
            try {
                const data = await LojaMoedaService.sendCoins(id, moeda, quantidade);
                
                if (data.status === 200) {
                    setResponse(data);
                } 
                else {
                    console.error('Erro na resposta do servidor:', data);
                }
            } 
            catch (error) {
                console.error('Erro na busca de dados:', error);
            }
        };

        compraMoedas(1, tipoMoeda, qtdeMoeda);
    }

        return(
            <section className="bg-loja-moeda">
                <div className="modal-container-loja-moeda" id="modal">
                    <div className="box-compra-loja-loja-moeda" id="modal-compra">
                        <div className="box-titulo-loja-moeda">
                            <h1>PARABÉNS!</h1>
                        </div>
                        <div className="box-content-loja-moeda">
                            <div className="img-compra-loja-moeda">
                                <div className="img-item-comprado-loja-moeda" id="img-item-comprado"></div>
                            </div>
                            <div className="compra-texto-loja-moeda">
                                <p id="texto-item-comprado-loja-moeda"></p>
                            </div>
                            <div className="loja-moeda">
                                <button onClick={() => {navigate("/menu")}}>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <p className="info-p-loja-moeda">1000</p>
                            </div>
                        </div>
                        <div className="item-qtde-loja-moeda moedas-loja-moeda">
                            <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
                            <div className="info-esmeralda-loja-moeda">
                                <p className="info-p-loja-moeda">1000</p>
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