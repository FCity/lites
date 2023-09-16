import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GridContext } from '../App'

export default function Prompt() {
  const { rows, setRows, cols, setCols } = useContext(GridContext)

  const linkStyle = {
    backgroundColor: 'lightgreen',
    borderRadius: '5px',
    fontSize: '1.1rem',
    color: 'black',
    textDecoration: 'none',
    padding: '.5em 1em',
    cursor: 'pointer'
  }

  return (
    <div className='flex flex-col text-center mt-[150px]'>
      <h1 className='border-b-2 border-green-300 text-3xl w-1/7 m-auto py-4'>Build a Grid</h1>
      
      <div className='py-4'>
        <div className='py-[25px]'>
          <span className='text-lg mr-4'>Rows:</span>
          <input
            type='number'
            className='text-black text-lg text-center w-[100px] p-2 rounded'
            min='1'
            max='20'
            value={rows}
            onChange={e => setRows(e.target.value)}
          />
        </div>
        
        <div className='py-[25px]'>
          <span className='text-lg mr-4'>Cols:</span>
          <input
            type='number'
            className='text-black text-lg text-center w-[100px] p-2 rounded'
            min='1'
            max='20'
            value={cols}
            onChange={e => setCols(e.target.value)}
          />
        </div>

        <div className='mt-10'>
          <Link to='/lites/lite-brite' style={linkStyle}>Let's Play</Link>
        </div>
      </div>
    </div>
  )
}