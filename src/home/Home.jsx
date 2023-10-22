import { useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogOutIcon from '../assets/imagens/icones/LogOutIcon';
import UsuarioIcon from '../assets/imagens/icones/UsuarioIcon';
import VolumeOnIcon from '../assets/imagens/icones/VolumeOnIcon'
import VolumeOffIcon from '../assets/imagens/icones/VolumeOffIcon'
import './Home.css'

function Home(){
    const [turnOnOffVolume, setVolumeState] = React.useState(false);
    
    const toggleVolume = () => {
        setVolumeState(!turnOnOffVolume);
    }

	const navigate = useNavigate()
	
    const logout = () => {
        navigate("/login")
    }

    const jogar = () => {
        navigate("/tabuleiro")
    }

    //Teste de integração com API

    const [userId, setUserId] = useState(null);

    const getInfo = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/5");
            const data = response.data;
            console.log(data);
            setUserId(data.id);
        } 
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getInfo();
    }, []);

    return (
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu-infos-user">
                        <div className="item-menu nivel">
                            <div className="icon icon-nivel">
                                <p className="numNivel">{userId}</p>
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
                            {turnOnOffVolume ? <VolumeOnIcon /> : <VolumeOffIcon />}
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