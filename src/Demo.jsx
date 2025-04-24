import React from 'react'
import  image from './lose-up-photo.jpg'
import image1 from './pexels.jpg'
import image2 from './pexels-cesarperez209.jpg'
const Demo = () => {
  return (
    <div className='flex gap-8 justify-center m-7 ' >
      <div className='w-64 border border-gray-200 h-66 p-2'>
<img className='h-40' src={image}></img>
<h2>Card Title 1</h2>
<p>This is a discription for card 1</p>
<button className='p-1 bg-blue-300 rounded-md'>Read More</button>
      </div>
      <div className='w-64 border border-gray-200 h-66 p-2 '>
      <img className='h-40' src={image1}></img>
<h2>Card Title 1</h2>
<p>This is a discription for card 1</p>
<button className='p-1 bg-blue-300 rounded-md'>Read More</button>
      </div>
      <div className='w-64 border border-gray-200 h-66 p-2'>
      <img className='h-40' src={image2}></img>
<h2>Card Title 1</h2>
<p>This is a discription for card 1</p>
<button className='p-1 bg-blue-300 rounded-md'>Read More</button>
      
    </div>
    </div>
  )
}

export default Demo
