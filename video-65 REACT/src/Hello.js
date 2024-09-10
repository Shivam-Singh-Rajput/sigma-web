
import React from 'react'

function Hello (props){
  const eadge = props.eadge;
  const city = props.city;
  const state = props.state;

  return (
    <div>
      <ul className='shiv'>
        <li>{eadge}</li>
        <li>{city}</li>
        <li>{state}</li>
      </ul>
    </div>
  )
}

export default Hello
