import React from 'react';
import { useNavigate } from 'react-router';
import './fila.css';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Fila() {
    const { partida, excluirPartida } = useTabuleiro();
    const navigate = useNavigate();

    const excluiPartida = async (e) => {
        e.preventDefault()
        if (partida) {
            const response = await excluirPartida(partida)
            if (response) navigate("/menu")
        }        
    }
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
                            <button className="btn-modal-tabuleiro" onClick={excluiPartida}>CANCELAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fila