import React from 'react'
import { FaTwitter, FaInstagram, FaGithub  } from 'react-icons/fa';
import './style.css'
import { icons } from 'react-icons/lib';

const Footer = () => {
    return (
        <footer>
            <a 
            href="https://twitter.com/emonadrian1?s=08"
            target="_blank">
            <h3> <FaTwitter size='2rem'/> </h3>
            </a>
            <a 
            href="https://www.instagram.com/emon_adriane"
            target="_blank">
            <h3> <FaInstagram size='2rem'/> </h3>
            </a>
            <a 
            href="https://github.com/Emon-Adrian"
            target="_blank">
            <h3> <FaGithub size='2rem'/> </h3>
            </a>
        </footer>
    )
}

export default Footer;
