import React from 'react'
import footerImg from '../images/footer-logo.png';

const Footer = () => {
  return (
      <>
          <footer className="footer_details">
        <div className="footer_logo">
            <img src={footerImg}alt="Footer Logo"/>
        </div>
        <div className="subscriber_input">
            <input type="email" name="email" placeholder="Your Email"/>
            <a href="/#"><button>subscribe</button></a>
        </div>
        <hr/>
        <p>Help Line Number : +1 XXXX XXXX XXXX</p>
        <p>© 2023 All Rights Reserved. By HTML Design</p>

    </footer>
      </>
  )
}

export default Footer;