import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'
import EsqueciSenha from './login/esqueciSenha/EsqueciSenha.jsx'
import Home from './home/Home.jsx'
import LojaSkin from './loja/skin/lojaSkin.jsx'
import LojaMoeda from './loja/moedas/LojaMoeda.jsx'
import Colecao from './colecao/Colecao.jsx'
import Conta from './conta/Conta.jsx'
import Tabuleiro from './tabuleiro/Tabuleiro.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/esqueci-senha' element={<EsqueciSenha/>} />
          <Route path='/menu' element={<Home />} />
          <Route path='/loja/skins' element={<LojaSkin />} />
          <Route path='/loja/moedas' element={<LojaMoeda />} />
          <Route path='/colecao' element={<Colecao />} />
          <Route path='/conta' element={<Conta />} />
          <Route path='/tabuleiro' element={<Tabuleiro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
