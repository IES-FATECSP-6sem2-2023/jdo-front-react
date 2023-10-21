import { useNavigate } from 'react-router';
import React, {useEffect} from 'react';
import LogOutIcon from '../assets/imagens/icones/LogOutIcon';
import UsuarioIcon from '../assets/imagens/icones/UsuarioIcon';
import VolumeOnIcon from '../assets/imagens/icones/VolumeOnIcon';
import VolumeOffIcon from '../assets/imagens/icones/VolumeOffIcon';
import './Home.css'

function Home({musicaAtiva, toggleMusica}) {
    const navigate = useNavigate();

    const toggleVolume = () => {
        toggleMusica()
    }
	
    const logout = () => {
        navigate("/login")
    }

    const jogar = () => {
        navigate("/tabuleiro")
    }
    return (
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu-infos-user">
                        <div className="item-menu nivel">
                            <div className="icon icon-nivel">
                                <p className="numNivel">1</p>
                                <div className="icon-nivel"></div>
                            </div>
                            <div className="info inivel">
                                <button className="info nivel">
                                    <p className="info-p">100</p>
                                    <p className="info-p">/100</p>
                                </button>
                            </div>
                        </div>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-menu esmeraldas">
                            <div className="icon icon-esmeralda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </button>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-menu moedas">
                            <div className="icon icon-moeda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">1000</p>
                            </div>
                        </button>
                    </div>
                    <div className="menu-itens-config">
                        <button className="item-config" onClick={toggleVolume}>
                            {musicaAtiva ? <VolumeOnIcon /> : <VolumeOffIcon />}
                        </button>
                        <button className="item-config" onClick={() => navigate("/conta")}>
                            <UsuarioIcon />
                        </button>
                        <button className="item-config" onClick={logout}>
                            <LogOutIcon />
                        </button>
                    </div>
                </div>
                <div className="main">
                    <div className="arena">
                    </div>
                    <div className="menu-principal">
                        <button className="btn menu-item" onClick={jogar}><p className="texto-p">JOGAR <br></br> COMO ONÇA</p></button>
                        <button className="btn menu-item" onClick={jogar}><p className="texto-p">JOGAR COMO <br></br> CACHORRO</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/loja/skins")}}><p className="texto-p">LOJA</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/colecao")}}><p className="texto-p">COLEÇÃO</p></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home