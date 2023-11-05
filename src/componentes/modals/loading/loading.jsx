import React from 'react';
import './loading.css';

function loading() {
    return(
        <section className="background">
            <div className="modal-container" id="modal">
                <div className="box-loading-tabuleiro" id="modal-loading">
                    <div className="loading-area-tabuleiro">
                        <span className="circle-tabuleiro"></span>
                        <span className="circle-tabuleiro"></span>
                        <span className="circle-tabuleiro"></span>
                        <span className="circle-tabuleiro"></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default loading