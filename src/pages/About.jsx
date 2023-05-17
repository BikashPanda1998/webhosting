import React from "react";
import { Link } from "react-router-dom";
import Teams from "./Teams";
const About=()=>{
return(
  
     <div>
        <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>About</h1>
                            <p><Link to="/">Home</Link> / <span>About Us</span></p>
                        </div>
                    </div>
                </div>
            </div>
   
   
   <div className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="left-image">
              <img src="Hasset/assets/images/our-team.jpg" alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <div className="section-heading">
                <span>About Us</span>
                <h2>Background of our company</h2>
                <p>Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat. Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh.</p>
              </div>
              <div id='tabs'>
                  <ul>
                    <li><Link to="/">Our History</Link></li>
                    <li><Link to="/">Our Cloud</Link></li>
                    <li><Link to="/">Our Network</Link></li>
                  </ul>
                  <section className='tabs-content'>
                    <article id='tabs-1'>
                      <p>Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus. Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.
                      <br/><br/>Phasellus finibus lacus eu scelerisque rutrum. Duis purus eros, blandit ultricies iaculis in, commodo quis lacus. Pellentesque interdum varius enim nec accumsan.</p>
                    </article>
                    <article id='tabs-2'>
                      <p>Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat.
                      <br/><br/>Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales justo vitae ex pharetra, vitae tincidunt dolor condimentum. Cras vel mattis risus.</p>
                    </article>
                    <article id='tabs-3'>
                      <p>Fusce in semper velit, at tempus augue. Morbi quis auctor ipsum, ut accumsan neque. Vivamus dapibus ipsum placerat ante commodo, eget suscipit tortor hendrerit. Quisque lacinia sed velit et maximus.
                      <br/><br/>Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus. Vestibulum et lorem non erat efficitur iaculis ut nec nibh. Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui.</p>
                    </article>
                  </section>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Teams/>
    </div>
);
}
export default About