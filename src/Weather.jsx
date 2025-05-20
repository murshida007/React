import axios from 'axios'
import React, { useState } from 'react'

const Weather = () => {
    const [data,setData]=useState([])
    const fetchdata=async()=>{
        let response=await axios.get("https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3")
    setData(response.data)
    }
        console.log(data);
  return (
    <div>
      <button>click</button>
    </div>
  )
}

export default Weather
