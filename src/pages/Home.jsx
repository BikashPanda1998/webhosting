import React from "react";
import Banner from "./Banner";
import Feature from "./Feature";
import Pricing from "./Pricing";
import Service from "./Service";
import Trusted from "./Trusted";
const Home=()=>{
    return(
        <div>
    <Banner/>
    <Trusted/>
    <Service/>
    <Pricing/>
    <Feature/>
        </div>
    )
}
export default Home