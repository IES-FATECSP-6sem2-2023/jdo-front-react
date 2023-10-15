import React from "react";
import './colecao.css'
import ReturnIcon from '../assets/imagens/icones/ReturnIcon'
import { useNavigate } from "react-router-dom";

function Colecao() {
    const navigate = useNavigate()
    const mudaColecao = (event) => {
        const colecaoOnca = document.getElementById("colecao-onca");
        const colecaoCachorro = document.getElementById("colecao-cachorro");

        if(parseInt(event.target.value) == 1){
            colecaoOnca.style.display = 'flex';
            colecaoCachorro.style.display = 'none';
        }
        else{
            colecaoOnca.style.display = 'none';
            colecaoCachorro.style.display = 'flex';
        }
    }


    const defineSkinPadrao = () => {
        const opcoesSkins = document.querySelectorAll('input[type="radio"][name="opcaoSkin"]');
        opcoesSkins.forEach((input) => {
            input.addEventListener('change', (event) => {
                opcoesSkins.forEach((skinInput) => {
                    const label = skinInput.parentElement;
                    label.classList.remove('selected');
                });

                if (event.target.checked) {
                    const label = event.target.parentElement;
                    label.classList.add('selected');
                }
            });
        });
    }

    const mostraSkinPadrao = () => {
        const opcaoSkin = document.querySelector('input[type="radio"][name="opcaoSkin"]:checked');
        if (opcaoSkin) {
            let skinSelecionada = opcaoSkin.value;
            console.log('Opção selecionada: ' + skinSelecionada);
        } else {
            console.log('Nenhuma opção selecionada.');
        }
    }

    //Add a classe selected nas skin de onca e cachorro que vier por padrão

        return(
            <section className="bg-colecao">
                <div className="bg-colecao-container">
                    <div className="menu-superior-colecao">
                        <div className="menu-colecao">
                            <button className="item-retorno-colecao" onClick={() => navigate("/menu")}>
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
                        <button className="sub-menu-item-colecao" value={1} onClick={mudaColecao}>ONÇA</button>
                        <button className="sub-menu-item-colecao" value={2} onClick={mudaColecao}>CACHORRO</button>
                    </div>
                    <div className="colecao-onca-colecao" id="colecao-onca">
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={1} />
                                AMAZÔNIA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={2} />
                                CAATINGA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={3} />
                                MATA ATLÂNTICA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={4} />
                                PANTANAL
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={5} />
                                HALLOWEEN
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={6} />
                                NATAL
                            </label>
                        </div>
                    </div>
                    <div className="colecao-cachorro-colecao" id="colecao-cachorro">
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={7} />
                                AMAZÔNIA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={8} />
                                CAATINGA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={9} />
                                MATA ATLÂNTICA
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={10} />
                                PANTANAL
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={11} />
                                HALLOWEEN
                            </label>
                        </div>
                        <div className="skin-item-colecao">
                            <label className="radio-button-label-colecao" onChange={defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={12} />
                                NATAL
                            </label>
                        </div>
                    </div>
                    <div className="salva-padrao-colecao">
                        <button onClick={mostraSkinPadrao}>DEFINIR COMO PADRÃO</button>
                    </div>
                </div>
            </section>
        )
    }

export default Colecao