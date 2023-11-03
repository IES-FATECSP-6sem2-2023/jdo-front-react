import React from 'react';
import './compraMoedas.css';
import { useNavigate } from 'react-router';

function compraMoedas() {
    const navigate = useNavigate();

    // switch (x) {
    //     case 1:
    //         imgItemComprado = '/src/assets/imagens/vetores/poucas_esmeraldas.png';
    //         txtItemComprado = '100 ESMERALDAS!';
    //         break;
    //     case 2:
    //         imgItemComprado = '/src/assets/imagens/vetores/saco_esmeraldas.png';
    //         txtItemComprado = '500 ESMERALDAS!';
    //         break;
    //     case 3:
    //         imgItemComprado = '/src/assets/imagens/vetores/balde_esmeraldas.png';
    //         txtItemComprado = '1.000 ESMERALDAS!';
    //         break;
    //     case 4:
    //         imgItemComprado = '/src/assets/imagens/vetores/poucas_moedas.png';
    //         txtItemComprado = '100 MOEDAS!';
    //         break;
    //     case 5:
    //         imgItemComprado = '/src/assets/imagens/vetores/saco_moedas.png';
    //         txtItemComprado = '1.000 MOEDAS!';
    //         break;
    //     case 6:
    //         imgItemComprado = '/src/assets/imagens/vetores/balde_moedas.png';
    //         txtItemComprado = '10.000 MOEDAS!';
    //         break;
    //     default:
    //         imgItemComprado = '';
    //         txtItemComprado = '';
    //         break;
    // }
    //
    // const imgItem = document.getElementById("img-moeda-comprada");
    // const textoItem = document.getElementById("texto-item-comprado-loja-moeda");
    // imgItem.style.backgroundImage = `url(${imgItemComprado})`;
    // textoItem.innerText = "VOCÊ COMPROU " + txtItemComprado;
    
    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-compra-loja-loja-moeda" id="modal-compra">
                    <div className="box-titulo-loja-moeda">
                        <h1>PARABÉNS!</h1>
                    </div>
                    <div className="box-content-loja-moeda">
                        <div className="img-compra-loja-moeda">
                            <div className="img-item-comprado-loja-moeda" id="img-moeda-comprada"></div>
                        </div>
                        <div className="compra-texto-loja-moeda">
                            <p id="texto-item-comprado-loja-moeda"></p>
                        </div>
                        <div className="loja-moeda">
                            <button onClick={() => {navigate("/loja/moedas")}}>VOLTAR PARA A LOJA</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default compraMoedas