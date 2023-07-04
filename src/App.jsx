import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Prompt from './components/Prompt'
import LiteBrite from './components/LiteBrite'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Prompt />} />
            <Route path='lite-brite' element={<LiteBrite />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
