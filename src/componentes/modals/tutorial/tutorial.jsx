import React from 'react';
import './tutorial.css';
import { useNavigate } from 'react-router';

function tutorial() {
    const navigate = useNavigate();

    const youtubeTutorial = 'https://www.youtube.com/watch?v=VQwCfAGJt-M&ab_channel=PranchetadoSuet%C3%B4nio-F%C3%A1bioDias';

    const handleNavigate = () => {
        window.open(youtubeTutorial, '_blank');
    };

    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-erro" id="modal-vitoria">
                    <div className="box-titulo">
                        <h1>TUTORIAL</h1>
                    </div>
                    <div className="box-content">
                        <div className="mensagem-tutorial">
                            <div className="mensagem-texto">
                            <p>O jogador com a onça deve capturar seis cachorros e o jogador com a matilha deve encurralar a onça, 
                                deixando-a sem possibilidade de se movimentar pelo tabuleiro. Ganha quem conseguir alcançar o seu 
                                objetivo primeiro, podendo mover as peças que podem ser movidas em qualquer direção pelo tabuleiro 
                                (frente, trás, lados ou diagonal). O jogador com a onça sempre inicia o jogo. Todas as peças andam 
                                de 1 em 1 casa. A onça possui uma jogada adicional no momento em que captura um dos cachorros.</p>
                            </div>
                        </div>
                        <div className="area-btn-modal">
                            <button className="btn-modal-tutotial btn-home" onClick={() => {navigate("/menu")}}>VOLTAR NA HOME</button>
                            <button className="btn-modal-tutotial btn-tutorial" onClick={handleNavigate}>VER VÍDEO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default tutorial