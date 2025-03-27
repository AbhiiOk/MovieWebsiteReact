// import React, { useContext } from 'react'
// import { AppContext} from './Context'
// import {useGlobalContext} from './Context';
import Movies from './Movies';
import Search from './Search';
const Home = () => {
    //making consumer
    // const name = useContext(AppContext);
   
  return (
    <div>
      <Search/>
      <Movies/>
    </div>
  )
}

export default Home
