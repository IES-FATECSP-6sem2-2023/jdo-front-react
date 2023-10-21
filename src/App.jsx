import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'
import EsqueciSenha from './login/esqueciSenha/EsqueciSenha.jsx'
import Home from './home/Home.jsx'
import LojaSkin from './loja/skin/lojaSkin.jsx'
import LojaMoeda from './loja/moedas/LojaMoeda.jsx'
import Colecao from './colecao/Colecao.jsx'
import Conta from './conta/Conta.jsx'
import Tabuleiro from './tabuleiro/tabuleiro.jsx'

function App() {
  const [musicaDeFundo, setMusicaDeFundo] = useState(new Audio('src/assets/sons/ambiente/ambiente2.wav'));
  const [musicaAtiva, setMusicaAtiva] = useState(false);

  useEffect(() => {
    toggleMusica();
  }, []);

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
