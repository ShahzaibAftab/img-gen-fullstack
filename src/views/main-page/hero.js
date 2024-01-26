import React from "react";
import img from '../../assets/img/hero-img.png'

export default function HeroSection() {

    return (
        <>


        <h1>Hero section loaded</h1>
        <section id="hero" className="d-flex align-items-center" style={{ backgroundColor: 'red', padding:2+'rem' }}>
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"

        >
          <h1>Best AI Solutions for your business</h1>
          <h2>We got cool AI products for your business needs!</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"

        >
          <img
            src={img}
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
   </div> 
</section>
  {/* End Hero */}
  

        {/* ======= Hero Section ======= */}
         </>
    );
}
