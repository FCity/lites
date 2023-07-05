import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GridContext } from '../App'

export default function Prompt() {
  const { rows, setRows, cols, setCols } = useContext(GridContext)

  return (
    <div className='prompt'>
      <h3>Make Your Own Grid</h3>
      
      <div className='form'>
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
          <span>Columns</span>
          <input
            type='number'
            min='1'
            max='20'
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </div>

        <div className='btn-submit'>
          <Link to='/lite-brite'>Make Grid</Link>
        </div>
      </div>
    </div>
  )
}