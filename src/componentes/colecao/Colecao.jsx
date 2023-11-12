import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Colecao.css';
import ReturnIcon from '/src/assets/imagens/icones/ReturnIcon';
import { toast } from 'react-toastify';
import useAuthConta from '/src/hooks/AuthConta';
import ColecaoService from '/src/services/ColecaoService';

function Colecao() {
    const navigate = useNavigate()
    const { user } = useAuthConta();

    // @ToDo: montar lógica para alterar tanto cachorro e onça para o usuário e ver como salvar essa info para o usuário

    useEffect(() => {
        const getColecao = async (idUsuario) => {
            try {
                const data = await ColecaoService.getColecao(idUsuario);
                if (data.status === 200) {
                    setResponse(data);  
                    console.log(data)               
                } 
                else {
                    console.error('Erro na resposta do servidor:', data);
                }
            } 
            catch (error) {
                console.error('Erro na busca de dados:', error);
            }
        };

        getColecao(1);
    }, []);
    
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
            toast.info('Opção selecionada: ' + skinSelecionada);
        } else {
            toast.info('Nenhuma opção selecionada.');
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
                            <img src="" alt="" />
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
                    {/* <div className="skin-item-colecao">
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
                    </div> */}
                </div>
                <div className="salva-padrao-colecao">
                    <button onClick={mostraSkinPadrao}>DEFINIR COMO PADRÃO</button>
                </div>
            </div>
        </section>
    )
}

export default Colecao