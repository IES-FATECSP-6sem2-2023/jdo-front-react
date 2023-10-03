import './Conta.css'
import emblema from '../assets/imagens/skins/cachorro_amazonia.png'

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
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>
                            <div className="hover-text">
                                <img src={emblema} alt="" />
                                <span className="tooltip-text" id="top">I'm a tooltip! <br></br> Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</span>
                            </div>                            
                        </div>
                    </div>
                    <div className="historico-user">
                        <div className="historico-vitoria">
                            <div className="placa">
                                <div className="icon-vit"></div>
                                <div className="info-item">
                                    <h1 className="num-vit">X</h1>
                                    <h1>VITÓRIAS</h1>
                                </div>
                            </div>
                        </div>
                        <div className="historico-derrota">
                            <div className="placa">
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
        </section>
    )
}

export default Conta