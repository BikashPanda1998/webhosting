import React from "react";
const Teams=()=>{
    return(
        <div className="team-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="section-heading">
              <span>Our Team</span>
              <h2>Meet the greatest people</h2>
              <p>Integer blandit, tellus varius vulputate cursus, purus orci tincidunt tortor, eget tincidunt elit justo non leo. Donec mollis nulla id est suscipit, ut laoreet nibh faucibus.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src="Hasset/assets/images/team-01.jpg" alt=""/>
              <div className="down-content">
                <h4>Jonathan Smart</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src="Hasset/assets/images/team-02.jpg" alt="" />
              <div className="down-content">
                <h4>Mary Morris</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="team-item">
              <img src="Hasset/assets/images/team-03.jpg" alt="" />
              <div className="down-content">
                <h4>George White</h4>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Teams