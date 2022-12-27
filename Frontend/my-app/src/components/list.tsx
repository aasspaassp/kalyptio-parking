import React from 'react';
import { Parking } from '../types';

interface Props {
  parkings: Array<Parking>
}

export default function List ({parkings}: Props) {
  return (
    <div className="App">
      <h1>
      Kalyptio Parkings
    </h1>
    <ul>
      {
        parkings.map(parking => {
          return(
            <li key={parking.id}>
              <img src={parking.images} alt={`Image for ${parking.address}`} />
              <h3>{parking.address}</h3>
              <p>{parking.description.substring(0,100)}</p>
            </li>
          )
        })
      }
    </ul>
    </div>
    
    
  )
  
}