import { Link } from "react-router-dom"
import React from 'react'
import Emon from './image.svg';
import shape from './shape.svg'
import './style.css'


const Home = () => {
    return (
        <div className="home">
           <div className="title">
             <h1>
                 <p>Yo'</p>
                 <p>I'm Emon Adrian.</p>
                 <p>Your Software developer and Graphic Designer!</p>
             </h1>
             <Link to="/about">
                 <button>More</button>
             </Link>
           </div>
           <div className='person'>
               <img
                 src={Emon} alt="Emon Adrian" loading="lazy"
               />
           </div>
        </div>
    )
}

export default Home;
