import { useState, useReducer, createContext } from 'react'
import Grid from './Grid'
import ControlPanel from './ControlPanel'

export const EffectContext = createContext()

export default function LiteBrite() {
  const [show, toggle] = useReducer(state => !state, false)

  const [strobeSpeedStr, setStrobeSpeedStr] = useState('none')
  const [strobeSpeedNum, setStrobeSpeedNum] = useState(0)

  return (
    <div className='container'>
      

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
