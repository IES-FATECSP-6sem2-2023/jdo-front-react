import React from "react";
import './Home.css'

function Home(){
    return (
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu-infos-user">
                        <div className="item-menu nivel">
                            <div className="icon icon-nivel">
                                <p className="numNivel">1</p>
                                <div className="icon-nivel"></div>
                            </div>
                            <div className="info inivel">
                                <div className="info nivel">
                                    <p className="info-p">100</p>
                                    <p className="info-p">/100</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-menu esmeraldas">
                            <div className="icon icon-esmeralda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </div>
                        <div className="item-menu moedas">
                            <div className="icon icon-moeda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-itens-config">
                        <div className="item-config">
                            <div className="item-icon icon-som"></div>
                        </div>
                        <div className="item-config">
                            <div className="item-icon icon-conta"></div>
                        </div>
                        <div className="item-config">
                            <div className="item-icon icon-logout"></div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="arena">
                    </div>
                    <div className="menu-principal">
                        <div className="menu-item"><p className="texto-p">JOGAR <br></br> COMO ONÇA</p></div>
                        <div className="menu-item"><p className="texto-p">JOGAR COMO <br></br> CACHORRO</p></div>
                        <div className="menu-item"><p className="texto-p">LOJA</p></div>
                        <div className="menu-item"><p className="texto-p">COLEÇÃO</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home