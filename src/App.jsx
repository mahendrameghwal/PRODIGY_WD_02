import  { useState, useEffect } from 'react';
import Laps from './components/Laps';

function App() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [laps, setLaps] = useState([]);


  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <div className="main">

   <div className='laps-count'>
   {
    laps.length >0 && <p>Total laps {laps.length}</p>
   }
   </div>
<p className="trns-text">STOPWATCH</p>
     <div className='text-container'>
     <div className="time-text">{new Date(time).toISOString().slice(11, -2)}</div>
     </div>
      <div className="controls">
     <div className='btn-container'>
     {!isActive && !isPaused ? (
      <button className='btn' onClick={handleStart}>Start</button>
    ) : isPaused ? (
      <button className='btn' onClick={handlePauseResume}>Resume</button>
    ) : (
      <button className='btn' onClick={handlePauseResume}>Pause</button>
    )}
    <button className='btn' onClick={handleReset}>Reset</button>
    {isActive && !isPaused && <button className='btn' onClick={handleLap}>Lap</button>}
     
     </div>
      </div>
      <Laps laps={laps}/>
    </div>
  );
}

export default App;