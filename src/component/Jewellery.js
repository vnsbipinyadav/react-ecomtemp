import React from 'react'
import jhumkaImg from '../images/jhumka-img.png';
import neckleshImg from '../images/neklesh-img.png';
import kanganImg from "../images/kangan-img.png";

const Jewellery = () => {
  return (
      <>
          <section className="fashion_collection">
            <h2>Jewellery Accessories</h2>
            <div className="cloth_details">
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={jhumkaImg} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={neckleshImg} alt="T-Shirt"/>
                    <div className="buy_section">
                        <a href="/#"><span>Buy Now</span></a>
                        <a href="/#">See More</a>
                    </div>
                </div>
                <div className="cloth_text">
                    <h3>Man T -shirt</h3>
                    <p><span>Price</span> $30</p>
                    <img src={kanganImg} alt="T-Shirt"/>
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

export default Jewellery;