import React, { Component } from 'react';
import './desistir.css';
import useTabuleiro from '/src/hooks/TabuleiroHook';
import { useNavigate } from 'react-router';

function desistir({alterarVisibilidade}) {
    const navigate = useNavigate();
    const { finalizarPartida} = useTabuleiro();
    const desistir = async () =>{
        debugger
        const jogadorSessao = parseInt(JSON.parse(localStorage.getItem("partidaSession"))?.time, 10);
        const responseDesistir = await finalizarPartida(jogadorSessao === 1 ? 2 : 1, true);
        if (responseDesistir) {
            localStorage.removeItem("partidaSession");
            navigate("/menu");
        } else {
            toast.error("Erro ao desistir da partida!");
        }
    }
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
                            <button className="btn-modal btn-sim" onClick={() => {desistir()}}>SIM</button>
                            <button className="btn-modal btn-nao" onClick={() => {alterarVisibilidade()}}>NÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default desistir