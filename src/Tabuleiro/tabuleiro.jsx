import React, { Component, useState } from "react";
import './tabuleiro.css'
import placaUser from '../assets/imagens/placas/placa_usuario.png'
import { render } from "react-dom";

class Tabuleiro extends Component {
    state = {
        somAtivo: false
    };
    musicaDeFundo = new Audio('src/assets/sons/ambiente/ambiente2.wav');

    somFundo = () => {
        const {
            somAtivo
        } = this.state;
        const btnSomFundo = document.getElementById("icone-som");

        if (!somAtivo) {
            btnSomFundo.style.backgroundImage = "url('src/assets/imagens/icones/volume-on.svg')";
            this.musicaDeFundo.loop = true;
            // this.musicaDeFundo.volume = 0.8;
            this.musicaDeFundo.play();
        } else {
            btnSomFundo.style.backgroundImage = "url('src/assets/imagens/icones/volume-off.svg')";
            this.musicaDeFundo.pause();
        }

        this.setState({
            somAtivo: !somAtivo
        });
    }

    somReacao = (event) => {
        const audioLista = {
            1: 'src/assets/sons/tabuleiro/rindo.mp3',
            2: 'src/assets/sons/tabuleiro/nervoso.mp3',
            3: 'src/assets/sons/tabuleiro/surpreso.mp3',
            4: 'src/assets/sons/tabuleiro/cachorro.mp3',
            5: 'src/assets/sons/tabuleiro/onca.mp3',
        };

        const valorDaReacao = parseInt(event.target.value);

        if (audioLista[valorDaReacao]) {
            const audio = new Audio(audioLista[valorDaReacao]);
            audio.play();
        } else {
            console.log("Valor não reconhecido");
        }
    }

    // const modal = document.getElementById("modal");
    // const modalLoading = document.getElementById("modal-loading");
    // const modalVitoria = document.getElementById("modal-vitoria");
    // const modalDerrota = document.getElementById("modal-derrota");
    // const tabuleiroContainer = document.getElementById("tabuleiro-container");
  
    //Se o jogador vencer
    // tabuleiroContainer.style.display = "none"
    // modal.style.display = "block"
    // modalVitoria.style.display = "block"
    // const somVitoria = new Audio('src/assets/sons/tabuleiro/jogo_ganho.mp3');
    // somVitoria.play();

    //Se o jogador perder
    // tabuleiroContainer.style.display = "none"
    // modal.style.display = "block"
    // modalDerrota.style.display = "block"
    // const somDerrota = new Audio('src/assets/sons/tabuleiro/jogo_perdido.mp3');
    // somDerrota.play();
    
