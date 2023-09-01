export default function ColorPicker({setColor}) {
  const colors = ['white', 'crimson', 'lightgreen', 'darkblue', 'gold', 'black']

  return (
    <div className='bg-gray-700 text-white w-[200px] h-[200px] absolute right-[-200px] z-20'>
      <p className='text-lg'>Pick a Color:</p>
      <div className='flex flex-wrap mt-4'>
        {colors.map(color => (
          <div
            key={color}
            className='w-10 h-10 m-1 rounded-full'
            title={color}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></div>
        ))}
      </div>
    </div>
  )
}
