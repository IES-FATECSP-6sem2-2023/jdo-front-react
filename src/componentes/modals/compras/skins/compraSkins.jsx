import React from 'react';
import './compraSkins.css';
import { useNavigate } from 'react-router';

function compraSkins() {
    const navigate = useNavigate();

    // switch (x) {}

    // imgItem.style.backgroundImage = `url(${imgItemComprado})`;
    
    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-compra-loja-loja-skin" id="modal-compra">
                    <div className="box-titulo-loja-skin">
                        <h1>PARABÉNS!</h1>
                    </div>
                    <div className="box-content-loja-skin">
                        <div className="img-compra-loja-skin">
                            <div className="img-item-comprado-loja-skin" id="img-item-comprado"></div>
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

export default compraSkins