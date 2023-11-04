import React from 'react';
import './vitoria.css';
import { useNavigate } from 'react-router';

function vitoria() {
    const navigate = useNavigate();
    
    return(
        <section className="background">
            <div className="modal-container" id="modal">
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
                        <div className="area-btn-modal">
                            <button className="btn-modal-tabuleiro" onClick={() => {navigate("/menu")}}>VOLTAR PARA A HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default vitoria