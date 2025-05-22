import React, { useContext } from 'react'
import Lan_change from './Lang_change';


const Lan = () => {
    const value = useContext(Lan_change)
    console.log(value);
  return (
    <div>
        <h1>{value.data=='English'?'English':'മലയാള മനോരമ'}</h1>
        <button onClick={value.Changelang}>click</button>
      
    </div>
  )
}

export default Lan
