import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Colecao.css';
import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import ColecaoService from '/src/services/ColecaoService';

function Colecao() {
    const navigate = useNavigate()
    const { user } = useAuthConta();
    const [response, setResponse] = useState([]);

    // @ToDo: montar lógica para alterar tanto cachorro e onça para o usuário e ver como salvar essa info para o usuário

    useEffect(() => {
        const getColecao = async () => {
            try {
                const data = await ColecaoService.getColecao(user.jogador.id);
                if (data.status === 200) {
                    setResponse(data.data.itens);
                } 
                else {
                    console.error('Erro na resposta do servidor:', data);
                }
            } 
            catch (error) {
                console.error('Erro na busca de dados:', error);
            }
        };

        getColecao();
    }, [user]);
    
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

    const escolheSkinPadrao = () => {
        const opcoesSkins = document.querySelectorAll('input[type="radio"][name="opcaoSkin"]');
        
        opcoesSkins.forEach((input) => {
            input.addEventListener('change', (event) => {
                opcoesSkins.forEach((skinInput) => {
                    const label = skinInput.parentElement;
                    const img = label.querySelector('.colecao-skin');
    
                    label.classList.remove('selected');
                    img.classList.remove('selected-img');
    
                    if (event.target.checked) {
                        const selectedLabel = event.target.parentElement;
                        const selectedImg = selectedLabel.querySelector('.colecao-skin');
                        
                        selectedLabel.classList.add('selected');
                        selectedImg.classList.add('selected-img');
                    }
                });
            });
        });
    };

    const defineSkinPadrao = async () => {
        try {
            const opcaoSkin = document.querySelector('input[type="radio"][name="opcaoSkin"]:checked');
            const dataSkinPadrao = await ColecaoService.authItemFavorito(user.jogador.id, opcaoSkin.value);

            if (dataSkinPadrao.status === 200) {
                toast.success('Skin favorita atualizada!');
            } else {
                console.error('Erro na resposta do servidor:', dataSkinPadrao);
            }
        } catch (error) {
            toast.info('Nenhuma opção selecionada.');
        }
    };

    const skinsOncas = response.filter((item) => item.tipo === 3);
    const skinsCachorro = response.filter((item) => item.tipo === 4);

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
                    {skinsOncas.map((item) => (
                        <div key={item.id} className="skin-item-colecao">
                            <label className="radio-button-label-colecao">
                                <input type="radio" name="opcaoSkin" value={item.id} onChange={escolheSkinPadrao}/>
                                <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imagens/skins/${item.imagem}`} className="colecao-skin"/>
                                <span className="colecao-skin-nome">{item.nome}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="colecao-cachorro-colecao" id="colecao-cachorro">
                    {skinsCachorro.map((item) => (
                        <div key={item.id} className="skin-item-colecao">
                            <label className="radio-button-label-colecao">
                                <input type="radio" name="opcaoSkin" value={item.id} onChange={escolheSkinPadrao}/>
                                <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imagens/skins/${item.imagem}`} className="colecao-skin"/>
                                <span className="colecao-skin-nome">{item.nome}</span>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="salva-padrao-colecao">
                    <button onClick={defineSkinPadrao}>DEFINIR COMO PADRÃO</button>
                </div>
            </div>
        </section>
    );
}

export default Colecao