import React from 'react'
import tShirt from "../images/tshirt-img.png";
import dressShirt from '../images/dress-shirt-img.png';
import womenDress from "../images/women-clothes-img.png";


const Mens = () => {
    return (
      <>
        <section className="fashion_collection">
            <h2>Man & Woman Fashion</h2>
            <div className="cloth_details">
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={tShirt} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
              <img src={dressShirt} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={womenDress} alt="T-Shirt"/>
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

export default Mens