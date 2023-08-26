import React from 'react'
import headerImage from '../images/banner-bg.png';
import logo from '../images/logo.png'

const Header = () => {
    return (
      <>
    <header className="background_banner">
        <img src={headerImage} alt="bakgound banner" width="100%" height="auto"/>
        <div className="container">
            <div className="logo">
                <a href="/index.html"><img src={logo} alt="Logo"/></a>
            </div>
            <nav className="menu">
                <ul>
                    <li className="link"><a href="/#">Home</a></li>
                </ul>
                <ul>
                    <li className="link"><a href="/#">Best Sellers</a></li>
                </ul>
                <ul>
                    <li className="link"><a href="/#">Gift Ideas</a></li>
                </ul>

            </nav>
        </div>

        {/* <!-- headert text --> */}
        <div className="banner_text">
            <h1>Get Start Your Favourite Shopping</h1>
            <button>Buy Now</button>
        </div>
    </header>
    </>
  )
}

export default Header;