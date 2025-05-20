import React, { useState } from 'react'
 import axios from 'axios'


const Fetch_dta = () => {
    const [data,setData]=useState([])
const fetchdata=async()=>{
    let response=await axios.get("https://dummyjson.com/products")
    setData(response.data.products)
}

console.log(data);



    
  return (
    <div className='w-100% bg-zinc-950  '>

      <button onClick={fetchdata} className='bg-gray-50 text-black p-2'>Click</button>
      
 <div className=' flex flex-wrap  m-10 gap-10'>
{data.map((item)=>(
    
    <div className="pl-8 pr-8 pt-5 pb-5 w-60 text-center bg-red-200  ">

        <img src={item.images[0]} alt={item.title}></img>
        <h1>{item.title}</h1>
        <h1>{item.id}</h1>
        </div>
   
))}</div>          
      


    </div>
  )
}

export default Fetch_dta
