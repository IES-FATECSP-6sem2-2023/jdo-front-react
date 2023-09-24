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
                            </div>
                            <div className="info inivel">
                                <p className="info-p">100</p>
                                <p className="info-p">/100</p>
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
                </div>
            </div>
        </section>
    )
}

export default Home