export default function ControlPanel({ setEffect, strobeSpeedNum, setStrobeSpeedNum, setStrobeSpeedStr }) {
  const effects = ['binary', 'strobe', 'none']
  const speeds = ['slow', 'fast', 'none']
  
  return (
    <div className='control-panel'>
      <div className="effect-selector">
        <p>Effect Type:</p>

        <div className="effects">
          {effects.map(effect => (
            <button
              key={effect}
              className="btn btn-effect"
              onClick={() => setEffect(effect)}
            >
              {effect}
            </button>
          ))}
        </div>
      </div>
      
      <div className="strobe-selector">
        <p>Strobe Speed:</p>

        <div className="speeds">
          {speeds.map(speed => (
            <button
              key={speed}
              className="btn btn-effect"
              onClick={() => setStrobeSpeedStr(speed)}
            >
              {speed}
            </button>
          ))}
        </div>

        <div className="speedometer">
          <input
            type="range"
            id="strobe-speed"
            min="0"
            max="10"
            value={strobeSpeedNum}
            onChange={e => setStrobeSpeedNum(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
