import React, { Component } from 'react';
import './fila.css';

function fila() {
    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-derrota-tabuleiro" id="modal-derrota">
                    <div className="box-titulo">
                        <h1>ESPERE!</h1>
                    </div>
                    <div className="box-content">
                        <div className="img-content">
                            <div className="icon"></div>
                        </div>
                        <div className="text-content">
                            <div className="texto-conteudo">
                                <p>AINDA NÃO EXISTEM JOGADORES NESSA MODALIDADE...</p>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal-tabuleiro">CANCELAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default fila