import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'
import Home from './home/Home.jsx'
import LojaSkin from './LojaSkin/LojaSkin.jsx'
import LojaMoeda from './LojaMoedas/LojaMoeda.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/loja/skins' element={<LojaSkin />} />
          <Route path='/loja/moedas' element={<LojaMoeda />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
