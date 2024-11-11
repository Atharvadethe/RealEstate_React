import React from "react";
import PrimaryButton from "../../Components/PrimaryButton";

function Banner() {
  return (
    <div>
      <section id="home" style={{ paddingTop: "10rem" }}>
        <div className="container">
          <div className="row align-item-center flex-md-row-reverse">
            <div className="col-md-6 text-center">
              <img
                src="Assets/icon-10.png"
                className="img-fluid"
                alt="Banner"
              />
            </div>
            <div className="col-md-6 pt-5 my-5 my-md-0 text-center text-md-start">
              <h1>
                Search for <br />
                Homes in your Neighborhood
              </h1>
              <p className="mt-4 mx-5 mx-sm-0">
              Online Estate Agency offers a modern approach to selling your home. Market your property with Griffin Residential for a streamlined experience.
              </p>
              <div className="position-relative mt-5">
                <img className="img-fluid" src="Assets/image 524.png" alt="" />

                <div className="d-flex mt-4 ms-4 position-absolute top-0 start-0">
                  <div className="ms-5 ms-sm-4">
                    <h5>Address</h5>
                    <h6>29, Raddison Blu</h6>
                  </div>
                  <div className="mx-4">
                    <h5>Nagpur</h5>
                    <h6>near Center Point</h6>
                  </div>
                  <div className="ms-5 mt-3">
                    <PrimaryButton className="my-auto" name="Search" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-sm-5 mt-md-5">
            <div className="col">
              <img
                className="img-fluid"
                src="Assets/properties/image 527.png"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="Assets/properties/image 528.png"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="Assets/properties/image 529.png"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="Assets/properties/image 530.png"
                alt=""
              />
            </div>
            <div className="col">
              <img
                className="img-fluid"
                src="Assets/properties/image 531.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
