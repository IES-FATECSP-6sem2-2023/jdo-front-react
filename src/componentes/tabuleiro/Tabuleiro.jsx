import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabuleiro.css';
import Cronometro from './cronometro/Cronometro';
import LogOutIcon from '/src/assets/imagens/icones/LogOutIcon';
import VolumeOffIcon from '/src/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/src/assets/imagens/icones/VolumeOnIcon';
import placaUser from '/src/assets/imagens/placas/placa_usuario.png';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Tabuleiro({musicaAtiva, toggleMusica}) {
    const {partida, movimentarPartida, finalizarPartida} = useTabuleiro();
    const navigate = useNavigate()

    const jogadorOnline = parseInt(localStorage.getItem("timeTabuleiro"));
    const [jogadorDaVez, setJogadorAtual] = useState(2);

    const alternarJogador = () => {
      setJogadorAtual(jogadorDaVez === 1 ? 2 : 1);
    };
  
    const handleTempoEsgotado = (jogador) => {
      console.log(`Tempo esgotado para Jogador ${jogador}`);
      setPecaSelecionada({})
      alternarJogador();
    };

    const toggleVolume = () => {
        toggleMusica()
    }

    const desistir = () => {
        localStorage.removeItem("timeTabuleiro")
        finalizarPartida()
        navigate("/menu")
    }

    const somReacao = (event) => {
        const audioLista = {
            1: 'src/assets/sons/tabuleiro/rindo.mp3',
            2: 'src/assets/sons/tabuleiro/nervoso.mp3',
            3: 'src/assets/sons/tabuleiro/surpreso.mp3',
            4: 'src/assets/sons/tabuleiro/cachorro.mp3',
            5: 'src/assets/sons/tabuleiro/onca.mp3',
        };

        const valorDaReacao = parseInt(event.target.value);

        if (audioLista[valorDaReacao]) {
            const audio = new Audio(audioLista[valorDaReacao]);
            audio.play();
        } else {
            console.log("Valor não reconhecido");
        }
    }

    const [formacaoInicialTabuleiro, setFormacaoInicialTabuleiro] = useState([
        ["2", "2", "2", "2", "2"],
        ["2", "2", "2", "2", "2"],
        ["2", "2", "1", "2", "2"],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["tri", "", "", "", "tri"],
        ["", "tri", "", "tri", ""],
        
    ]);

    const [pecaSelecionada, setPecaSelecionada] = useState({});
    
    const handleCellClick = async (x, y, peca) => {
        debugger
        if (jogadorOnline === jogadorDaVez && parseInt(peca) === jogadorDaVez && peca !== "" && peca !== "tri") {
          setPecaSelecionada({ y, x });
        } else if (peca === "" && pecaSelecionada.y !== undefined) {
          const movimentoValido = await movimentarPartida(pecaSelecionada.y, pecaSelecionada.x, y, x, jogadorOnline === 1 ? 1 : 2);
          if (movimentoValido) {
          
            const novaFormacaoTabuleiro = [...formacaoInicialTabuleiro];
            novaFormacaoTabuleiro[y][x] = jogadorDaVez;
            novaFormacaoTabuleiro[pecaSelecionada.y][pecaSelecionada.x] = "";
          
            setFormacaoInicialTabuleiro(novaFormacaoTabuleiro);
            handleTempoEsgotado(jogadorDaVez);
          }
        }
      };

    // const modal = document.getElementById("modal");
    // const modalLoading = document.getElementById("modal-loading");
    // const modalVitoria = document.getElementById("modal-vitoria");
    // const modalDerrota = document.getElementById("modal-derrota");
    // const tabuleiroContainer = document.getElementById("tabuleiro-container");
  
    //Se o jogador vencer
    // tabuleiroContainer.style.display = "none"
    // modal.style.display = "block"
    // modalVitoria.style.display = "block"
    // const somVitoria = new Audio('src/assets/sons/tabuleiro/jogo_ganho.mp3');
    // somVitoria.play();

    //Se o jogador perder
    // tabuleiroContainer.style.display = "none"
    // modal.style.display = "block"
    // modalDerrota.style.display = "block"
    // const somDerrota = new Audio('src/assets/sons/tabuleiro/jogo_perdido.mp3');
    // somDerrota.play();
    
        return(
            <section className="bg-tabuleiro">
                <div className="bg-tabuleiro-container" id="tabuleiro-container">
                    <div className="area-onca-tabuleiro">
                        <div className="area-onca-container-tabuleiro">
                            <div className="placar-tabuleiro">
                                <div className="placar-onca-tabuleiro"></div> 
                                {/* Add classe "peca-comida" para mostrar o placar */}
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                                <div className="placar-onca-tabuleiro"></div>
                            </div>
                            <Cronometro jogador={1} ativo={jogadorDaVez === 1} onTempoEsgotado={handleTempoEsgotado} />
                            <div className="info-user-tabuleiro jogador-onca-tabuleiro">
                                <img src={placaUser} />
                                <h1 id="contador-onca-tabuleiro">JOGADOR ONÇA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="principal-tabuleiro">
                        <div className="tabuleiro">
                            <div className="tabuleiro-container">
                                <div className="malha-tabuleiro">
                                    {/* Renderização dinâmica do tabuleiro */}
                                    {formacaoInicialTabuleiro.map((row, y) => (
                                    <div className="row-tabuleiro" key={y}>
                                        {row.map((peca, x) => (
                                        peca === "tri" ? (
                                            <div className="cell-tri-tabuleiro" data-x={x} data-y={y} key={x}></div>
                                        ) : peca === '' ? (
                                            <div className="cell-tabuleiro" data-x={x} data-y={y} key={x}  onClick={() => handleCellClick(x, y, peca)}></div>
                                        ) :
                                        (
                                            <div
                                                className={`
                                                cell-tabuleiro 
                                                peca-${peca === '1' ? 'onca' : 'cachorro'}-tabuleiro
                                                ${x === pecaSelecionada?.x && y === pecaSelecionada?.y ? 'peca-selecionada-tabuleiro' : ''}
                                                ${parseInt(peca) === jogadorDaVez && !(x === pecaSelecionada?.x && y === pecaSelecionada?.y) ? 'peca-jogador-tabuleiro' : ''} 
                                                `}
                                                data-x={x}
                                                data-y={y}
                                                key={x}
                                                onClick={() => handleCellClick(x, y, peca)}
                                            ></div>
                                        )
                                        ))}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="reacoes-tabuleiro">
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-rindo-tabuleiro" value={1} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-nervoso-tabuleiro" value={2} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-surpreso-tabuleiro" value={3} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-cachorro-tabuleiro" value={4} onClick={somReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-onca-tabuleiro" value={5} onClick={somReacao}></button>
                            </div>
                        </div>
                    </div>
                    <div className="area-cachorro-tabuleiro">
                        <div className="menu-superior-tabuleiro">
                            <button className="item-config-tabuleiro" onClick={toggleVolume}>
                                {musicaAtiva ? <VolumeOnIcon /> : <VolumeOffIcon />}
                            </button>
                            <button className="item-config-tabuleiro" onClick={desistir}>
                                <LogOutIcon />
                            </button>
                        </div>
                        <div className="area-cachorro-container-tabuleiro">
                            <Cronometro jogador={2} ativo={jogadorDaVez === 2} onTempoEsgotado={handleTempoEsgotado} />
                            <div className="info-user-tabuleiro jogador-cachorro-tabuleiro">
                                <img src={placaUser} />
                                <h1>JOGADOR CACHORRO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default Tabuleiro