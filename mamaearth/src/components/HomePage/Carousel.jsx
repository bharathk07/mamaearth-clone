import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Slider = () => {
   return (
      <Carousel className="carousel"
         autoPlay="true"
         infiniteLoop="true"
         interval="4000"
         showThumbs=""
      >
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/5p5pVTewrOIcFmKeO0vbEP/d886f4c2e472aee62bc560a49fcca57d/Website_Banner.jpg?q=40"
               alt=""
               
            />
         </div>
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/1LH7b5JOWtuTiarFdJ2QNA/07434c4bf1d6e104ada7e8c7f13f57d3/desktop-bathing-.jpg?q=40"
               alt=""
               
            />
         </div>
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/jvnVpA7ItjHuqkoeGFOi9/dadcba07e6722d1a73b72d3068644e25/Desktop.jpg?q=40"
               alt=""
               
            />
         </div>
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/OoKYuxKNlL96p4n6uytiG/02aecfff5b2170bf9fab1c1be850e17c/Desktop_Without_CTA.jpg?q=40"
               alt=""
               
            />
         </div>
      </Carousel>
   );
};

export default Carousel;