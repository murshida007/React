import React from 'react';
import Logged from './Logged';
import Notlogged from './Notlogged';



const Main = () => {
  const isLogged = true;

  return (
    <div>
      {isLogged ? <Logged/> : <Notlogged/>}
    </div>
  );
};

export default Main;