    render(){
        return(
            <section className="bg-home">
                <div className="modal-container" id="modal">
                    <div className="box-loading" id="modal-loading">
                        <div className="loading-area">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                        </div>
                    </div>
                    <div className="box-vitoria" id="modal-vitoria">
                        <div className="box-titulo">
                            <h1>VITÓRIA!</h1>
                        </div>
                        <div className="box-content">
                            <div className="img-resultado">
                                <div className="icon-vitoria"></div>
                            </div>
                            <div className="recompensas">
                                <div className="recompensa-xp">
                                    <div className="recompensa-xp-icon"></div>
                                    <div className="recompensa-texto">
                                        <p>+ 25 de XP</p>
                                    </div>
                                </div>
                                <div className="recompensa-moeda">
                                    <div className="moeda-icon"></div>
                                    <div className="recompensa-texto">
                                        <p>+ 30 moedas</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="home">
                                <button>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-derrota" id="modal-derrota">
                        <div className="box-titulo">
                            <h1>DERROTA!</h1>
                        </div>
                        <div className="box-content">
                            <div className="img-resultado">
                                <div className="icon-derrota"></div>
                            </div>
                            <div className="recompensas">
                                <div className="castigo-xp">
                                    <div className="castigo-xp-icon"></div>
                                    <div className="recompensa-texto">
                                        <p>- 15 de XP</p>
                                    </div>
                                </div>
                            </div>
                            <div className="home">
                                <button>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tabuleiro-container" id="tabuleiro-container">
                    <div className="area-onca">
                        <div className="area-onca-container">
                            <div className="placar">
                                <div className="placar-onca"></div> 
                                {/* Add classe "peca-comida" para mostrar o placar */}
                                <div className="placar-onca"></div>
                                <div className="placar-onca"></div>
                                <div className="placar-onca"></div>
                                <div className="placar-onca"></div>
                                <div className="placar-onca"></div>
                            </div>
                            <div className="contador">
                                <h1>10</h1>
                            </div>
                            <div className="info-user jogador-onca">
                                <img src={placaUser} />
                                <h1 id="contador-onca">JOGADOR ONÇA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="principal">
                        <div className="tabuleiro">
                            <div className="tabuleiro-container">
                                <div className="malha-tabuleiro">
                                    <div className="row">
                                        <div className="cell peca-cachorro" data-x="0" data-y="0"></div>
                                        <div className="cell peca-cachorro" data-x="1" data-y="0"></div>
                                        <div className="cell peca-cachorro" data-x="2" data-y="0"></div>
                                        <div className="cell peca-cachorro" data-x="3" data-y="0"></div>
                                        <div className="cell peca-cachorro" data-x="4" data-y="0"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell peca-cachorro" data-x="0" data-y="1"></div>
                                        <div className="cell peca-cachorro" data-x="1" data-y="1"></div>
                                        <div className="cell peca-cachorro" data-x="2" data-y="1"></div>
                                        <div className="cell peca-cachorro" data-x="3" data-y="1"></div>
                                        <div className="cell peca-cachorro" data-x="4" data-y="1"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell peca-cachorro" data-x="0" data-y="2"></div>
                                        <div className="cell peca-cachorro" data-x="1" data-y="2"></div>
                                        <div className="cell peca-onca" data-x="2" data-y="2"></div>
                                        <div className="cell peca-cachorro" data-x="3" data-y="2"></div>
                                        <div className="cell peca-cachorro" data-x="4" data-y="2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell" data-x="0" data-y="3"></div>
                                        <div className="cell" data-x="1" data-y="3"></div>
                                        <div className="cell" data-x="2" data-y="3"></div>
                                        <div className="cell" data-x="3" data-y="3"></div>
                                        <div className="cell" data-x="4" data-y="3"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell" data-x="0" data-y="4"></div>
                                        <div className="cell" data-x="1" data-y="4"></div>
                                        <div className="cell" data-x="2" data-y="4"></div>
                                        <div className="cell" data-x="3" data-y="4"></div>
                                        <div className="cell" data-x="4" data-y="4"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell-tri" data-x="0" data-y="5"></div>
                                        <div className="cell" data-x="1" data-y="5"></div>
                                        <div className="cell" data-x="2" data-y="5"></div>
                                        <div className="cell" data-x="3" data-y="5"></div>
                                        <div className="cell-tri" data-x="4" data-y="5"></div>
                                    </div>
                                    <div className="row">
                                        <div className="cell" data-x="0" data-y="6"></div>
                                        <div className="cell-tri" data-x="1" data-y="6"></div>
                                        <div className="cell" data-x="2" data-y="6"></div>
                                        <div className="cell-tri" data-x="3" data-y="6"></div>
                                        <div className="cell" data-x="4" data-y="6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reacoes">
                            <div className="item-reacao">
                                <button className="btn-emoji emoji-rindo" value={1} onClick={this.somReacao}></button>
                            </div>
                            <div className="item-reacao">
                                <button className="btn-emoji emoji-nervoso" value={2} onClick={this.somReacao}></button>
                            </div>
                            <div className="item-reacao">
                                <button className="btn-emoji emoji-surpreso" value={3} onClick={this.somReacao}></button>
                            </div>
                            <div className="item-reacao">
                                <button className="btn-emoji emoji-cachorro" value={4} onClick={this.somReacao}></button>
                            </div>
                            <div className="item-reacao">
                                <button className="btn-emoji emoji-onca" value={5} onClick={this.somReacao}></button>
                            </div>
                        </div>
                    </div>
                    <div className="area-cachorro">
                        <div className="menu-superior">
                            <div className="item-config">
                                <div className="item-icon icon-som" id="icone-som" onClick={this.somFundo}></div>
                            </div>
                            <div className="item-config">
                                <div className="item-icon icon-logout"></div>
                            </div>
                        </div>
                        <div className="area-cachorro-container">
                            <div className="contador">
                                <h1>10</h1>
                            </div>
                            <div className="info-user jogador-cachorro">
                                <img src={placaUser} />
                                <h1>JOGADOR CACHORRO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Tabuleiro