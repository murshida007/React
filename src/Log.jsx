import React from 'react'
import { Link } from 'react-router-dom'

function Log() {
    return (
        <div>
            <div className='flex gap-7 m-7 '>
            <Link to="/contact">
            
                <button className='bg-yellow-600 text-cyan-50 p-1 rounded-md'>
                    Contact
                </button></Link>
                <Link to="/about">
                <button className='bg-gray-500 text-zinc-50 p-1 rounded-md'>
                    About</button>
                </Link>
                </div>
                </div>
        
    )
}

export default Log