import React from "react";
import { Link } from "react-router-dom";
const Pricing =()=>{
    return(
        <div className="pricing-section">
          <div className="background-image-pricing">
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-heading">
              <h2>Cloud Hosting Plans</h2>
              <p>Lorem ipsum dolor amet taxidermy sriracha cardigan salvia actually vice migas enamel pin sustainable carry scenester lomo hot chicken farm table actually kinfolk.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Basic Cloud 5x</h4>
              <div className="price">
                <h6>$15.50</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>500 GB Storage Space</li>
                <li><i className="fa fa-check"></i>3 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Basic Managed Panel</li>
                <li><i className="fa fa-check"></i>24/7 Fast Support</li>
                <li><i className="fa fa-check"></i>100 Premium Themes</li>
                <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
              </ul>
              <Link to='/' className="main-button">Start Plan</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Cloud VPS 10x</h4>
              <div className="price price-gradient">
                <h6>$30.00</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>1 TB Cloud Space</li>
                <li><i className="fa fa-check"></i>8 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                <li><i className="fa fa-check"></i>Unlimted Web Addons</li>
                <li><i className="fa fa-check"></i>Cancel or Upgrade Anytime</li>
              </ul>
              <Link to="/" className="gradient-button">Select Plan</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="pricing-item">
              <h4>Advanced Cloud</h4>
              <div className="price">
                <h6>$72.25</h6>
                <span>monthly</span>
              </div>
              <p>Etiam sit amet placerat lacus, sed placerat mauris. Vestibulum malesuada vehicula sapien non tempus.</p>
              <div className="dev"></div>
              <ul>
                <li><i className="fa fa-check"></i>4 TB Cloud Space</li>
                <li><i className="fa fa-check"></i>20 TB Data Transfer</li>
                <li><i className="fa fa-check"></i>Fully Managed Panel</li>
                <li><i className="fa fa-check"></i>15-minute Quick Support</li>
                <li><i className="fa fa-check"></i>Top Notch Web Apps</li>
                <li><i className="fa fa-check"></i>Advanced Scalable</li>
              </ul>
              <Link to='/' className="main-button">Take it now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
export default Pricing;