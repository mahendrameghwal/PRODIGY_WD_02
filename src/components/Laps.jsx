/* eslint-disable react/prop-types */

import { Fragment } from "react"


const Laps = ({laps}) => {
   
  return (
    <div className="laps">
    <ul className="text-container lap-container">
    
    <br />

      
      {laps && laps.map((lap, index) => (
       <Fragment key={index}>
       <li className="time-text" >{new Date(lap).toISOString().slice(11, -2)}</li>
       </Fragment>
      ))}
      
    </ul>
  </div>
  )
}

export default Laps