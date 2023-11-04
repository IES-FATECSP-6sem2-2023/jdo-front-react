import React, { Component } from 'react';
import './desistir.css';

function desistir() {
    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-derrota-tabuleiro" id="modal-derrota">
                    <div className="box-titulo">
                        <h1>ATENÇÃO!</h1>
                    </div>
                    <div className="box-content">
                        <div className="img-content">
                            <div className="icon-msg"></div>
                        </div>
                        <div className="text-content-desistir">
                            <div className="texto-conteudo">
                                <p>DESEJA ABANDONAR A PARTIDA?</p>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal btn-sim">SIM</button>
                            <button className="btn-modal btn-nao">NÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default desistir