import React, { useRef, useEffect } from 'react';
import './compraSkin.css';
import { useNavigate, useParams } from 'react-router-dom';

function modalCompraSkin() {
    const navigate = useNavigate();
    const { id } = useParams();
    const idCompraSkin = parseInt(id, 10);
    const imgItemRef = useRef(null);

    useEffect(() => {

        const imgItem = imgItemRef.current;
        let imgItemComprado;

        switch (idCompraSkin) {
            case 5:
                imgItemComprado = '/assets/imagens/skins/onca_halloween.png';
                break;
            case 6:
                imgItemComprado = '/assets/imagens/skins/cachorro_halloween.png';
                break;
            case 7:
                imgItemComprado = '/assets/imagens/skins/onca_natal.png';
                break;
            case 8:
                imgItemComprado = '/assets/imagens/skins/cachorro_natal.png';
                break;
            case 9:
                imgItemComprado = '/assets/imagens/skins/onca_caatinga.png';
                break;
            case 10:
                imgItemComprado = '/assets/imagens/skins/cachorro_caatinga.png';
                break;
            case 11:
                imgItemComprado = '/assets/imagens/skins/onca_mata-atlantica.png';
                break;
            case 12:
                imgItemComprado = '/assets/imagens/skins/cachorro_mata-atlantica.png';
                break;
            case 13:
                imgItemComprado = '/assets/imagens/skins/onca_pantanal.png';
                break;
            case 14:
                imgItemComprado = '/assets/imagens/skins/cachorro_pantanal.png';
                break;
            default:
                imgItemComprado = '';
                break;
        }

        if(imgItem){
            imgItem.style.backgroundImage = `url(${imgItemComprado})`;
        }

    },[idCompraSkin])
    
    return(
        <section className="background-modal-compra-skin">
            <div className="modal-container-compra-skin" id="modal">
                <div className="box-compra-loja-loja-skin" id="modal-compra">
                    <div className="box-titulo-loja-skin">
                        <h1>PARABÉNS!</h1>
                    </div>
                    <div className="box-content-loja-skin">
                        <div className="img-compra-loja-skin">
                            <div className="img-item-comprado-loja-skin" id="img-item-comprado" ref={imgItemRef}></div>
                        </div>
                        <div className="compra-texto-loja-skin">
                            <p id="texto-item-comprado-loja-skin">VOCÊ COMPROU UMA NOVA SKIN!</p>
                        </div>
                        <button className="btn-loja-skin" onClick={() => {navigate("/colecao")}}>VER NA COLEÇÃO</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default modalCompraSkin