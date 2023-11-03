import React from 'react';
import './derrota.css';

function derrota() {
    useEffect(() => {
        const somDerrota = new Audio('src/assets/sons/tabuleiro/jogo_perdido.mp3');
        somDerrota.play();
    }, []);

    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-derrota-tabuleiro" id="modal-derrota">
                    <div className="box-titulo-tabuleiro">
                        <h1>DERROTA!</h1>
                    </div>
                    <div className="box-content-tabuleiro">
                        <div className="img-resultado-tabuleiro">
                            <div className="icon-derrota-tabuleiro"></div>
                        </div>
                        <div className="recompensas-tabuleiro">
                            <div className="castigo-xp-tabuleiro">
                                <div className="castigo-xp-icon-tabuleiro"></div>
                                <div className="recompensa-texto-tabuleiro">
                                    <p>- 15 de XP</p>
                                </div>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal-tabuleiro">VOLTAR PARA A HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default derrota