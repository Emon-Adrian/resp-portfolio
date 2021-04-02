import { Link } from "react-router-dom"
import React from 'react'
import Emon from './image.svg';
import './style.css'


const Home = () => {
    return (
        <div className="home">
           <div className="title">
             <h1>
                 <p>Hi,</p>
                 <p>I am Emon Adrian</p>
                 <p>Software developer</p>
             </h1>
             <Link to="/about">
                 <button>More</button>
             </Link>
           </div>
           <div className='person'>
               <img
                 src={Emon} alt="Emon Adrian" 
               />
           </div>
        </div>
    )
}

export default Home;
