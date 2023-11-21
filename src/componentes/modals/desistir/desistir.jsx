import React from 'react';
import './desistir.css';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function desistir({alterarVisibilidade}) {
    const { partida, stompClient, websocketRoom } = useTabuleiro();
    const desistir = async () =>{
        const jogadorSessao = parseInt(JSON.parse(localStorage.getItem("partidaSession"))?.time, 10);
        const idVencedor = jogadorSessao === 2 ? partida.primeirojogador.idJogador : partida.segundojogador.idJogador;
        stompClient.current.publish({
            destination: "/app/game/finish/" + websocketRoom,
            body: JSON.stringify({
                idPartida: partida.idpartida,
                idVencedor: idVencedor,
                partidaAbandonada: true,
            })
        })
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