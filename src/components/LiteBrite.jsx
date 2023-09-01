import { useState, useReducer, createContext } from 'react'
import Grid from './Grid'
import ControlPanel from './ControlPanel'

export const EffectContext = createContext()

export default function LiteBrite() {
  const [show, toggle] = useReducer(state => !state, true)

  const [strobeSpeedStr, setStrobeSpeedStr] = useState('none')
  const [strobeSpeedNum, setStrobeSpeedNum] = useState(0)

  return (
    <div className='relative'>
      <button
        className='bg-gray-300 hover:bg-gray-200 rounded px-2 py-1 fixed top-4 right-4 z-20'
        onClick={toggle}
      >
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
