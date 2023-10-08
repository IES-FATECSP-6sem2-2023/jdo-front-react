import React from "react";
import './conta.css'


function Conta(){
    return (
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu">
                        <div className="item-retorno">
                            <div className="icon-retorno"></div>
                        </div>
                    </div>
                    <div className="titulo">
                        <div className="placa-titulo">
                            <h1>SUA CONTA</h1>
                        </div>
                    </div>
                </div>
                <div className="content-main">
                    <div className="content-main-superior">
                        <div className="infos-user">
                            <div className="info info-nome">
                                <label htmlFor="">NOME:</label>
                                <input type="text" name="" id="" required/>
                            </div>
                            <div className="info info-user">
                                <label htmlFor="">USER:</label>
                                <input type="text" name="" id="" required/>
                            </div>
                            <div className="info info-email">
                                <label htmlFor="">E-MAIL:</label>
                                <input type="email" name="" id="" pattern="^\w.{2,}\u0040[a-z]{2,}.[a-z]{2,}\S"
                                title="Formato esperado: seuemail@email.com" required/>
                            </div>
                            <div className="info info-senha">
                                <label htmlFor="">SENHA:</label>
                                <input type="password" name="" id="" maxLength={6} required/>
                            </div>
                            <div className="info atualiza-info">
                                <label htmlFor="">&nbsp;</label>
                                <button>ATUALIZAR</button>
                            </div>
                        </div>
                        <div className="emblemas">
                            <div className="emblema-item">
                                <div className="icon-emblema ativo"></div>
                                <span className="tooltip-text" id="top">Bem-vindo a floresta <br></br> Jogue sua primeira partida</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Bem-vindo a matilha <br></br> Vença sua primeira partida como cachorro</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Realeza da floresta <br></br> Vença sua primeira partida como onça</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Dominando a selva <br></br> Ganhe 3 partidas consecultivas</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Onça invicta <br></br> Ganhe 3 partidas consecultivas como onça</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Latido imbatível <br></br> Ganhe 3 partidas consecultivas como cachorro</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Estrategista e habilidoso <br></br> Ganhe 5 partidas consecultivas</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Topo da cadeia <br></br> Vença 10 partidas</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Astúcia felina <br></br> Execute uma captura dupla</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Sobrevivente <br></br> Sobreviva a 30 movimentos</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Matilha unida <br></br> Encurrale a onça sem perder nenhum cachorro</span>
                            </div>
                            <div className="emblema-item">
                                <div className="icon-emblema ativo" alt=""></div>
                                <span className="tooltip-text" id="top">Rei da selva <br></br> Vença 50 partidas</span>
                            </div>
                        </div>
                    </div>
                    <div className="historico-user">
                        <div className="historico-vitoria">
                            <div className="placa">
                                <div className="placa-itens">
                                    <div className="icon-vit"></div>
                                    <div className="info-item">
                                        <h1 className="num-vit">X</h1>
                                        <h1>VITÓRIAS</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="historico-derrota">
                            <div className="placa">
                                <div className="placa-itens">
                                    <div className="icon-der"></div>
                                    <div className="info-item">
                                        <h1 className="num-der">X</h1>
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