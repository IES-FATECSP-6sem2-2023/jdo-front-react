import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import VisibilityIcon from '/src/assets/imagens/icones/VisibilityIcon';
import VisibilityOffIcon from '/src/assets/imagens/icones/VisibilityOffIcon';
import {validatePassword} from '/src/utils/Regex.jsx';
import useAuthConta from '/src/hooks/AuthConta';
import './Conta.css';

function Conta() {
    const navigate = useNavigate();
    const [visibilityStatus, setVisibilityStatus] = useState(false);
    const { user } = useAuthConta();

    const [email, setEmail] = useState(user?.jogador?.email);
	const [nome, setNome] = useState(user?.jogador?.nome);
	const [senha, setSenha] = useState("");
	const [senhaErr, setSenhaErr] = useState(false);
	const [userName, setUserName] = useState(user?.jogador?.username);

    const handleFieldChange = (e, setStateFunction) => {
        setStateFunction(e.target.value);
    };

    const validaSenha = () => {
		!validatePassword.test(senha) ? setSenhaErr(true) : setSenhaErr(false);
	}

    const toggleVisibility = (e) => {
		e.preventDefault();
		setVisibilityStatus(!visibilityStatus);
	}

    const atualizaUser = async (e) => {
		e.preventDefault();
		validaSenha();
        if (!senhaErr) {
            // @ToDo: chamada para atualizar as informações do usuário + atualizar session (monta a chamada, paulo faz a atualização da sessão depois)
        }
    }
    
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
                        <form className="infos-user-conta">
                            <div className="info-conta info-nome-conta">
                                <label htmlFor="">NOME:</label>
                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                            </div>
                            <div className="info-conta info-user-conta">
                                <label htmlFor="">USER:</label>
                                <input type="text" value={userName} onChange={(e) => handleFieldChange(e.target.value, setUserName)} required/>
                            </div>
                            <div className="info-conta info-email-conta">
                                <label htmlFor="">E-MAIL:</label>
                                <input type="email" value={email} pattern="^\w.{2,}\u0040[a-z]{2,}.[a-z]{2,}\S"
                                title="Formato esperado: seuemail@email.com" onChange={(e) => handleFieldChange(e.target.value, setEmail)} required/>
                            </div>
                            <div className="info-conta info-senha-conta">
                                <label htmlFor="">SENHA:</label>
                                <input type={visibilityStatus ? "text" : "password"} onChange={(e) => handleFieldChange(e.target.value, setSenha)} required/>
                                <button className="btn-visibility btn-senha-conta" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
                            </div>
                            <div className="info-conta atualiza-info-conta">
                                <label htmlFor="">&nbsp;</label>
                                <button className="btn-atualiza">ATUALIZAR</button>
                            </div>
                        </form>
                        {/* @ToDo: montar lógica para habilitar e desabilitar emblemas da */}
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
                                        <h1 className="num-vit-conta">{user?.jogador?.qntvitorias}</h1>
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
                                        <h1 className="num-der-conta">{(user?.jogador?.qntpartidasjogadas)-(user?.jogador?.qntvitorias)}</h1>
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