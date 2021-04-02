import {useState, useEffect} from "react"
import {Link, useLocation} from 'react-router-dom'
import logo from './logo.png'
import cross from './cross.png'
import bar from './bar.png'
//import { FaBars, FaTimes } from 'react-icons/fa';
import './style.css'

const NavBar = () => {
    const [open, setOpen ] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () =>{
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800){
            setOpen(true);
        }
    };
    const handleClose = () =>{
        if (screenWidth < 800){
            setOpen(false)
        }
    }

    useEffect(()=>{
        trackScreenWidth();
        window.addEventListener("resize",trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth)
    }, []);
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <Link
                    style={{color: location.pathname === "/" && "#4071f4"}} to="/">
                        <img
                         src={logo}
                         alt="brand"
                        />
                    </Link>
                </div>
                <div className="list-wrapper">
                    
                    <img
                     src={bar} 
                     alt="menu bar"
                     style={{ opacity: !open ? 1 : 0}}
                     onClick={()=>{
                         setOpen(!open);
                     }}
                    />
                    <img
                     src={cross} 
                     alt="menu cross"
                     style={{opacity: open ? 1 : 0}}
                     onClick={()=>{
                         setOpen(!open);
                     }}
                    />
                  <ul style={{ left: open ? "0" : "-100vw"}}>
                      <li>
                          <Link
                          onClick={handleClose}
                          style={{color: location.pathname === "/" && "#4071f4"}}
                          to="/">
                          Home
                          </Link>
                      </li>
                      <li>
                          <Link
                          onClick={handleClose}
                          style={{color: location.pathname === "/about" && "#4071f4"}}
                          to="/about">
                          About
                          </Link>
                      </li>
                      <li>
                          <Link
                          onClick={handleClose}
                          style={{color: location.pathname === "/skills" && "#4071f4"}}
                          to="/skills">
                          Skills
                          </Link>
                      </li>
                      <li>
                          <Link
                          onClick={handleClose}
                          style={{color: location.pathname === "/works" && "#4071f4"}}
                          to="/works">
                          Works
                          </Link>
                      </li>
                      <li>
                          <Link
                          onClick={handleClose}
                          style={{color: location.pathname === "/contact" && "#4071f4"}}
                          to="/contact">
                          Contact
                          </Link>
                      </li>
                  </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
