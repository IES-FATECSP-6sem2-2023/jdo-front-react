import React, { Component, useState } from "react";
import './lojaMoeda.css'
import { render } from "react-dom";

class lojaMoedas extends Component{
    compraMoeda = (event) => {
        const modal = document.getElementById("modal")
        const modalCompra = document.getElementById("modal-compra")
        const bgLojaMoeda = document.getElementById("bg-lojaMoeda")
        const imgItem = document.getElementById("img-item-comprado");
        const textoItem = document.getElementById("texto-item-comprado");

        bgLojaMoeda.style.display = 'none';
        modal.style.display = 'flex';
        modalCompra.style.display = 'block';

        let imgItemComprado = '';
        let txtItemComprado = '';
        let tipoMoeda = 0; //0-esmeralda; 1-moeda
        let qtdeMoeda = 0;

        switch (parseInt(event.target.value)) {
            case 1:
                imgItemComprado = 'src/assets/imagens/vetores/poucas_esmeraldas.png';
                txtItemComprado = '100 ESMERALDAS!';
                qtdeMoeda = 100;
                break;
            case 2:
                imgItemComprado = 'src/assets/imagens/vetores/saco_esmeraldas.png';
                txtItemComprado = '500 ESMERALDAS!';
                qtdeMoeda = 500;
                break;
            case 3:
                imgItemComprado = 'src/assets/imagens/vetores/balde_esmeraldas.png';
                txtItemComprado = '1.000 ESMERALDAS!';
                qtdeMoeda = 1000;
                break;
            case 4:
                imgItemComprado = 'src/assets/imagens/vetores/poucas_moedas.png';
                txtItemComprado = '100 MOEDAS!';
                tipoMoeda = 1;
                qtdeMoeda = 100;
                break;
            case 5:
                imgItemComprado = 'src/assets/imagens/vetores/saco_moedas.png';
                txtItemComprado = '1.000 MOEDAS!';
                tipoMoeda = 1;
                qtdeMoeda = 1000;
                break;
            case 6:
                imgItemComprado = 'src/assets/imagens/vetores/balde_moedas.png';
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
    }

    render(){
        return( 
            <section className="bg-home">
                <div className="modal-container" id="modal">
                    <div className="box-compra-loja" id="modal-compra">
                        <div className="box-titulo">
                            <h1>PARABÉNS!</h1>
                        </div>
                        <div className="box-content">
                            <div className="img-compra">
                                <div className="img-item-comprado" id="img-item-comprado"></div>
                            </div>
                            <div className="compra-texto">
                                <p id="texto-item-comprado"></p>
                            </div>
                            <div className="home">
                                <button>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-home-container" id="bg-lojaMoeda">
                    <div className="menu-superior">
                        <div className="menu">
                            <div className="item-retorno">
                                <div className="icon-retorno"></div>
                            </div>
                        </div>
                        <div className="titulo">
                            <div className="placa-titulo">
                                <h1>LOJA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="moedas-atuais">
                        <div className="item-qtde esmeraldas">
                            <div className="icon icon-esmeralda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </div>
                        <div className="item-qtde moedas">
                            <div className="icon icon-moeda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </div>
                    </div>
                    <div className="loja">
                        <div className="loja-esmeralda">
                            <div className="loja-esmeralda-item">
                                <div className="foto-item esmeralda-p"></div>
                                <div className="nome-item">
                                    <h1>100 ESMERALDAS</h1>
                                </div>
                                <button className="valor" value="1" id="1" onClick={this.compraMoeda}>R$10,00</button>
                            </div>
                            <div className="loja-esmeralda-item">
                                <div className="foto-item esmeralda-m"></div>
                                <div className="nome-item">
                                    <h1>500 ESMERALDAS</h1>
                                </div>
                                <button className="valor" value="2" onClick={this.compraMoeda}>R$50,00</button>
                            </div>
                            <div className="loja-esmeralda-item">
                                <div className="foto-item esmeralda-g"></div>
                                <div className="nome-item">
                                    <h1>1.000 ESMERALDAS</h1>
                                </div>
                                <button className="valor" value={3} onClick={this.compraMoeda}>R$100,00</button>
                            </div>
                        </div>
                        <div className="loja-moeda">
                            <div className="loja-moeda-item">
                                <div className="foto-item moeda-p">
                                </div>
                                <div className="nome-item">
                                    <h1>100 MOEDAS</h1>
                                </div>
                                <button className="valor" value={4} onClick={this.compraMoeda}>R$50,00</button>
                            </div>
                            <div className="loja-moeda-item">
                                <div className="foto-item moeda-m">
                                </div>
                                <div className="nome-item">
                                    <h1>1.000 MOEDAS</h1>
                                </div>
                                <button className="valor" value={5} onClick={this.compraMoeda}>R$20,00</button>
                            </div>
                            <div className="loja-moeda-item">
                                <div className="foto-item moeda-g">
                                </div>
                                <div className="nome-item">
                                    <h1>10.000 MOEDAS</h1>
                                </div>
                                <button className="valor" value={6} onClick={this.compraMoeda}>R$50,00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default lojaMoedas