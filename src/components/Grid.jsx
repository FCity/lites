import Row from './Row'

export default function Grid() {
  return (
    <div className='grid'>
      {[0,1,2,3,4].map(i => <Row key={i} />)}
    </div>
  )
}
