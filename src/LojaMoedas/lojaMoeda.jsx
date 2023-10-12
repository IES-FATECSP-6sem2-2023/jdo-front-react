import React from "react";
import './lojaMoeda.css'

function lojaMoedas(){
    return(
        <section className="bg-home">
            <div className="bg-home-container">
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
                <div className="loja">
                    <div className="loja-esmeralda">
                        <div className="loja-esmeralda-item">
                            <div className="foto-item esmeralda-p"></div>
                            <div className="nome-item">
                                <h1>100 ESMERALDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$10,00</p>
                            </button>
                        </div>
                        <div className="loja-esmeralda-item">
                            <div className="foto-item esmeralda-m"></div>
                            <div className="nome-item">
                                <h1>500 ESMERALDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$50,00</p>
                            </button>
                        </div>
                        <div className="loja-esmeralda-item">
                            <div className="foto-item esmeralda-g"></div>
                            <div className="nome-item">
                                <h1>1.000 ESMERALDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$100,00</p>
                            </button>
                        </div>
                    </div>
                    <div className="loja-moeda">
                        <div className="loja-moeda-item">
                            <div className="foto-item moeda-p">
                            </div>
                            <div className="nome-item">
                                <h1>100 MOEDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$50,00</p>
                            </button>
                        </div>
                        <div className="loja-moeda-item">
                            <div className="foto-item moeda-m">
                            </div>
                            <div className="nome-item">
                                <h1>1.000 MOEDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$20,00</p>
                            </button>
                        </div>
                        <div className="loja-moeda-item">
                            <div className="foto-item moeda-g">
                            </div>
                            <div className="nome-item">
                                <h1>10.000 MOEDAS</h1>
                            </div>
                            <button className="valor">
                                <p>R$50,00</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default lojaMoedas