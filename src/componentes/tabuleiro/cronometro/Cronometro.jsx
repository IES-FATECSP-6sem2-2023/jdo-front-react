import React, { useEffect, useState } from 'react';
import useTabuleiro from '/src/hooks/TabuleiroHook';

function Cronometro({ jogador }) {
  const { jogadorAtualCronometro, passarVez } = useTabuleiro();
  const [tempoRestante, setTempoRestante] = useState(10);
  let timer;

  useEffect(() => {
    if (jogadorAtualCronometro === jogador) {
      timer = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [jogadorAtualCronometro, jogador]);

  useEffect(() => {
    if (tempoRestante === 0 && jogadorAtualCronometro === jogador) {
      clearInterval(timer);
      setTempoRestante(10);
      passarVez();
    }
  }, [tempoRestante, jogadorAtualCronometro, jogador, passarVez]);

  return (
    <div className='contador-tabuleiro'>
      <h1>{tempoRestante}</h1>
    </div>
  );
}

export default Cronometro;
