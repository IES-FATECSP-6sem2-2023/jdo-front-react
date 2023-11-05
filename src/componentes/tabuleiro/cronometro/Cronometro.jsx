import React, { useState, useEffect } from 'react';

function Cronometro({ jogador, ativo, onTempoEsgotado }) {
    const [tempoRestante, setTempoRestante] = useState(15);
  
    useEffect(() => {
      if (tempoRestante > 0 && ativo) {
        const timer = setTimeout(() => {
          setTempoRestante(tempoRestante - 1);
        }, 1000);
  
        return () => clearTimeout(timer);
      } else if (tempoRestante === 0 && ativo) {
        onTempoEsgotado(jogador);
        setTempoRestante(15);
      }
    }, [tempoRestante, jogador, ativo, onTempoEsgotado]);

  return (
    <div className='contador-tabuleiro'>
      <h1>{tempoRestante}</h1>
    </div>
  );
}

export default Cronometro