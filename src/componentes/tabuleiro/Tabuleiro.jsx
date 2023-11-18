import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabuleiro.css';
import Cronometro from './cronometro/Cronometro';
import LogOutIcon from '/src/assets/imagens/icones/LogOutIcon';
import VolumeOffIcon from '/src/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/src/assets/imagens/icones/VolumeOnIcon';
import placaUser from '/src/assets/imagens/placas/placa_usuario.png';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Tabuleiro() {
    const navigate = useNavigate();
    const {partida, pecasComidas, movimentarPartida, finalizarPartida, jogadorAtualCronometro} = useTabuleiro();
    const [tabuleiro, setTabuleiro] = useState([]);
    const [pecaSelecionada, setPecaSelecionada] = useState({});
    const { toggleMusica, musicaStatus } = useSomAmbiente();

    useEffect(() => {
        if (partida && Object.keys(partida).length > 0) {
          const novoTabuleiro = criarTabuleiro(partida);
          setTabuleiro(novoTabuleiro);
        }
    }, [partida]);

    const criarTabuleiro = (partida) => {
        const tabuleiro = [];
        const posicoesFixasTri = ["5,0;", "5,4;", "6,1;", "6,3;" ];

        for (let i = 0; i < 7; i++) {
          const linha = [];

          for (let j = 0; j < 5; j++) {
            const chave = `${i},${j};`;
            if (posicoesFixasTri.includes(chave)) {
                linha.push("tri")
            } else if (partida.primeirojogador.posicoes.hasOwnProperty(chave)) {
              linha.push(1);
            } else if (partida.segundojogador.posicoes.hasOwnProperty(chave)) {
              linha.push(2);
            } else {
              linha.push("");
            }
          }
          tabuleiro.push(linha);
        }
        return tabuleiro;
    };

    const jogadorSessao = parseInt(localStorage.getItem("timeTabuleiro"));

    const desistir = () => {
        finalizarPartida(jogadorSessao === 1 ? 2 : 1);
        localStorage.removeItem("timeTabuleiro");
        navigate("/menu");
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
        }
    }
    
    const handleCellClick = async (x, y, peca) => {
        if (jogadorSessao === jogadorAtualCronometro && peca === jogadorAtualCronometro && Number.isInteger(peca)) {
            setPecaSelecionada({ y, x });
        } else if (peca === "" && pecaSelecionada.y !== undefined) {
            const movimentoValido = await movimentarPartida(pecaSelecionada.y, pecaSelecionada.x, y, x, jogadorSessao);
            if (movimentoValido && pecasComidas === 5) {
                finalizarPartida(1)
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
                                {Array.from({ length: pecasComidas }).map((_, index) => (
                                    <div className="placar-onca-tabuleiro peca-comida-tabuleiro" key={index}></div>
                                ))}
                            </div>
                            <Cronometro jogador={1}/>
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
                                    {tabuleiro.map((row, y) => (
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
                                                peca-${peca === 1 ? 'onca' : 'cachorro'}-tabuleiro
                                                ${x === pecaSelecionada?.x && y === pecaSelecionada?.y ? 'peca-selecionada-tabuleiro' : ''}
                                                ${peca === jogadorAtualCronometro && !(x === pecaSelecionada?.x && y === pecaSelecionada?.y) ? 'peca-jogador-tabuleiro' : ''} 
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
                            <button className="item-config" onClick={toggleMusica}>
                                {musicaStatus ? <VolumeOnIcon /> : <VolumeOffIcon />}
                            </button>
                            <button className="item-config-tabuleiro" onClick={desistir}>
                                <LogOutIcon />
                            </button>
                        </div>
                        <div className="area-cachorro-container-tabuleiro">
                            <Cronometro jogador={2}/>
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