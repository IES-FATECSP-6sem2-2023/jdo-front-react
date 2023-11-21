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
import Desistencia from './componentes/modals/derrota/desistencia/desistencia.jsx';
import Desistir from './componentes/modals/desistir/desistir.jsx';
import Erro from './componentes/modals/erro/erro.jsx';
import Fila from './componentes/modals/fila/fila.jsx';
import Loading from './componentes/modals/loading/loading.jsx';
import Sucesso from './componentes/modals/sucesso/sucesso.jsx';
import Tutorial from './componentes/modals/tutorial/tutorial.jsx';
import Vitoria from './componentes/modals/vitoria/vitoria.jsx';
import Tabuleiro from './componentes/tabuleiro/Tabuleiro.jsx';
import GlobalProvider from './providers/GlobalProvider.jsx';
import useAuthConta from '/src/hooks/AuthConta';

const App = () => {
  const { signed } = useAuthConta();
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
              <Route path='/' element={signed ? <Navigate to={"/menu"}/> : <Navigate to={"/login"}/>}/>
              <Route path='/login' element={<Login />} />
              <Route path='/menu' element={<Home />} />
              <Route path='/login/esqueci-senha' element={<EsqueciSenha/>} />
              <Route path='/loja/skins' element={<LojaSkin />} />
              <Route path='/loja/moedas' element={<LojaMoeda />} />
              <Route path='/colecao' element={<Colecao />} />
              <Route path='/conta' element={<Conta />} />
              <Route path='/tabuleiro' element={<Tabuleiro />} />
              <Route path='/loading' element={<Loading />} />
              <Route path='/fila' element={<Fila />} />
              <Route path='/erro' element={<Erro />} />
              <Route path='/sucesso' element={<Sucesso />} />
              <Route path='/tutorial' element={<Tutorial />} />
              <Route path='/vitoria/:id' element={<Vitoria />} />
              <Route path='/derrota/:id' element={<Derrota />} />
              <Route path='/desistencia/:id' element={<Desistencia/>} />
              <Route path='/desistir' element={<Desistir />} />
              <Route path='/compras/moedas/:id' element={<CompraMoedas />} />
              <Route path='/compras/skins/:id' element={<CompraSkins />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  )
}

export default App
