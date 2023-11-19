import React from 'react';
import { useNavigate, useParams } from 'react-router';
import './derrota.css';
import { toast } from "react-toastify";
import useTabuleiro from '/src/hooks/TabuleiroHook';

function derrota() {
    const navigate = useNavigate();
    const {id} = useParams()
    const {partida} = useTabuleiro();

    const exibir = () => {
        if (id === 1) {
            partida.emblemasJogador1.forEach((emblema) => {
                toast.info(
                    <>
                        Novo emblema!<br/>
                        Nome: {emblema.idemblema.nome}<br/>
                        Descrição: {emblema.idemblema.descricao}
                    </>
                );

              });
        } else {
            partida.emblemasJogador2.forEach((emblema) => {
                toast.info(
                    <>
                        Novo emblema!<br/>
                        Nome: {emblema.idemblema.nome}<br/>
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
                            <button className="btn-modal-tabuleiro" onClick={() => {navigate("/menu")}}>VOLTAR PARA A HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default derrota