import React, { useRef, useEffect } from 'react';
import './compraMoedas.css';
import { useNavigate } from 'react-router';

function compraMoedas(idItemComprado) {
    const navigate = useNavigate();
    const { idCompra } = idItemComprado;

    const imgItemRef = useRef(null);
    const textoItemRef = useRef(null);

    useEffect(() => {

        const imgItem = imgItemRef.current;
        const textoItem = textoItemRef.current;
        let imgItemComprado, txtItemComprado;

        switch (idCompra) {
            case 1:
                imgItemComprado = '/src/assets/imagens/vetores/poucas_esmeraldas.png';
                txtItemComprado = 'VOCÊ COMPROU 100 ESMERALDAS!';
                break;
            case 2:
                imgItemComprado = '/src/assets/imagens/vetores/saco_esmeraldas.png';
                txtItemComprado = 'VOCÊ COMPROU 500 ESMERALDAS!';
                break;
            case 3:
                imgItemComprado = '/src/assets/imagens/vetores/balde_esmeraldas.png';
                txtItemComprado = 'VOCÊ COMPROU 1.000 ESMERALDAS!';
                break;
            case 4:
                imgItemComprado = '/src/assets/imagens/vetores/poucas_moedas.png';
                txtItemComprado = 'VOCÊ COMPROU 100 MOEDAS!';
                break;
            case 5:
                imgItemComprado = '/src/assets/imagens/vetores/saco_moedas.png';
                txtItemComprado = 'VOCÊ COMPROU 1.000 MOEDAS!';
                break;
            case 6:
                imgItemComprado = '/src/assets/imagens/vetores/balde_moedas.png';
                txtItemComprado = 'VOCÊ COMPROU 10.000 MOEDAS!';
                break;
            default:
                imgItemComprado = '';
                txtItemComprado = '';
                break;
        }

        if(imgItem && textoItem){
            imgItem.style.backgroundImage = `url(${imgItemComprado})`;
            textoItem.textContent = txtItemComprado;
        }

    },[idCompra])
    
    return(
        <section className="background-modal-compra-moeda">
            <div className="modal-container" id="modal">
                <div className="box-compra-loja-loja-moeda" id="modal-compra">
                    <div className="box-titulo-loja-moeda">
                        <h1>PARABÉNS!</h1>
                    </div>
                    <div className="box-content-loja-moeda">
                        <div className="img-compra-loja-moeda">
                            <div className="img-item-comprado-loja-moeda" id="img-moeda-comprada" ref={imgItemRef}></div>
                        </div>
                        <div className="compra-texto-loja-moeda">
                            <p id="texto-item-comprado-loja-moeda" ref={textoItemRef}></p>
                        </div>
                        <div className="loja-moeda">
                            <button onClick={() => {navigate("/menu")}}>VOLTAR PARA A HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default compraMoedas