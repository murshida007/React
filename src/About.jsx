import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <p>Google is a multinational technology corporation, primarily known for its search engine.<br></br>
         Founded in 1998 by Larry Page and Sergey Brin,<br></br> 
         it's now a major player in online advertising, cloud computing</p>
         <h5>All about</h5>
         <p>In the Indian car market, popular car models include SUVs like the Mahindra XUV700,<br></br>
           Mahindra Thar, and Hyundai Creta, as well as hatchbacks and sedans <br></br>
           from Maruti Suzuki and Tata Motors. Additionally,<br></br>
            electric cars like the Mahindra BE 6 and Kia EV6 are gaining traction. </p>
            <h1 className=''>Popular Car Models & Brands in India:</h1>
        <Link to="/demo">
        <button className='p-1 bg-blue-300 rounded-md>Home'>Back</button>
        </Link>

    </div>
    
  )
}

export default About