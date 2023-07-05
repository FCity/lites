import { useContext } from 'react'
import { GridContext } from '../App'
import Row from './Row'

export default function Grid() {
  const { rows, cols } = useContext(GridContext)

  return (
    <div className='grid'>
      {[...Array(rows).keys()].map(i => <Row key={i} cols={cols} />)}
    </div>
  )
}