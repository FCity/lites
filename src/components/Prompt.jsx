import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Prompt() {
  const [rows, setRows] = useState(5)
  const [cols, setCols] = useState(5)

  return (
    <div className='prompt'>
      <h3>Make Your Own Grid</h3>
      
      <div className='form'>
        <div className='input-group'>
          <span>How many rows do you want?</span>
          <input
            type='number'
            min='1'
            max='20'
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </div>
        
        <div className='input-group'>
          <span>How many columns do you want?</span>
          <input
            type='number'
            min='1'
            max='20'
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </div>

        <Link to='/lite-brite'>Make Grid</Link>
      </div>

      <h3>Choose Default Grid</h3>

      <div className="form">
        <Link to='/lite-brite'>Default</Link>
      </div>
    </div>
  )
}