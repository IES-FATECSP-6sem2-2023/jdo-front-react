import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'
import Home from './home/Home.jsx'
import LojaSkin from './lojaSkin/lojaSkin.jsx'
import LojaMoedas from './lojaMoedas/lojaMoeda.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
