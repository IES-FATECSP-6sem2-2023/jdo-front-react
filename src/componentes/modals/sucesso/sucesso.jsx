import React from 'react';
import './sucesso.css';
import { useNavigate } from 'react-router';

function sucesso() {
    const navigate = useNavigate();

    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-erro" id="modal-vitoria">
                    <div className="box-titulo">
                        <h1>SUCESSO!</h1>
                    </div>
                    <div className="box-content">
                        <div className="img-mensagem">
                            <div className="icon-erro"></div>
                        </div>
                        <div className="mensagem">
                            <div className="mensagem-texto">
                                <p>OPERAÇÃO FEITA COM SUCESSO!</p>
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

export default sucesso