import React from "react";
import './colecao.css'
import Skin from '../assets/imagens/skins/onca_amazonia.png'

function Colecao(){
    return(
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
                            <h1>COLEÇÃO</h1>
                        </div>
                    </div>
                </div>
                <div className="sub-menu">
                    <div className="sub-menu-item">
                        <p>ONÇA</p>
                    </div>
                    <div className="sub-menu-item">
                        <p>CACHORRO</p>
                    </div>
                    <div className="sub-menu-item">
                        <p>ESPECIAIS</p>
                    </div>
                </div>
                <div className="colecao">
                    <div className="skin-item">
                        <label class="radio-button-label">
                            <input type="radio" name="" value="opcao1" />
                            AMAZÔNIA
                        </label>
                    </div>
                    <div className="skin-item">
                        <label class="radio-button-label">
                            <input type="radio" name="" value="opcao2" />
                            CAATINGA
                        </label>
                    </div>
                    <div className="skin-item">
                        <label class="radio-button-label">
                            <input type="radio" name="" value="opcao3" />
                            MATA ATLÂNTICA
                        </label>
                    </div>
                    <div className="skin-item">
                        <label class="radio-button-label">
                            <input type="radio" name="" value="opcao4" />
                            PANTANAL
                        </label>
                    </div>
                </div>
                <div className="salva-padrao">
                    <button>DEFINIR COMO PADRÃO</button>
                </div>
            </div>
        </section>
    )
}

export default Colecao