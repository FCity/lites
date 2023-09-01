import Cell from './Cell'

export default function Row({ cols }) {
  return (
    <div className=''>
      {[...Array(Number(cols)).keys()].map(i => <Cell key={i} />)}
    </div>
  )
}
