import { useState, useContext, useReducer } from 'react'
import { EffectContext } from './LiteBrite'
import ColorPicker from './ColorPicker'

export default function Cell() {
  const [show, toggle] = useReducer(state => !state, false)
  
  const [color, setColor] = useState('#000')

  const { strobeSpeedNum, strobeSpeedStr } = useContext(EffectContext)

  const lightStyle = {
    backgroundColor: color,
    boxShadow: `0 0 5px ${color}`,
    boxShadow: `0 0 10px ${color}`,
    boxShadow: `0 0 15px ${color}`
  }

  const strobeAnimation1 = strobeSpeedStr != 'none' ? {
    animation: `strobe ${strobeSpeedStr == 'slow' ? '5s' : '2s'} ease-in-out 0s infinite`
  } : {}

  const strobeAnimation2 = strobeSpeedNum != 0 ? {
    animation: `strobe ${10.5 - strobeSpeedNum}s ease-in-out 0s infinite`
  }: {}

  return (
    <div
      className='relative border-green-300 border-2 w-20 h-20 flex justify-center'
      onClick={toggle}
    >
      <div
        className='w-3/4 h-3/4 rounded-full self-center cursor-pointer'
        style={{...lightStyle, ...strobeAnimation1, ...strobeAnimation2}}
      ></div>
      {show && <ColorPicker setColor={setColor} />}
    </div>
  )
}
