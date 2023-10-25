import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Colecao from './componentes/colecao/Colecao.jsx';
import Conta from './componentes/conta/Conta.jsx';
import Home from './componentes/home/Home.jsx';
import Login from './componentes/login/Login.jsx';
import EsqueciSenha from './componentes/login/esqueciSenha/EsqueciSenha.jsx';
import LojaMoeda from './componentes/loja/moedas/LojaMoeda.jsx';
import LojaSkin from './componentes/loja/skin/LojaSkin.jsx';
import Tabuleiro from './componentes/tabuleiro/Tabuleiro.jsx';

function App() {

  const [musicaDeFundo, setMusicaDeFundo] = useState(new Audio('src/assets/sons/ambiente/ambiente2.wav'));
  const [musicaAtiva, setMusicaAtiva] = useState(false);

  const toggleMusica = () => {
    
    if (musicaAtiva) {
      musicaDeFundo.pause();
    } else {
      musicaDeFundo.loop = true;
      musicaDeFundo.volume = 0.2;
      musicaDeFundo.play();
    }
    setMusicaAtiva(!musicaAtiva);
  }

  useEffect(() => {
    toggleMusica();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
          <Route path='/login/esqueci-senha' element={<EsqueciSenha/>} />
          <Route path='/menu' element={<Home musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
          <Route path='/loja/skins' element={<LojaSkin />} />
          <Route path='/loja/moedas' element={<LojaMoeda />} />
          <Route path='/colecao' element={<Colecao />} />
          <Route path='/conta' element={<Conta />} />
          <Route path='/tabuleiro' element={<Tabuleiro musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
