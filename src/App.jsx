import { createContext, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Prompt from './components/Prompt'
import LiteBrite from './components/LiteBrite'
import './App.css'

export const GridContext = createContext()

function App() {
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(5)

  const gridDimensions = useMemo(() => ({
    rows, setRows, cols, setCols
  }), [rows, cols])

  return (
    <GridContext.Provider value={gridDimensions}>
      <BrowserRouter>
        <Routes>
          <Route path='lites' element={<Layout />}>
            <Route path='/lites' element={<Prompt />} />
            <Route path='/lites/lite-brite' element={<LiteBrite />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GridContext.Provider>
  )
}

export default App
