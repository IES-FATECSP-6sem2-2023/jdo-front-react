import React from "react";

import placaUser from '../assets/imagens/placas/placa_usuario.png'

function Tabuleiro(){
    return(
        <section className="bg-home">
            <div className="bg-home-container">
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
                            <h1>JOGADOR ONÇA</h1>
                        </div>
                    </div>
                </div>
                <div className="principal">
                    <div className="tabuleiro">
                        <div className="tabuleiro-container">
                            <div className="malha-tabuleiro">
                                <div class="row">
                                    <div class="cell peca-cachorro" data-x="0" data-y="0"></div>
                                    <div class="cell peca-cachorro" data-x="1" data-y="0"></div>
                                    <div class="cell peca-cachorro" data-x="2" data-y="0"></div>
                                    <div class="cell peca-cachorro" data-x="3" data-y="0"></div>
                                    <div class="cell peca-cachorro" data-x="4" data-y="0"></div>
                                </div>
                                <div class="row">
                                    <div class="cell peca-cachorro" data-x="0" data-y="1"></div>
                                    <div class="cell peca-cachorro" data-x="1" data-y="1"></div>
                                    <div class="cell peca-cachorro" data-x="2" data-y="1"></div>
                                    <div class="cell peca-cachorro" data-x="3" data-y="1"></div>
                                    <div class="cell peca-cachorro" data-x="4" data-y="1"></div>
                                </div>
                                <div class="row">
                                    <div class="cell peca-cachorro" data-x="0" data-y="2"></div>
                                    <div class="cell peca-cachorro" data-x="1" data-y="2"></div>
                                    <div class="cell peca-onca" data-x="2" data-y="2"></div>
                                    <div class="cell peca-cachorro" data-x="3" data-y="2"></div>
                                    <div class="cell peca-cachorro" data-x="4" data-y="2"></div>
                                </div>
                                <div class="row">
                                    <div class="cell" data-x="0" data-y="3"></div>
                                    <div class="cell" data-x="1" data-y="3"></div>
                                    <div class="cell" data-x="2" data-y="3"></div>
                                    <div class="cell" data-x="3" data-y="3"></div>
                                    <div class="cell" data-x="4" data-y="3"></div>
                                </div>
                                <div class="row">
                                    <div class="cell" data-x="0" data-y="4"></div>
                                    <div class="cell" data-x="1" data-y="4"></div>
                                    <div class="cell" data-x="2" data-y="4"></div>
                                    <div class="cell" data-x="3" data-y="4"></div>
                                    <div class="cell" data-x="4" data-y="4"></div>
                                </div>
                                <div class="row">
                                    <div class="cell-tri" data-x="0" data-y="5"></div>
                                    <div class="cell" data-x="1" data-y="5"></div>
                                    <div class="cell" data-x="2" data-y="5"></div>
                                    <div class="cell" data-x="3" data-y="5"></div>
                                    <div class="cell-tri" data-x="4" data-y="5"></div>
                                </div>
                                <div class="row">
                                    <div class="cell" data-x="0" data-y="6"></div>
                                    <div class="cell-tri" data-x="1" data-y="6"></div>
                                    <div class="cell" data-x="2" data-y="6"></div>
                                    <div class="cell-tri" data-x="3" data-y="6"></div>
                                    <div class="cell" data-x="4" data-y="6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reacoes">
                        <div className="item-reacao">
                            <button className="btn-emoji emoji-rindo"></button>
                        </div>
                        <div className="item-reacao">
                            <button className="btn-emoji emoji-nervoso"></button>
                        </div>
                        <div className="item-reacao">
                            <button className="btn-emoji emoji-surpreso"></button>
                        </div>
                        <div className="item-reacao">
                            <button className="btn-emoji emoji-cachorro"></button>
                        </div>
                        <div className="item-reacao">
                            <button className="btn-emoji emoji-onca"></button>
                        </div>
                    </div>
                </div>
                <div className="area-cachorro">
                    <div className="menu-superior">
                        <div className="item-config">
                            <div className="item-icon icon-som"></div>
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

export default Tabuleiro