import axios from 'axios'
import React, { useState } from 'react'
import image from './Weatherjpj.jpg'

const Weatherapp = () => {
  const [data, setData] = useState('')
  const [search, setsearch] = useState('')
  const handleChange = (event) => {
    setsearch(event.target.value)
  }

  const fetch_data = async (event) => {
    event.preventDefault()
    try {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
      setData(response.data)
    }
    catch (error) {
      console.log(error.message);

    }
  };
  console.log(data);



  return (
    <div>
      <div className='bg-cover h-screen' style={{ backgroundImage: `url(${image})` }}>
        <form className=' text-center pt-52' onSubmit={fetch_data}>

          <input type='text' className='border-r-4 p-2 m-3' onChange={handleChange}
            name='search'
            placeholder='Enter city name'
            value={search}></input>


          <button type='submit' className='p-2 border-r-0  bg-blue-900 text-white'>Search</button>

          <h2>{data.name}</h2>
          <h3>{data.timezone}</h3>
          <h3>{data.visibility} </h3>
          
          <div className='center'>
            {data && (

              <div>
                {data.weather.map((item) => (
                  <h3>{item.description},{item.wind}</h3>

                ))}
              </div>
              
            )}
          </div>
          
          
        </form>
      </div>
    </div>
  )
}

export default Weatherapp
