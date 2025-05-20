import React, { useState } from 'react';

const Forms = () => {
  const [data, setData] = useState('');

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data); 
    setData({
      name: "",
      age: "",
      place: "",
      address: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          value={data.name}
        />

        <label>Age</label>
        <input
          onChange={handleChange}
          name="age"
          type="text"
          value={data.age}
        />

        <label>Place</label>
        <input
          onChange={handleChange}
          name="place"
          type="text"
          value={data.place}
        />

        <label>Address</label>
        <input
          onChange={handleChange}
          name="address"
          type="text"
          value={data.address}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
