import Cell from './Cell'

export default function Row({ cols }) {
  return (
    <div>
      {[...Array(Number(cols)).keys()].map(i => <Cell key={i} />)}
    </div>
  )
}
