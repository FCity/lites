import { createContext, useState, useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Prompt from './components/Prompt'
import LiteBrite from './components/LiteBrite'
import './App.css'

export const GridContext = createContext()

function App() {
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(5)

  const gridDimensions = useReducer(() => ({
    rows, setRows, cols, setCols
  }), [rows, cols])

  return (
    <GridContext value={gridDimensions}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Prompt />} />
            <Route path='lite-brite' element={<LiteBrite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GridContext>
  )
}

export default App
