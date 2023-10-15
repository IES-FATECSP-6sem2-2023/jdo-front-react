import React, { Component, useState } from "react";
import './Tabuleiro.css'
import VolumeOnIcon from "../assets/imagens/icones/VolumeOnIcon";
import VolumeOffIcon from "../assets/imagens/icones/VolumeOffIcon";
import placaUser from '../assets/imagens/placas/placa_usuario.png'
import LogOutIcon from "../assets/imagens/icones/LogOutIcon";
import { useNavigate } from "react-router-dom";

function Tabuleiro() {
    const navigate = useNavigate()
    const [musicaDeFundo, setMusicaDeFundo] = useState(new Audio('src/assets/sons/ambiente/ambiente2.wav'));
    const [turnOnOffVolume, setVolumeState] = React.useState(false);
    
    const toggleVolume = () => {
        setVolumeState(!turnOnOffVolume);
        somFundo(turnOnOffVolume);
    }

    const desistir = () => {
        navigate("/menu")
    }

    const somFundo = (somAtivo) => {
        // const somAtivo = false
        // const btnSomFundo = document.getElementById("icone-som");

        if (!somAtivo) {
            // btnSomFundo.style.backgroundImage = "url('src/assets/imagens/icones/volume-on.svg')";
            musicaDeFundo.loop = true;
            // this.musicaDeFundo.volume = 0.8;
            musicaDeFundo.play();
        } else {
            // btnSomFundo.style.backgroundImage = "url('src/assets/imagens/icones/volume-off.svg')";
            musicaDeFundo.pause();
        }

        // this.setState({
        //     somAtivo: !somAtivo
        // });
    }

    const somReacao = (event) => {
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
    
        return(
            <section className="bg-tabuleiro">
                <div className="modal-container-tabuleiro" id="modal">
                    <div className="box-loading-tabuleiro" id="modal-loading">
                        <div className="loading-area-tabuleiro">
                            <span className="circle-tabuleiro"></span>
                            <span className="circle-tabuleiro"></span>
                            <span className="circle-tabuleiro"></span>
                            <span className="circle-tabuleiro"></span>
                        </div>
                    </div>
                    <div className="box-vitoria-tabuleiro" id="modal-vitoria">
                        <div className="box-titulo-tabuleiro">
                            <h1>VITÓRIA!</h1>
                        </div>
                        <div className="box-content-tabuleiro">
                            <div className="img-resultado-tabuleiro">
                                <div className="icon-vitoria-tabuleiro"></div>
                            </div>
                            <div className="recompensas-tabuleiro">
                                <div className="recompensa-xp-tabuleiro">
                                    <div className="recompensa-xp-icon-tabuleiro"></div>
                                    <div className="recompensa-texto-tabuleiro">
                                        <p>+ 25 de XP</p>
                                    </div>
                                </div>
                                <div className="recompensa-moeda-tabuleiro">
                                    <div className="moeda-icon-tabuleiro"></div>
                                    <div className="recompensa-texto-tabuleiro">
                                        <p>+ 30 moedas</p>
                                    </div>
                                </div>                                
                            </div>
                            <div className="tabuleiro">
                                <button>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-derrota-tabuleiro" id="modal-derrota">
                        <div className="box-titulo-tabuleiro">
                            <h1>DERROTA!</h1>
                        </div>
                        <div className="box-content-tabuleiro">
                            <div className="img-resultado-tabuleiro">
                                <div className="icon-derrota-tabuleiro"></div>
                            </div>
                            <div className="recompensas-tabuleiro">
                                <div className="castigo-xp-tabuleiro">
                                    <div className="castigo-xp-icon-tabuleiro"></div>
                                    <div className="recompensa-texto-tabuleiro">
                                        <p>- 15 de XP</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tabuleiro">
                                <button>VOLTAR PARA A HOME</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-tabuleiro-container" id="tabuleiro-container">
                    <div className="area-onca-tabuleiro">
                        <div className="area-onca-container-tabuleiro">
                            <div className="placar-tabuleiro">
                                <div className="placar-onca-tabuleiro"></div> 
                                {/* Add classe "peca-comida" para mostrar o placar */}
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                            </div>
                            <div className="contador-tabuleiro">
                                <h1>10</h1>
                            </div>
                            <div className="info-user-tabuleiro jogador-onca-tabuleiro">
                                <img src={placaUser} />
                                <h1 id="contador-onca-tabuleiro">JOGADOR ONÇA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="principal-tabuleiro">
                        <div className="tabuleiro">
                            <div className="tabuleiro-container">
                                <div className="malha-tabuleiro">
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="0" data-y="0"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="1" data-y="0"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="2" data-y="0"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="3" data-y="0"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="4" data-y="0"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="0" data-y="1"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="1" data-y="1"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="2" data-y="1"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="3" data-y="1"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="4" data-y="1"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="0" data-y="2"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="1" data-y="2"></div>
                                        <div className="cell-tabuleiro peca-onca-tabuleiro" data-x="2" data-y="2"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="3" data-y="2"></div>
                                        <div className="cell-tabuleiro peca-cachorro-tabuleiro" data-x="4" data-y="2"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro" data-x="0" data-y="3"></div>
                                        <div className="cell-tabuleiro" data-x="1" data-y="3"></div>
                                        <div className="cell-tabuleiro" data-x="2" data-y="3"></div>
                                        <div className="cell-tabuleiro" data-x="3" data-y="3"></div>
                                        <div className="cell-tabuleiro" data-x="4" data-y="3"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro" data-x="0" data-y="4"></div>
                                        <div className="cell-tabuleiro" data-x="1" data-y="4"></div>
                                        <div className="cell-tabuleiro" data-x="2" data-y="4"></div>
                                        <div className="cell-tabuleiro" data-x="3" data-y="4"></div>
                                        <div className="cell-tabuleiro" data-x="4" data-y="4"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tri-tabuleiro" data-x="0" data-y="5"></div>
                                        <div className="cell-tabuleiro" data-x="1" data-y="5"></div>
                                        <div className="cell-tabuleiro" data-x="2" data-y="5"></div>
                                        <div className="cell-tabuleiro" data-x="3" data-y="5"></div>
                                        <div className="cell-tri-tabuleiro" data-x="4" data-y="5"></div>
                                    </div>
                                    <div className="row-tabuleiro">
                                        <div className="cell-tabuleiro" data-x="0" data-y="6"></div>
                                        <div className="cell-tri-tabuleiro" data-x="1" data-y="6"></div>
                                        <div className="cell-tabuleiro" data-x="2" data-y="6"></div>
                                        <div className="cell-tri-tabuleiro" data-x="3" data-y="6"></div>
                                        <div className="cell-tabuleiro" data-x="4" data-y="6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reacoes-tabuleiro">
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-rindo-tabuleiro" value={1} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-nervoso-tabuleiro" value={2} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-surpreso-tabuleiro" value={3} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-cachorro-tabuleiro" value={4} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-onca-tabuleiro" value={5} onClick={somReacao}></button>
                            </div>
                        </div>
                    </div>
                    <div className="area-cachorro-tabuleiro">
                        <div className="menu-superior-tabuleiro">
                            <button className="item-config-tabuleiro" onClick={toggleVolume}>
                                {turnOnOffVolume ? <VolumeOnIcon /> : <VolumeOffIcon />}
                            </button>
                            <button className="item-config-tabuleiro" onClick={desistir}>
                                <LogOutIcon />
                            </button>
                        </div>
                        <div className="area-cachorro-container-tabuleiro">
                            <div className="contador-tabuleiro">
                                <h1>10</h1>
                            </div>
                            <div className="info-user-tabuleiro jogador-cachorro-tabuleiro">
                                <img src={placaUser} />
                                <h1>JOGADOR CACHORRO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default Tabuleiro