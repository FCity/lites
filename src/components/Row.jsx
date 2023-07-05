import Cell from './Cell'

export default function Row({ cols }) {
  return (
    <div className='row'>
      {[...Array(cols).keys()].map(i => <Cell key={i} />)}
    </div>
  )
}
