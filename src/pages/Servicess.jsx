import React from "react";
import { NavLink } from "react-router-dom";
const Servicess = () => {
  return (
    <div>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Services</h1>
              <p>
                <NavLink to="/">Home</NavLink> / <span>Our Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section services-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <span>Hosting Services</span>
                <h2>Best Services We Provide</h2>
                <p>
                  Aenean molestie, odio quis viverra ultricies, leo tellus
                  lacinia neque, sit amet maximus tortor nunc aliquet felis.
                  Duis sit amet nibh non sapien tincidunt bibendum. Curabitur
                  rutrum justo id leo ornare, suscipit lobortis augue volutpat.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-cloud"></i>
                <h4>VPS Cloud</h4>
                <p>
                  Fusce blandit commodo metus eu suscipit. Nullam ut blandit
                  neque. Aenean nec tellus ac velit elementum tempor.
                  Pellentesque nec urna ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-server"></i>
                <h4>Fast Network</h4>
                <p>
                  Sed ligula arcu, interdum eu magna eget, tristique aliquet
                  nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt
                  dolor condimentum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-database"></i>
                <h4>Reliable Platform</h4>
                <p>
                  Fusce blandit commodo metus eu suscipit. Nullam ut blandit
                  neque. Aenean nec tellus ac velit elementum tempor.
                  Pellentesque nec urna ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-save"></i>
                <h4>Managed CDN</h4>
                <p>
                  Sed ligula arcu, interdum eu magna eget, tristique aliquet
                  nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt
                  dolor condimentum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-check"></i>
                <h4>Optimal Hosting</h4>
                <p>
                  Fusce blandit commodo metus eu suscipit. Nullam ut blandit
                  neque. Aenean nec tellus ac velit elementum tempor.
                  Pellentesque nec urna ipsum.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="service-item">
                <i className="fa fa-support"></i>
                <h4>Customer Support</h4>
                <p>
                  Cras placerat mauris scelerisque, placerat enim sed, imperdiet
                  diam. Fusce blandit commodo metus eu suscipit. Nullam ut
                  blandit neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Servicess;
