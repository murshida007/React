import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <p>Google is a multinational technology corporation, primarily known for its search engine.<br></br>
         Founded in 1998 by Larry Page and Sergey Brin,<br></br> 
         it's now a major player in online advertising, cloud computing</p>
        <Link to="/demo">
        <button className='p-1 bg-blue-300 rounded-md>Home'>Back</button>
        </Link>

    </div>
    
  )
}

export default About