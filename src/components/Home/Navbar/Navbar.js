import React from "react";

import logo from '../../../images/logos/logo.png'

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand d-none d-lg-block" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Our Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Our Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <button class="login_btn_style d-none d-lg-block" type="submit">Search</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
