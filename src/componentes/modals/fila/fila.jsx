import React, { Component } from 'react';
import './fila.css';
import { useNavigate } from 'react-router';

function fila() {
    const navigate = useNavigate();

    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-derrota-tabuleiro" id="modal-derrota">
                    <div className="box-titulo">
                        <h1>ESPERE!</h1>
                    </div>
                    <div className="box-content">
                        <div className="img-content">
                            <div className="icon-fila"></div>
                        </div>
                        <div className="text-content">
                            <div className="texto-conteudo">
                                <p>BUSCANDO JOGADORES...</p>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal-tabuleiro" onClick={() => {navigate("/menu")}}>CANCELAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default fila