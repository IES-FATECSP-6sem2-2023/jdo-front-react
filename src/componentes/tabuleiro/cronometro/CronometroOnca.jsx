// CronometroOnca.jsx
import React, { useEffect, useState } from 'react';
import useTabuleiro from '/src/hooks/TabuleiroHook';

const CronometroOnca = ({ativo}) => {
  const [tempoRestante, setTempoRestante] = useState(10);
  const { passarVez } = useTabuleiro();

    useEffect(() => {
        if (ativo) {
            const interval = setInterval(() => {
            setTempoRestante((prevTempo) => (prevTempo > 0 ? prevTempo - 1 : prevTempo));
            }, 1000);

            return () => clearInterval(interval);
        }
        setTempoRestante(10)
    }, [ativo]);

    useEffect(()=>{
        if (tempoRestante===0){
            setTempoRestante(10)
            passarVez()
        }
    },[tempoRestante])

    return (
        <div className='contador-tabuleiro'>
            <h1>{tempoRestante}</h1>
        </div>
    );
};

export default CronometroOnca;
