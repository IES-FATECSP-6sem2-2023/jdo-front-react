import React, { useState } from 'react';

const Carrossel = ({ nivel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mapArenas = {
    1: "src/assets/imagens/mapas/amazonia.png",
    2: "src/assets/imagens/mapas/caatinga.png",
    3: "src/assets/imagens/mapas/mata-atlantica.png",
    4: "src/assets/imagens/mapas/pantanal.png",
    5: "src/assets/imagens/mapas/caatinga-bloqueado.png",
    6: "src/assets/imagens/mapas/mata-atlantica-bloqueado.png",
    7: "src/assets/imagens/mapas/pantanal-bloqueado.png",
  };

  const generateCarouselImages = (nivel) => {
        if (nivel === 1) {
            return [mapArenas[1], mapArenas[5], mapArenas[6], mapArenas[7]];
        } 
        else if (nivel === 2) {
            return [mapArenas[2], mapArenas[6], mapArenas[7], mapArenas[1]];
        } 
        else if (nivel === 3) {
            return [mapArenas[3], mapArenas[7], mapArenas[1], mapArenas[2]];
        } 
        else {
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
        <div className="seta" onClick={prevSlide}>
            <img src="src/assets/imagens/vetores/seta-esquerda.png" alt="Seta esquerda" />
        </div>
        <div className="carrossel">
            <div className="mapa arena-opcao" style={{ transform: `translateX(${-currentIndex * 30}vw)` }}>
                {imgsCarrossel.map((img, index) => (
                  <img key={index} src={img} alt={`Imagem ${index}`} />
                ))}
            </div>
        </div>
        <div className="seta" onClick={nextSlide}>
            <img src="src/assets/imagens/vetores/seta-direita.png" alt="Seta direita" />
        </div>
    </div>
  );
};

export default Carrossel;
