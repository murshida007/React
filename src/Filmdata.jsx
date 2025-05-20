import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Filmdata = () => {
  const [data, setData] = useState([])             // To store movie results
  const [search, setSearch] = useState('')         // To store the search input
  const [error, setError] = useState(null)        // To store any API error messages

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const fetch_data = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`)

      if (response.data.Response === "True") {
        setData(response.data.Search)
        setError(null) 
      } else {
        setData([])
        setError(response.data.Error) 
      }
    } catch (error) {
      console.error(error.message)
      setError('An error occurred while fetching data.')
      setData([])
    }
  }

  return (
    <div className='p-4'>
      <form onSubmit={fetch_data} className='mb-4'>
        <input
          type='text'
          value={search}
          onChange={handleChange}
          placeholder='Search for a movie...'
          className='border p-2 mr-2'
        />
        <button type='submit' className='p-2 bg-slate-700 text-white'>Search</button>
      </form>

      {error && <p className='text-red-600'>{error}</p>}

      <div className='grid grid-cols-2 gap-4'>
        {data.map((item) => (
          <div key={item.imdbID} className='border p-2'>
            <h2 className='text-lg font-bold'>{item.Title}</h2>
            <Link to={`/detail/${item.imdbID}`}>
              <img src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/150"} alt={item.Title} className='w-full h-auto' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filmdata
