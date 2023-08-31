import { useContext } from 'react'
import { GridContext } from '../App'

export default function ControlPanel({ strobeSpeedNum, setStrobeSpeedNum, setStrobeSpeedStr }) {
  const { rows, setRows, cols, setCols } = useContext(GridContext)
  const speeds = ['slow', 'fast', 'none']
  
  return (
    <div className='control-panel'>
      <div className="grid-selector">
        <p className="control-panel-title">Grid Dimensions:</p>

        <div className='grid-selector'>
          <div className='input-group'>
            <span>Rows:</span>
            <input
              type='number'
              min='1'
              max='20'
              value={rows}
              onChange={e => setRows(e.target.value)}
            />
          </div>
          
          <div className='input-group'>
            <span>Columns:</span>
            <input
              type='number'
              min='1'
              max='20'
              value={cols}
              onChange={e => setCols(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='strobe-selector'>
        <p className='control-panel-title'>Strobe Speed:</p>

        <div className='speeds'>
          {speeds.map(speed => (
            <button
              key={speed}
              className='btn btn-effect'
              onClick={() => setStrobeSpeedStr(speed)}
            >
              {speed}
            </button>
          ))}
        </div>

        <div className='speedometer'>
          <input
            type='range'
            id='strobe-speed'
            min='0'
            max='10'
            value={strobeSpeedNum}
            onChange={e => setStrobeSpeedNum(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
