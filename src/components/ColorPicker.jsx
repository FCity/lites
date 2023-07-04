export default function ColorPicker({setColor}) {
  const colors = ['white', 'crimson', 'lightgreen', 'darkblue', 'gold', 'black']

  return (
    <div className='modal'>
      <p>Pick a Color:</p>
      <div className='colors'>
        {colors.map(color => (
          <div
            key={color}
            className='color'
            title={color}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></div>
        ))}
      </div>
    </div>
  )
}
