import { useContext } from 'react'
import { GridContext } from '../App'

export default function ControlPanel({ strobeSpeedNum, setStrobeSpeedNum, setStrobeSpeedStr }) {
  const { rows, setRows, cols, setCols } = useContext(GridContext)
  const speeds = ['slow', 'fast', 'none']
  
  return (
    <div className='bg-gray-700 text-white fixed top-0 right-0 w-[300px] h-full z-10 px-4'>
      <div className="mt-20">
        <p className="text-xl">Grid Dimensions:</p>

        <div className='p-2'>
          <div className='flex justify-between'>
            <span>Rows:</span>
            <input
              type='number'
              className='text-black text-right float-right w-1/2'
              min='1'
              max='20'
              value={rows}
              onChange={e => setRows(e.target.value)}
            />
          </div>
          
          <div className='flex justify-between'>
            <span>Columns:</span>
            <input
              type='number'
              className='text-black text-right float-right w-1/2'
              min='1'
              max='20'
              value={cols}
              onChange={e => setCols(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <p className='text-xl'>Strobe Speed:</p>

        <div className='p-2 flex flex-col'>
          {speeds.map(speed => (
            <button
              key={speed}
              className='bg-gray-300 hover:bg-gray-200 text-black rounded px-1 py-2 my-1'
              onClick={() => setStrobeSpeedStr(speed)}
            >
              {speed}
            </button>
          ))}
        </div>

        <div className='mt-4 text-center hover:cursor-pointer'>
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
