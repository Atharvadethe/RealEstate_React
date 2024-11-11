import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3">
              <h4 className="fw-bold">Popular Searches</h4>
              <span className="d-block mt-4">Appartment for Rent</span>
              <span className="d-block mt-2"> Appartment low to hide</span>
              <span className="d-block mt-2">Offices for Buy</span>
              <span className="d-block mt-2">Offices for Rent</span>
            </div>

            <div className="col-6 col-sm-3">
              <h4 className="fw-bold">About Us</h4>
              <span className="d-block mt-4">Our Story</span>
              <span className="d-block mt-2"> Team members</span>
              <span className="d-block mt-2">Career</span>
              <span className="d-block mt-2">Contact us</span>
            </div>

            <div className="col-6 col-sm-3 mt-4 mt-sm-0">
              <h4 className="fw-bold">Quick links</h4>
              <span className="d-block mt-4">Teams of use</span>
              <span className="d-block mt-2"> Privacy policy</span>
              <span className="d-block mt-2">Contact Support</span>
              <span className="d-block mt-2">FAQs</span>
            </div>

            <div className="col-6 col-sm-3 mt-4 mt-sm-0">
              <h4 className="fw-bold">Support</h4>
              <span className="d-block mt-4">Help Center</span>
              <span className="d-block mt-2">Loan Support</span>
              <span className="d-block mt-2">Management</span>
              <span className="d-block mt-2">Privacy Policy</span>
            </div>
          </div>
          <div className="row mt-5 mb-4 pt-4 justify-content-between">
            <div className="col-2">
              <img className="img-fluid" src="/Images/footer-logo.png" alt="" />
            </div>
            <div className="col-6 col-sm-4">
              <span>© 2024 UrbanNest. All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
