import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './login/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="Login" />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
