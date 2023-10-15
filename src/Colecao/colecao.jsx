import './Colecao.css'
import ReturnIcon from '../assets/imagens/icones/ReturnIcon'
import { useNavigate } from 'react-router-dom'

function Colecao(){
    const navigate = useNavigate()
    return(
        <section className="bg-colecao">
            <div className="bg-colecao-container">
                <div className="menu-superior-colecao">
                    <div className="menu-colecao">
                        <button className="item-retorno-colecao" onClick={() => {navigate("/menu")}}>
                            <ReturnIcon />
                        </button>
                    </div>
                    <div className="titulo-colecao">
                        <div className="placa-titulo-colecao">
                            <h1>COLEÇÃO</h1>
                        </div>
                    </div>
                </div>
                <div className="sub-menu-colecao">
                    <div className="sub-menu-item-colecao">
                        <p>ONÇA</p>
                    </div>
                    <div className="sub-menu-item-colecao">
                        <p>CACHORRO</p>
                    </div>
                    <div className="sub-menu-item-colecao">
                        <p>ESPECIAIS</p>
                    </div>
                </div>
                <div className="colecao">
                    <div className="skin-item-colecao">
                        <label className="radio-button-label-colecao">
                            <input type="radio" name="" value="opcao1" />
                            AMAZÔNIA
                        </label>
                    </div>
                    <div className="skin-item-colecao">
                        <label className="radio-button-label-colecao">
                            <input type="radio" name="" value="opcao2" />
                            CAATINGA
                        </label>
                    </div>
                    <div className="skin-item-colecao">
                        <label className="radio-button-label-colecao">
                            <input type="radio" name="" value="opcao3" />
                            MATA ATLÂNTICA
                        </label>
                    </div>
                    <div className="skin-item-colecao">
                        <label className="radio-button-label-colecao">
                            <input type="radio" name="" value="opcao4" />
                            PANTANAL
                        </label>
                    </div>
                </div>
                <div className="salva-padrao-colecao">
                    <button>DEFINIR COMO PADRÃO</button>
                </div>
            </div>
        </section>
    )
}

export default Colecao