import React from 'react';
import { useNavigate, useParams } from 'react-router';
import './vitoria.css';
import { toast } from "react-toastify";
import useTabuleiro from '/src/hooks/TabuleiroHook';

function vitoria() {
    const navigate = useNavigate();
    const {id} = useParams()
    const {partida} = useTabuleiro();

    const exibir = () => {
        if (id === 1) {
            partida.emblemasJogador1.forEach((emblema) => {
                toast.info(
                    <>
                        Novo emblema!<br/>
                        Nome: {emblema.idemblema.nome}
                        Descrição: {emblema.idemblema.descricao}
                    </>
                );

              });
        } else {
            partida.emblemasJogador2.forEach((emblema) => {
                toast.info(
                    <>
                        Novo emblema!<br/>
                        Nome: {emblema.idemblema.nome}
                        Descrição: {emblema.idemblema.descricao}
                    </>
                );

              });
        }
    }
    exibir();
    
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