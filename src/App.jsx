import { useState, useReducer, createContext } from 'react'
import Grid from './components/Grid'
import ControlPanel from './components/ControlPanel'
import './App.css'

export const EffectContext = createContext()

function App() {
  const [show, toggle] = useReducer(state => !state, false)

  const [effect, setEffect] = useState('none')
  const [strobeSpeedStr, setStrobeSpeedStr] = useState('none')
  const [strobeSpeedNum, setStrobeSpeedNum] = useState(0)

  return (
    <div className="container">
      <button className='btn btn-sidebar' onClick={toggle}>
        Controls
      </button>

      <EffectContext.Provider value={{strobeSpeedNum, strobeSpeedStr}}>
        <Grid />
      </EffectContext.Provider>

      {show &&
        <ControlPanel
          strobeSpeedNum={strobeSpeedNum}
          setStrobeSpeedNum={setStrobeSpeedNum}
          setStrobeSpeedStr={setStrobeSpeedStr}
        />
      }
    </div>
  )
}

export default App
