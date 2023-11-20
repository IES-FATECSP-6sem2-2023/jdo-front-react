import React, { useEffect, useState } from 'react';
import Desistir from '../modals/desistir/desistir.jsx';
import './Tabuleiro.css';
import CronometroCachorro from './cronometro/CronometroCachorro.jsx';
import CronometroOnca from './cronometro/CronometroOnca.jsx';
import LogOutIcon from '/public/assets/imagens/icones/LogOutIcon';
import VolumeOffIcon from '/public/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/public/assets/imagens/icones/VolumeOnIcon';
import placaUser from '/public/assets/imagens/placas/placa_usuario.png';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Tabuleiro() {
    const {
        partida,
        pecasComidas,
        movimentarPartida,
        jogadorAtualCronometro,
        jogadorSessao,
        stompClient
    } = useTabuleiro();
    const [modalDesistirVisiblity, setModalDesistirVisiblity] = useState(false);
    
    const [tabuleiro, setTabuleiro] = useState([]);
    const [jogadorDaVez, setJogadorDaVez] = useState(jogadorAtualCronometro);
    const [pecaSelecionada, setPecaSelecionada] = useState({});
    const { toggleMusica, musicaStatus } = useSomAmbiente();

    useEffect(() => {
        if (partida && Object.keys(partida).length > 0) {
          const novoTabuleiro = criarTabuleiro(partida);
          setTabuleiro(novoTabuleiro);
          stompClient.subscribe('/topic/game-reaction', function(message) {
            const numeroReacao = Number(JSON.parse(message.body));
            somReacao(numeroReacao);
          });
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

    const desistir = async () => {
        setModalDesistirVisiblity(!modalDesistirVisiblity);
    }

    const clicarReacao = (event) => {
        const numeroReacao = parseInt(event.target.value)
        stompClient.publish({ destination: "/topic/game-reaction", body: JSON.stringify(numeroReacao) });
        somReacao(numeroReacao)
    };

    const somReacao = (numeroReacao) => {
        const audioLista = {
            1: '/public/assets/sons/tabuleiro/rindo.mp3',
            2: '/public/assets/sons/tabuleiro/nervoso.mp3',
            3: '/public/assets/sons/tabuleiro/surpreso.mp3',
            4: '/public/assets/sons/tabuleiro/cachorro.mp3',
            5: '/public/assets/sons/tabuleiro/onca.mp3',
        };

        if (audioLista[numeroReacao]) {
            const audio = new Audio(audioLista[numeroReacao]);
            audio.play();
        }
    }
    
    const handleCellClick = async (x, y, peca) => {
        if (jogadorSessao === jogadorDaVez && peca === jogadorDaVez && Number.isInteger(peca)) {
            setPecaSelecionada({ y, x });
        } else if (peca === "" && pecaSelecionada.y !== undefined) {
            await movimentarPartida(pecaSelecionada.y, pecaSelecionada.x, y, x, jogadorSessao);
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
                            <CronometroOnca ativo={jogadorDaVez === 1 ? true : false}/>
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
                                                style={{
                                                    backgroundImage: `/assets/imagens/skins/${jogadorSessao === peca ? partida?.primeirojogador?.nomeSkinFavorita : partida?.segundojogador?.nomeSkinFavorita}`,
                                                    backgroundFallback: `${peca === 1 ? "/assets/imagens/skins/onca_amazonia.png" : "/assets/imagens/skins/cachorro_amazonia.png"}`
                                                }}
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
                                <button className="btn-emoji-tabuleiro emoji-rindo-tabuleiro" value={1} onClick={clicarReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-nervoso-tabuleiro" value={2} onClick={clicarReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-surpreso-tabuleiro" value={3} onClick={clicarReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-cachorro-tabuleiro" value={4} onClick={clicarReacao}></button>
                            </div>
                            <div className="item-reacao-tabuleiro">
                                <button className="btn-emoji-tabuleiro emoji-onca-tabuleiro" value={5} onClick={clicarReacao}></button>
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
                        <CronometroCachorro  ativo={jogadorDaVez === 2 ? true : false}/>
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