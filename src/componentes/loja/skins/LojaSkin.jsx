import React from 'react';
import { useNavigate } from 'react-router';
import './LojaSkin.css';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import Skin from '/src/assets/imagens/skins/onca_amazonia.png';
import useAuthConta from '/src/hooks/AuthConta';
// @ToDo: montar lógica para validar se é possível comprar skin (se não, mandar para loja de moeda) + salvar ela na conta do usuario +atualizar informação na sessão (essa parte o paulo faz)

function LojaSkin() {
    const navigate = useNavigate();
    const { user } = useAuthConta();
   
    const compraSkin = (event) => {

    }

    return (
            <section className="bg-loja-skin">
                <div className="bg-loja-skin-container" id="bg-lojaSkin">
                    <div className="menu-superior-loja-skin">
                        <div className="menu-loja-skin">
                            <button className="item-retorno-loja-skin" onClick={() => {navigate("/menu")}}>
                                <ReturnIcon />
                            </button>
                        </div>
                        <div className="titulo-loja-skin">
                            <div className="placa-titulo-loja-skin">
                                <h1>LOJA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="moedas-atuais-loja-skin">
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-qtde-loja-skin esmeraldas-loja-skin">
                            <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                            <div className="info-esmeralda-loja-skin">
                                <p className="info-p-loja-skin">{user?.jogador?.qntmoedaespecial}</p>
                            </div>
                        </button>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-qtde-loja-skin moedas-loja-skin">
                            <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                            <div className="info-esmeralda-loja-skin">
                                <p className="info-p-loja-skin">{user?.jogador?.qntmoedanormal}</p>
                            </div>
                        </button>
                    </div>
                    <div className="loja-skin">
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={1} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={2} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={3} onClick={compraSkin}>
                                    <div className="icon icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={4} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={5} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={6} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={7} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={8} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={9} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={10} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={11} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={12} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={13} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={14} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={15} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={16} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={17} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={18} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                        <div className="loja-item-loja-skin">
                            <div className="skin">
                                <img src={Skin} alt="" />
                            </div>
                            <div className="nome-skin-loja-skin">
                                <h1>NOME DA SKIN</h1>
                            </div>
                            <div className="precos-loja-skin">
                                <button className="preco-esmeralda-loja-skin" value={19} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>100</p></div>
                                </button>
                                <button className="preco-moeda-loja-skin" value={20} onClick={compraSkin}>
                                    <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                    <div className="preco-loja-skin"><p>1000</p></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

export default LojaSkin