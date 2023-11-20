import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import './LojaSkin.css';
import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import LojaSkinService from '/src/services/LojaSkinsService';
import ModalCompraSkin from '/src/componentes/modals/compras/skins/compraSkin';
import { toast } from 'react-toastify';

// @ToDo: montar lógica para validar se é possível comprar skin (se não, mandar para loja de moeda) + salvar ela na conta do usuario +atualizar informação na sessão (essa parte o paulo faz)

function LojaSkin() {
    const navigate = useNavigate();
    const { user } = useAuthConta();
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const getOpcoesCompraSkin = async () => {
            if (user && user?.jogador?.id) {
                try {
                    const data = await LojaSkinService.getOpcoesCompraSkin(user?.jogador?.id);
                    
                    if (data.status === 200) {
                        setResponse(data.data);                 
                    } 
                    else {
                        console.error('Erro na resposta do servidor:', data);
                    }
                } 
                catch (error) {
                    console.error('Erro na busca de dados:', error);
                }
            }
        };
        getOpcoesCompraSkin();
    }, [user]);

    const verificaSaldo = (idItem, valor, formaPagamento) => {
        let pagamentoMoedaRara = formaPagamento === 'esmeralda' ? true : false;
        
        if (formaPagamento === 'esmeralda' && user.jogador.qntmoedaespecial >= valor) {
            compraSkin(user?.jogador?.id, idItem, pagamentoMoedaRara)
        } else if (formaPagamento === 'moeda' && user.jogador.qntmoedanormal >= valor) {
            compraSkin(user?.jogador?.id, idItem, pagamentoMoedaRara)
        } else {
            toast.info("Saldo insuficiente!");
        }
    };

    const compraSkin = async (idJogador, idSkin, pagamento) => {
        try {
            const data = await LojaSkinService.sendSkin(idJogador, idSkin, pagamento);
            
            if (data.status === 200) {
                setResponse(data.data);
                navigate(`/compras/skins/${idSkin}`);             
            } 
            else {
                console.error('Erro na resposta do servidor:', data);
            }
        } 
        catch (error) {
            console.error('Erro na busca de dados:', error);
        }
    };

    return (
            <section className="bg-loja-skin">
                <div className="bg-loja-skin-container" id="bg-lojaSkin">
                    <div className="menu-superior-loja-skin">
                        <div className="menu-loja-skin">
                            <button className="item-retorno-loja-skin" onClick={() => {navigate("/menu")}}>
                                <ReturnIcon />
                            </button>
                        </div>
                        <div className="titulo-loja-skin">
                            <div className="placa-titulo-loja-skin">
                                <h1>LOJA</h1>
                            </div>
                        </div>
                    </div>
                    <div className="moedas-atuais-loja-skin">
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-qtde-loja-skin esmeraldas-loja-skin">
                            <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                            <div className="info-esmeralda-loja-skin">
                                <p className="info-p-loja-skin">{user?.jogador?.qntmoedaespecial}</p>
                            </div>
                        </button>
                        <button onClick={() => {navigate("/loja/moedas")}} className="item-qtde-loja-skin moedas-loja-skin">
                            <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                            <div className="info-esmeralda-loja-skin">
                                <p className="info-p-loja-skin">{user?.jogador?.qntmoedanormal}</p>
                            </div>
                        </button>
                    </div>
                    <div className="loja-skin">
                        {response && response.length > 0 ? (
                            response.map((item) => (
                                <div className="loja-item-loja-skin" key={item.id}>
                                    <div className="skin">
                                        <img src={`/assets/imagens/skins/${item.imagem}`} alt={item.nome} />
                                    </div>
                                    <div className="nome-skin-loja-skin">
                                        <h1>{item.nome}</h1>
                                    </div>
                                    <div className="precos-loja-skin">
                                        <button className="preco-esmeralda-loja-skin" onClick={() => verificaSaldo(item.id, item.valorrara, 'esmeralda')}>
                                            <div className="icon-loja-skin icon-esmeralda-loja-skin"></div>
                                            <div className="preco-loja-skin">
                                                <p>{item.valorrara}</p>
                                            </div>
                                        </button>
                                        <button className="preco-moeda-loja-skin" onClick={() => verificaSaldo(item.id, item.valornormal, 'moeda')}>
                                            <div className="icon-loja-skin icon-moeda-loja-skin"></div>
                                            <div className="preco-loja-skin">
                                                <p>{item.valornormal}</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="nada-para-comprar">Aguarde novos itens chegar na loja!</p>
                        )}
                    </div>
                </div>
            </section>
        );
    }

export default LojaSkin