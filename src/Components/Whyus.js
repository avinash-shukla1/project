import React from "react";
import Whypage from "./Whypage";
import Whyswiper from "./Whyswiper";
import Aboutepage from "./Aboutepage";
import Contactpage from "./Contactpage";
import Footer from "./Footer";
import Whycontact from "./Whycontact";
import Whycontant from "./Whycontant";

const Whyus = () => {
  return (
    <div>
      <Whypage />

      <Whyswiper />
      <Aboutepage />
       
      {/* <Abouteservis/> */}
      < Whycontact/>
       <Contactpage/>
       
       <Footer/>
      
    </div>
  );
};

export default Whyus;
