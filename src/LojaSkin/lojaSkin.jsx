import React from "react";
import './lojaSkin.css'

function lojaSkin(){
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
                <div className="loja"></div>
            </div>
        </section>
    )
}

export default lojaSkin