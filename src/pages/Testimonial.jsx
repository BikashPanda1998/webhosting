import React from "react";
const Testimonial=()=>{
    return(
        <div className="testimonials-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <span>Testimonials</span>
                <h2>What they say about us</h2>
              </div>
            </div>
            <div className="col-md-10 offset-md-1">
              <div className="owl-testimonials owl-carousel">
                <div className="testimonial-item">
                  <div className="icon">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <p>"Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."</p>
                  <h4>William Smith</h4>
                  <span>New Co-Founder</span>
                </div>
                <div className="testimonial-item">
                  <div className="icon">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <p>"Quisque lacinia sed velit et maximus. Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus."</p>
                  <h4>Vinny Smart</h4>
                  <span>Digital Marketer</span>
                </div>
                <div className="testimonial-item">
                  <div className="icon">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <p>"Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui. Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis."</p>
                  <h4>Trevor Liam</h4>
                  <span>Technology Chef</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Testimonial;