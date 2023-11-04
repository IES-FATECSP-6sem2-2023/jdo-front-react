import React from 'react';
import './erro.css';
import { useNavigate } from 'react-router';

function erro() {
    const navigate = useNavigate();

    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-erro" id="modal-vitoria">
                    <div className="box-titulo">
                        <h1>ERRO!</h1>
                    </div>
                    <div className="box-content">
                        <div className="img-mensagem">
                            <div className="icon-erro"></div>
                        </div>
                        <div className="mensagem">
                            <div className="mensagem-texto">
                                <p>ERRO, TENTE NOVAMENTE!</p>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal-tabuleiro" onClick={() => {navigate("/conta")}}>VOLTAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default erro