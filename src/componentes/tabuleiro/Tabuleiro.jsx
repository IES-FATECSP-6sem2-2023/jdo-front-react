import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tabuleiro.css';
import Cronometro from './cronometro/Cronometro';
import Desistir from '../modals/desistir/desistir.jsx';
import LogOutIcon from '/src/assets/imagens/icones/LogOutIcon';
import VolumeOffIcon from '/src/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/src/assets/imagens/icones/VolumeOnIcon';
import placaUser from '/src/assets/imagens/placas/placa_usuario.png';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import useTabuleiro from '/src/hooks/TabuleiroHook';
import { toast } from 'react-toastify';

function Tabuleiro() {
    const navigate = useNavigate();
    const {partida, pecasComidas, movimentarPartida, finalizarPartida, jogadorAtualCronometro} = useTabuleiro();
    const [modalDesistirVisiblity, setModalDesistirVisiblity] = useState(false);
    const [tabuleiro, setTabuleiro] = useState([]);
    const [jogadorDaVez, setJogadorDaVez] = useState(jogadorAtualCronometro);
    const [pecaSelecionada, setPecaSelecionada] = useState({});
    const { toggleMusica, musicaStatus } = useSomAmbiente();

    useEffect(() => {
        if (partida && Object.keys(partida).length > 0) {
          const novoTabuleiro = criarTabuleiro(partida);
          setTabuleiro(novoTabuleiro);
        }
    }, [partida]);

    useEffect(()=>{
        setPecaSelecionada({})
        setJogadorDaVez(jogadorAtualCronometro)
    },[jogadorAtualCronometro])

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

    const jogadorSessao = parseInt(JSON.parse(localStorage.getItem("partidaSession"))?.time, 10);

    const desistir = async () => {
        setModalDesistirVisiblity(!modalDesistirVisiblity);
    }

    const somReacao = (event) => {
        const audioLista = {
            1: '/assets/sons/tabuleiro/rindo.mp3',
            2: '/assets/sons/tabuleiro/nervoso.mp3',
            3: '/assets/sons/tabuleiro/surpreso.mp3',
            4: '/assets/sons/tabuleiro/cachorro.mp3',
            5: '/assets/sons/tabuleiro/onca.mp3',
        };

        const valorDaReacao = parseInt(event.target.value);

        if (audioLista[valorDaReacao]) {
            const audio = new Audio(audioLista[valorDaReacao]);
            audio.play();
        }
    }
    
    const handleCellClick = async (x, y, peca) => {
        if (jogadorSessao === jogadorDaVez && peca === jogadorDaVez && Number.isInteger(peca)) {
            setPecaSelecionada({ y, x });
        } else if (peca === "" && pecaSelecionada.y !== undefined) {
            const movimentoValido = await movimentarPartida(pecaSelecionada.y, pecaSelecionada.x, y, x, jogadorSessao);
            if (movimentoValido && pecasComidas === 5) {
                debugger
                const temp = await finalizarPartida(1)
            }
        }
    };
    
        return(
            <section className="bg-tabuleiro">
                {modalDesistirVisiblity && <Desistir alterarVisibilidade={desistir}/>}
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
                                                ${peca === jogadorDaVez && !(x === pecaSelecionada?.x && y === pecaSelecionada?.y) ? 'peca-jogador-tabuleiro' : ''} 
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