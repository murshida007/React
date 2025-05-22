import React, { Children, useState } from 'react'
import Lan_change from './Lang_change'


const Lang_provider = ({children}) => {
    const[data,setData]=useState('English')
    const Changelang=()=>{
        setData(data==='English'?'മലയാള മനോരമ':'English')
    }
  return (
    <div>
      <Lan_change.Provider value={{data,Changelang}}>
        {children}
        </Lan_change.Provider>
    </div>
  )
}

export default Lang_provider
