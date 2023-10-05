import React from "react";
import './tabuleiro.css'
import placaUser from '../assets/imagens/placas/placa_usuario.png'

function Tabuleiro(){
    return(
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="area-onca">
                    <div className="area-onca-container">
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
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
                            </div>
                            <div className="row">
                                <div className="cell" data-x="0" data-y="7"></div>
                                <div className="cell" data-x="1" data-y="7"></div>
                                <div className="cell" data-x="3" data-y="7"></div>
                                <div className="cell" data-x="4" data-y="7"></div>
                                <div className="cell" data-x="5" data-y="7"></div>
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