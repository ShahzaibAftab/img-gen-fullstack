import React from "react";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ImageGeneratorPage from './image-generator-page/index';
import MainPage from './main-page/index'; 

export default function Skeleton()
{
    return (
        <>
        <title>AugAi</title>
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a>AugAi</a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}

      <BrowserRouter>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <a className="nav-link scrollto" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link   scrollto" href="/checkout.html">
              Checkout
            </a>
          </li>
          <li className="dropdown">
            <a className="nax-link scrollto" href="#services">
              <span>Products</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <Link to="/image-generator">Unique Image Generator</Link>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
          {/* <li><button type="button" class="btn btn-info btn-round" data-toggle="modal" data-target="#loginModal">
      Login
    </button> </li> */}
          <li>
            <a
              className="getstarted scrollto"
              data-toggle="modal"
              data-target="#"
              href="#"
            >
              Login/SignUp
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/image-generator" element={<ImageGeneratorPage/>} />
      </Routes>
      </BrowserRouter>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/*LOGIN MODAL*/}
  {/*<main>
    <article>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-title text-center">
                <h4>Login</h4>
              </div>
              <div className="d-flex flex-column text-center">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email1"
                      placeholder="Your email address..."
                      onfocusout="email_leave()"
                    />
                    <span id="e-mail-error" className="error-container" />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password1"
                      placeholder="Your password..."
                      onfocusout="password_leave()"
                    />
                    <span id="passwd-error" className="error-container" />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-info btn-block btn-round"
                    onclick="return validate_login_form()"
                  >
                    Login
                  </button>
                </form>
                <div className="text-center text-muted delimiter">
                  or use a social network
                </div>
                <div className="d-flex justify-content-center social-buttons">
                  <button
                    type="button"
                    className="btn btn-secondary btn-round"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-round"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Google"
                  >
                    <i className="fab fa-google" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-round"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <div className="signup-section">
                Not a member yet?{" "}
                <a href="{% url 'signup' %}" className="text-info">
                  {" "}
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>*/}
  {/*LOGIN MODAL END*/}
  {/* ======= Footer ======= */}
  {/* End Footer <div id="preloader" />*/}
  
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
  {/* jQuery */}
  {/* Popper JS */}
  {/* Bootstrap JS */}
</>

    )
};
