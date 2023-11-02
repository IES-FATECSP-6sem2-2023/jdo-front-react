import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import './Conta.css';

function Conta() {
    const navigate = useNavigate();
    const { user } = useAuthConta();
    
    return (
        <section className="bg-conta">
            <div className="bg-conta-container">
                <div className="menu-superior-conta">
                    <div className="menu-conta">
                        <button className="item-retorno-conta" onClick={() => navigate("/menu")}>
                            <ReturnIcon />
                        </button>
                    </div>
                    <div className="titulo-conta">
                        <div className="placa-titulo-conta">
                            <h1>SUA CONTA</h1>
                        </div>
                    </div>
                </div>
                <div className="content-main-conta">
                    <div className="content-main-superior-conta">
                        <div className="infos-user-conta">
                            <div className="info-conta info-nome-conta">
                                <label htmlFor="">NOME:</label>
                                <input type="text" name="" id="" value={user?.jogador?.nome} required/>
                            </div>
                            <div className="info-conta info-user-conta">
                                <label htmlFor="">USER:</label>
                                <input type="text" name="" id="" value={user?.jogador?.username} required/>
                            </div>
                            <div className="info-conta info-email-conta">
                                <label htmlFor="">E-MAIL:</label>
                                <input type="email" name="" id="" value={user?.jogador?.email} pattern="^\w.{2,}\u0040[a-z]{2,}.[a-z]{2,}\S"
                                title="Formato esperado: seuemail@email.com" required/>
                            </div>
                            <div className="info-conta info-senha-conta">
                                <label htmlFor="">SENHA:</label>
                                <input type="password" name="" id="" required/>
                            </div>
                            <div className="info-conta atualiza-info-conta">
                                <label htmlFor="">&nbsp;</label>
                                <button>ATUALIZAR</button>
                            </div>
                        </div>
                        <div className="emblemas-conta">
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo"></div>
                                <span className="tooltip-text-conta" id="top">Bem-vindo a floresta <br></br> Jogue sua primeira partida</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Bem-vindo a matilha <br></br> Vença sua primeira partida como cachorro</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Realeza da floresta <br></br> Vença sua primeira partida como onça</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Dominando a selva <br></br> Ganhe 3 partidas consecultivas</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Onça invicta <br></br> Ganhe 3 partidas consecultivas como onça</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Latido imbatível <br></br> Ganhe 3 partidas consecultivas como cachorro</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Estrategista e habilidoso <br></br> Ganhe 5 partidas consecultivas</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Topo da cadeia <br></br> Vença 10 partidas</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Astúcia felina <br></br> Execute uma captura dupla</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Sobrevivente <br></br> Sobreviva a 30 movimentos</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Matilha unida <br></br> Encurrale a onça sem perder nenhum cachorro</span>
                            </div>
                            <div className="emblema-item-conta">
                                <div className="icon-emblema-conta ativo" alt=""></div>
                                <span className="tooltip-text-conta" id="top">Rei da selva <br></br> Vença 50 partidas</span>
                            </div>
                        </div>
                    </div>
                    <div className="historico-user-conta">
                        <div className="historico-vitoria-conta">
                            <div className="placa-conta">
                                <div className="placa-itens-conta">
                                    <div className="icon-vit-conta"></div>
                                    <div className="info-item-conta">
                                        <h1 className="num-vit-conta">X</h1>
                                        <h1>VITÓRIAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="historico-derrota-conta">
                            <div className="placa-conta">
                                <div className="placa-itens-conta">
                                    <div className="icon-der-conta"></div>
                                    <div className="info-item-conta">
                                        <h1 className="num-der-conta">X</h1>
                                        <h1>DERROTAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conta