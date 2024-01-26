import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import '../assets/css/style.css';
import '../assets/css/login.css';


export default function Footer()
{
    return (
        <>
         <footer id="footer">
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>AugAI</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">credits</div>
    </div>
  </footer>
 
        </>
    )
}