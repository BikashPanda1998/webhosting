import React from "react";
const Banner =()=>{
   return(
    <div className="banner">
        <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="header-text caption">
              <h2>Search your domain</h2>
              <div id="search-section">
              	<form id="suggestion_form" name="gs" method="get" action="#">
                <div className="searchText">
                <input type="text" name="q" className="searchText" placeholder="Enter your domain here..." autoComplete="on" />
                  <ul>
                    <li><label><input type="checkbox" name="ext_com" value="1" /><span>.com <em>($10/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_net" value="1" /><span>.net <em>($12/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_org" value="1" /><span>.org <em>($8/yr)</em></span></label></li>
                    <li><label><input type="checkbox" name="ext_in" value="1" /><span>.in <em>($6/yr)</em></span></label></li>
                  </ul>
                </div>
                    <input type="submit" name="results" className="main-button" value="Search Now" />
                 </form>
                        <div className="advSearch_chkbox">
                        </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
   )
    
}
export default Banner;