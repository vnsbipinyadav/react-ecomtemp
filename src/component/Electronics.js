import React from 'react'
import laptopImg from '../images/laptop-img.png';
import mobileImg from "../images/mobile-img.png";
import computerImg from "../images/computer-img.png"

const Electronics = () => {
  return (
      <>
      <section className="fashion_collection">
            <h2>Electronic</h2>
            <div className="cloth_details">
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={laptopImg} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={mobileImg}alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={computerImg} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
            </div>
        </section>
      </>
  )
}

export default Electronics;