import { FaHome } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import React, { useState } from 'react';

const Freg = () => {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      name: '',
      email: '',
      password: '',
      pass: '',
      phone: '',
      add: '',
      dob: '',
    });
  };
  const notify = () => toast('successfully submitted');
  const fn = () => {
    toast.success("submitted")
  }
  return (
    <div>
      <div className="w-[600px] ml-3 mt-10 p-10 bg-slate-400 flex justify-center border border-gray-400 ">
        <form onSubmit={handleSubmit}>
          <label>UserName </label>
          <input className="border border-gray-300 mt-2 p-2  rounded px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus"
            onChange={handleChange}
            name="name"
            type="text"
            value={data.name}
            required
          /><br></br>
          <label htmlFor="email ">Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          &nbsp;    
          <input
            id="email"
            className="border border-gray-300 mt-2 p-2 rounded px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="email"
            type="email"
            value={data.email}
            title='please enter format'
            required
          /><br />


          <label className='text-weight:bold'>Password</label>&nbsp;&nbsp;
          <input id="password"
            className="border border-gray-300 mt-2 rounded  p-3 px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="password"
            type="password"
            value={data.password}
            required
pattern="(?=.*\d)(?=.*[a-z])"
           title='please enter in this format'
          /><br></br>


          <label>Conform Password</label>&nbsp;&nbsp;&nbsp;
          <input id="pass"
            className="border border-gray-300 mt-2 rounded p-3 px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="pass"
            type="password"
            value={data.pass} 
            required
            pattern=''
          /><br></br>

          <label>Phone number</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="phone"
            className="border border-gray-300 mt-2 rounded p-3 px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="phone"
            type="text"
            value={data.phone}
            required
          /><br></br>

          <label>Address</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="add"
            className="border border-gray-300 mt-2 rounded p-3 px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="add"
            type="text"
            value={data.add}
            required
          /><br></br>

          <label>Date of Birth</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="dob"
            className="border border-gray-300 mt-2 rounded p-3 px-1 py-1 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="dob"
            type="date"
            value={data.dob}
          /><br></br><br></br>

          <button onClick={fn} className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Submit</button>
        </form>
        <FaHome size={56} />
        <Toaster />
      </div>
    </div>
  );
};

export default Freg;
