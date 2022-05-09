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
               src="https://images.ctfassets.net/66mrrren2unf/4usS7VI6DjrDrBwNpl5ngu/580d570b03cf60849ec9682467b3fce4/Desktop.jpg?q=40"
               alt=""
               
            />
         </div>
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/2nFAFSa68RorsrU94U5pO9/90708e3f5bd6f312d9911b63e4977a3e/desktop-body-wash.jpg?q=40"
               alt=""
               
            />
         </div>
         <div>
            <img
               src="https://images.ctfassets.net/66mrrren2unf/5dElTf4nIm0q7zDEmWgU4j/bcd1ab0f30ea5fef52e00b2436658dcb/Desktop_Henna-Paste-with-CTA.jpg?q=40"
               alt=""
               
            />
         </div>
      </Carousel>
   );
};

export default Carousel;