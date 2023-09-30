import { useNavigate } from 'react-router';
import './LojaSkin.css'
import Skin from '../../assets/imagens/skins/onca_amazonia.png'

function LojaSkin(){
    const navigate = useNavigate()

    function volta() {
        navigate('/home')
    }

    return(
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu">
                        <div className="item-retorno">
                            <button onClick={volta} className=" btn icon-retorno"></button>
                        </div>
                    </div>
                    <div className="titulo">
                        <div className="placa-titulo">
                            <h1>LOJA</h1>
                        </div>
                    </div>
                </div>
                <div className="moedas-atuais">
                    <div className="item-qtde esmeraldas">
                        <div className="icon icon-esmeralda"></div>
                        <div className="info-esmeralda">
                            <p className="info-p">1000</p>
                        </div>
                    </div>
                    <div className="item-qtde moedas">
                        <div className="icon icon-moeda"></div>
                        <div className="info-esmeralda">
                            <p className="info-p">1000</p>
                        </div>
                    </div>
                </div>
                <div className="loja">
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="loja-item">
                        <div className="skin">
                            <img src={Skin} alt="" />
                        </div>
                        <div className="nome-skin">
                            <h1>NOME DA SKIN</h1>
                        </div>
                        <div className="precos">
                            <div className="preco-esmeralda">
                                <div className="icon icon-esmeralda"></div>
                                <div className="preco"><p>100</p></div>
                            </div>
                            <div className="preco-moeda">
                                <div className="icon icon-moeda"></div>
                                <div className="preco"><p>1000</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LojaSkin