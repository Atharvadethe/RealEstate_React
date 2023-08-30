import React from "react";
import "./Navbar.css";
import PrimaryButton from "../../Components/PrimaryButton";
import SecondaryButton from "../../Components/SecondaryButton";

function Navbar() {
  return (
    <>
      <header className="header_wrapper">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <a className="navbar-brand">
              <img src="/Assets/logo.png" className="img-fluid" alt="logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <i className="fa-solid fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav menu-navbar-nav">
                <li className="nav-item my-3">
                  <a className="nav-link" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="#about">
                    About us
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item my-3">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item my-4">
                  <SecondaryButton name="Sign In" />
                </li>
                <li className="nav-item mx-0 my-4">
                  <PrimaryButton name="Sign Up" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
