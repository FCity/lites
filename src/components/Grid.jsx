import { useContext } from 'react'
import { GridContext } from '../App'
import Row from './Row'

export default function Grid() {
  const { rows, cols } = useContext(GridContext)

  return (
    <div className={`grid grid-rows-${rows} grid-cols-${cols} justify-center`}>
      {[...Array(Number(rows)).keys()].map(i => <Row key={i} cols={cols} />)}
    </div>
  )
}
