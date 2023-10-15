import React, { Component } from "react";
import './LojaSkin.css'
import Skin from '../../assets/imagens/skins/onca_amazonia.png'

class LojaSkin extends Component{
    compraSkin = (event) => {
        const modal = document.getElementById("modal")
        const modalCompra = document.getElementById("modal-compra")
        const bgLojaSkin = document.getElementById("bg-lojaSkin")
        const imgItem = document.getElementById("img-item-comprado");

        bgLojaSkin.style.display = 'none';
        modal.style.display = 'flex';
        modalCompra.style.display = 'block';

        let imgItemComprado = '';
        let tipoMoeda = 0; //0-esmeralda; 1-moeda
        let valorMoeda = 0;

        switch (parseInt(event.currentTarget.value)) {
            case 1:
                imgItemComprado = 'src/assets/imagens/skins/cachorro_caatinga.png';
                tipoMoeda = 0;
                valorMoeda = 55;
                break;
            case 2:
                imgItemComprado = 'src/assets/imagens/skins/cachorro_caatinga.png';
                tipoMoeda = 1;
                qtdeMoeda = 200;
                break;
            default:
                break;
        }

        imgItem.style.backgroundImage = `url(${imgItemComprado})`;
    }

    render(){
        return(
            <section className="bg-loja-skin">
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
                                <p id="texto-item-comprado">VOCÊ COMPROU UMA NOVA SKIN!</p>
                            </div>
                            <div className="home">
                                <button>VER NA COLEÇÃO</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-container" id="bg-lojaSkin">
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
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={1} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={2} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={3} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={4} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={5} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={6} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={7} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={8} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={9} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={10} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={11} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={12} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={13} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={14} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={15} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={16} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={17} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={18} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos">
                                <button className="preco-esmeralda" value={19} onClick={this.compraSkin}>
                                    <div className="icon icon-esmeralda"></div>
                                    <div className="preco"><p>100</p></div>
                                </button>
                                <button className="preco-moeda" value={20} onClick={this.compraSkin}>
                                    <div className="icon icon-moeda"></div>
                                    <div className="preco"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LojaSkin