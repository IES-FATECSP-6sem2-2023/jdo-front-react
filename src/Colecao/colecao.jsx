import React, { Component } from "react";
import './colecao.css'
import Skin from '../assets/imagens/skins/onca_amazonia.png'
import { render } from "react-dom";

class Colecao extends Component{
    mudaColecao = (event) => {
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


    defineSkinPadrao(){
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

    mostraSkinPadrao() {
        const opcaoSkin = document.querySelector('input[type="radio"][name="opcaoSkin"]:checked');
        if (opcaoSkin) {
            let skinSelecionada = opcaoSkin.value;
            console.log('Opção selecionada: ' + skinSelecionada);
        } else {
            console.log('Nenhuma opção selecionada.');
        }
    }

    //Add a classe selected nas skin de onca e cachorro que vier por padrão

    render(){
        return(
            <section className="bg-colecao">
                <div className="bg-colecao-container">
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
                        <button className="sub-menu-item" value={1} onClick={this.mudaColecao}>ONÇA</button>
                        <button className="sub-menu-item" value={2} onClick={this.mudaColecao}>CACHORRO</button>
                    </div>
                    <div className="colecao-onca" id="colecao-onca">
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={1} />
                                AMAZÔNIA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={2} />
                                CAATINGA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={3} />
                                MATA ATLÂNTICA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={4} />
                                PANTANAL
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={5} />
                                HALLOWEEN
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={6} />
                                NATAL
                            </label>
                        </div>
                    </div>
                    <div className="colecao-cachorro" id="colecao-cachorro">
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={7} />
                                AMAZÔNIA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={8} />
                                CAATINGA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={9} />
                                MATA ATLÂNTICA
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={10} />
                                PANTANAL
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={11} />
                                HALLOWEEN
                            </label>
                        </div>
                        <div className="skin-item">
                            <label className="radio-button-label" onChange={this.defineSkinPadrao}>
                                <input type="radio" name="opcaoSkin" value={12} />
                                NATAL
                            </label>
                        </div>
                    </div>
                    <div className="salva-padrao">
                        <button onClick={this.mostraSkinPadrao}>DEFINIR COMO PADRÃO</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default Colecao