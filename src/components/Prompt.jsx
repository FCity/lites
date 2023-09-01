import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GridContext } from '../App'

export default function Prompt() {
  const { rows, setRows, cols, setCols } = useContext(GridContext)

  return (
    <div className='text-center w-1/2 m-auto'>
      <h1 className='text-3xl'>Build A Grid</h1>
      
      <div className=''>
        <div className='py-[25px]'>
          <span>Rows:</span>
          <input
            type='number'
            className='text-right'
            min='1'
            max='20'
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </div>
        
        <div className='py-[25px]'>
          <span>Columns:</span>
          <input
            type='number'
            className='text-right'
            min='1'
            max='20'
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </div>

        <div className='btn btn-submit'>
          <Link to='/lite-brite' style={{ fontSize: '1.1rem', color: 'black', textDecoration: 'none' }}>Make Grid</Link>
        </div>
      </div>
    </div>
  )
}