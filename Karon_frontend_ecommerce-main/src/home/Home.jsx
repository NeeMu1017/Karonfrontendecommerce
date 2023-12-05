import React from "react";

import Navbar from "../componts/navbar/Navbar";
import Footer from "../componts/footer/Footer";
import Slide from "../componts/minicompont/Slide";
import { Slider } from "../componts/minicompont/MiniCompont";
import { sidewin } from "../componts/minicompont/CategoryofElement";




const Home = () => {

  
  return (
    <div>
      <Navbar />
      
      <Slider item={sidewin} />
      <Footer className="footer"/>
    </div>
  );
};

export default Home;
