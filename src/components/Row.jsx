import Cell from './Cell'

export default function Row() {
  return (
    <div className='row'>
      {[0,1,2,3,4].map(i => <Cell key={i} />)}
    </div>
  )
}
