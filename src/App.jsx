import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Colecao from './componentes/colecao/Colecao.jsx';
import Conta from './componentes/conta/Conta.jsx';
import Home from './componentes/home/Home.jsx';
import Login from './componentes/login/Login.jsx';
import EsqueciSenha from './componentes/login/esqueciSenha/EsqueciSenha.jsx';
import LojaMoeda from './componentes/loja/moedas/LojaMoeda.jsx';
import LojaSkin from './componentes/loja/skins/LojaSkin.jsx';
import CompraMoedas from './componentes/modals/compras/moedas/compraMoedas.jsx';
import CompraSkins from './componentes/modals/compras/skins/compraSkin.jsx';
import Derrota from './componentes/modals/derrota/derrota.jsx';
import Desistir from './componentes/modals/desistir/desistir.jsx';
import Erro from './componentes/modals/erro/erro.jsx';
import Fila from './componentes/modals/fila/fila.jsx';
import Loading from './componentes/modals/loading/loading.jsx';
import Sucesso from './componentes/modals/sucesso/sucesso.jsx';
import Vitoria from './componentes/modals/vitoria/vitoria.jsx';
import GlobalProvider from './providers/GlobalProvider.jsx';
import TabuleiroWithProvider from './providers/TabuleiroWithProvider.jsx';
import useAuthConta from '/src/hooks/AuthConta';

const Private = () => {
  const { signed } = useAuthConta();
  return signed > 0 ? <Navigate to={'/menu'} /> : <Navigate to={'/login'} />
}

const App = () => {

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
        <GlobalProvider>
          <Routes>
              <Route path='/' element={<Private/>} />
              <Route path='/login' element={<Login musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
              <Route path='/menu' element={<Home musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
              <Route path='/login/esqueci-senha' element={<EsqueciSenha/>} />
              <Route path='/loja/skins' element={<LojaSkin />} />
              <Route path='/loja/moedas' element={<LojaMoeda />} />
              <Route path='/colecao' element={<Colecao />} />
              <Route path='/conta' element={<Conta />} />
              <Route path='/tabuleiro' element={<TabuleiroWithProvider musicaAtiva={musicaAtiva} toggleMusica={toggleMusica} />} />
              <Route path='/loading' element={<Loading />} />
              <Route path='/fila' element={<Fila />} />
              <Route path='/erro' element={<Erro />} />
              <Route path='/sucesso' element={<Sucesso />} />
              <Route path='/vitoria' element={<Vitoria />} />
              <Route path='/derrota' element={<Derrota />} />    
              <Route path='/desistir' element={<Desistir />} />    
              <Route path='/compras/moedas' element={<CompraMoedas />} />      
              <Route path='/compras/skins' element={<CompraSkins />} />      
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
