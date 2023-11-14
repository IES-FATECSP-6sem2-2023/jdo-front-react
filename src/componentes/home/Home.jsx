import React from 'react';
import { useNavigate } from 'react-router';
import './Home.css';
import LogOutIcon from '/src/assets/imagens/icones/LogOutIcon';
import UsuarioIcon from '/src/assets/imagens/icones/UsuarioIcon';
import VolumeOffIcon from '/src/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/src/assets/imagens/icones/VolumeOnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import Carrossel from './carrossel/carrossel'
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Home({musicaAtiva, toggleMusica}) {
    const navigate = useNavigate();
    const { criarPartida } = useTabuleiro();
    const { user, atualizaUser, signout } = useAuthConta();

    useEffect(() => {
        if (user?.jogador?.id) atualizaUser(user?.jogador?.id)
    },[])

    const toggleVolume = () => {
        toggleMusica()
    }
	
    const logout = () => {
        signout()
        navigate("/login")
    }

    const jogar = async (tipo) => {
        debugger
        await criarPartida(tipo.toUpperCase());
        navigate("/fila")
    }

    const [nivel, setNivel] = useState(1);

    return (
        <section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu-infos-user">
                        <div className="item-menu nivel">
                            <div className="icon icon-nivel">
                                <p className="numNivel">{user?.jogador?.nivelatual}</p>
                            </div>
                            <div className="info inivel">
                                <button className="info nivel">
                                    <p className="info-p">{user?.jogador?.experiencia}</p>
                                    <p className="info-p">/100</p>
                                </button>
                            </div>
                        </div>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-menu esmeraldas">
                            <div className="icon icon-esmeralda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">{user?.jogador?.qntmoedaespecial}</p>
                            </div>
                        </button>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-menu moedas">
                            <div className="icon icon-moeda"></div>
                            <div className="info-esmeralda">
                                <p className="info-p">{user?.jogador?.qntmoedanormal}</p>
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
                    <div className="arenas-carrossel">
                        <Carrossel nivel={nivel} />
                    </div>
                    <div className="menu-principal">
                        <button className="btn menu-item" onClick={() => jogar('onca')}><p className="texto-p">JOGAR <br></br> COMO ONÇA</p></button>
                        <button className="btn menu-item" onClick={() => jogar('cachorro')}><p className="texto-p">JOGAR COMO <br></br> CACHORRO</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/loja/skins")}}><p className="texto-p">LOJA</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/colecao")}}><p className="texto-p">COLEÇÃO</p></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home