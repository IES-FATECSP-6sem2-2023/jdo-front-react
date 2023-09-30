import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'
import Home from './home/Home.jsx'
import LojaSkin from './loja/skin/lojaSkin'
import LojaMoeda from './loja/moedas/LojaMoeda.jsx'
import Colecao from './colecao/Colecao.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/loja/skins' element={<LojaSkin />} />
          <Route path='/loja/moedas' element={<LojaMoeda />} />
          <Route path='/colecao' element={<Colecao />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
