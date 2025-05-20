import React, { useContext } from 'react'
import Themecontext from './Themecontext'
import './style.css'

const Consume = () => {
    const value=useContext(Themecontext)
    console.log(value);
    
  return (
    <div>
        <div className={value.data==='light'?'light':'dark'} style={{width:'500px',height:"700px"}}>
      <button  onClick={value.Theme_changing}>Click me</button>
    </div>
    </div>
  )
}

export default Consume
