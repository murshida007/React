import React, { useState } from 'react'
import Themecontext from './Themecontext'
import './style.css'

const Theme_provider = ({children}) => {
    const [data,setData]=useState('light')
    const Theme_changing=()=>{
        setData(data==='light' ? 'dark':'light')
    }
  return (
    <div>
      <Themecontext.Provider value={{data,Theme_changing}}>
{children}
      </Themecontext.Provider>
    </div>
  )
}

export default Theme_provider


