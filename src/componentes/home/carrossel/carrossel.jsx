import React, { useState } from 'react';
import useAuthConta from '/src/hooks/AuthConta';

const Carrossel = () => {
  const { user } = useAuthConta();
  const [currentIndex, setCurrentIndex] = useState(0);
  const nivel = user?.jogador?.nivelatual
  const mapArenas = {
    1: "/assets/imagens/mapas/amazonia.png",
    2: "/assets/imagens/mapas/caatinga.png",
    3: "/assets/imagens/mapas/mata-atlantica.png",
    4: "/assets/imagens/mapas/pantanal.png",
    5: "/assets/imagens/mapas/caatinga-bloqueado.png",
    6: "/assets/imagens/mapas/mata-atlantica-bloqueado.png",
    7: "/assets/imagens/mapas/pantanal-bloqueado.png",
  };

  const generateCarouselImages = (nivel) => {
    if (nivel === 1) {
      return [mapArenas[1], mapArenas[5], mapArenas[6], mapArenas[7]];
    } else if (nivel === 2) {
      return [mapArenas[2], mapArenas[6], mapArenas[7], mapArenas[1]];
    } else if (nivel === 3) {
      return [mapArenas[3], mapArenas[7], mapArenas[1], mapArenas[2]];
    } else {
      return [mapArenas[4], mapArenas[1], mapArenas[2], mapArenas[3]];
    }
  };

  const imgsCarrossel = generateCarouselImages(nivel);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgsCarrossel.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + imgsCarrossel.length) % imgsCarrossel.length
    );
  };

  return (
    <div className="arenas-carrossel-container">
      <div className="seta esquerda" onClick={prevSlide}>
        <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imagens/vetores/seta-esquerda.png`} alt="Seta esquerda" />
      </div>
      <div className="carrossel">
        <div className="mapa arena-opcao">
          <img
            src={`${import.meta.env.VITE_PUBLIC_URL}${imgsCarrossel[currentIndex]}`}
            alt={`Imagem ${currentIndex + 1}`}
            className="mapa-imagem"
          />
        </div>
      </div>
      <div className="seta direita" onClick={nextSlide}>
        <img src={`${import.meta.env.VITE_PUBLIC_URL}/assets/imagens/vetores/seta-direita.png`} alt="Seta direita" />
      </div>
    </div>
  );
};

export default Carrossel;
