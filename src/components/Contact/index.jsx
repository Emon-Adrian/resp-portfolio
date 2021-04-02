import React from 'react'
import "./style.css"

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me!</h1>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.76244647252!2d32.613888914083155!3d0.3032256641299162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd1168b3fd01%3A0x181320fec188487d!2sPress%20Play!5e0!3m2!1sen!2sug!4v1616999330747!5m2!1sen!2sug"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            ></iframe>

            <h4>Phone</h4>
            <p>+256705711611</p>

            <h4>Email</h4>
            <p>emonadrian20@gmail.com</p>

            <h4>Address</h4>
            <p>Namuwongo</p>
        </div>
    )
}

export default Contact
