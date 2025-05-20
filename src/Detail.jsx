import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams()
  const [data, setData] = useState('')
  console.log(id);
  useEffect(() => {
    let fetch_data = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
      setData(response.data)
    }
    fetch_data()
  }, [])

  console.log(data);

  return (
    <div> 
      <div className='w-[300px] text-justify pl-10 pr-10 pt-10 pb-5 font-medium m-3 bg-red-400 mt-6 '>
        <img src={data.Poster}></img>
        <div className=''>
        <h1>{data.Title}</h1>
        <h1>{data.year}</h1>
        <h1>{data.Rated}</h1>
        <h1>{data.Released}</h1>
        <h1>{data.Runtime}</h1>
        <h1>{data.Actors}</h1>
        <h1>{data.Plot}</h1>
        <h1>{data.poster}</h1>
      </div>
      </div>
    </div>
  )
}

export default Detail
