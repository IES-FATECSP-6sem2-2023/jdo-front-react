import { useState } from 'react'
import Home from './Home/home.jsx'
//import LojaSkin from './LojaSkin/lojaSkin.jsx'
//import LojaMoedas from './LojaMoedas/lojaMoeda.jsx'
//import Colecao from './Colecao/colecao.jsx'
// import Conta from './Conta/conta.jsx'
// import Tabuleiro from './Tabuleiro/tabuleiro.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
    //<LojaSkin/>
    //<LojaMoedas/>
    //<Colecao/>
    //<Conta/>
    // <Tabuleiro/>
  )
}

export default App
