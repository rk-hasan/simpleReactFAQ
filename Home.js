import React, { useState } from 'react';
import Data from '../Data.json'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';


const Home = () => {
  return (
    <div>
        {Data.map((data)=>(<Todo todoData={data} key={uuidv4()}/>))}
    </div>
  )
}

export default Home
