
import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import PicOne from '../images/'
const About = () => {
    return (
        <div>
            <div className="col-md-4">
                       <div className='card shadow'>
                         <img src={PicOne} className="w-100 border-bottom" alt="Services"/> 
                        <div className="card-body">
                          <h6>Services 1</h6>
                          <div className="underline"></div>
                          <p>
                       content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                        <Link to="/services" className="btn btn-link">read More</Link>
                        </div>
                       </div>
                      
                   </div>
        </div>
    )
}

export default About