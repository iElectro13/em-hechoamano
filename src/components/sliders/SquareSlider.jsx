import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/1.jpeg";
import Image2 from "../../assets/2.jpeg";
import Image3 from "../../assets/3.jpeg";

const SquareSlider = () => {
    return (
        <div className='max-w-lg aspect-square lg:row-span-2 lg:col-start-2 lg:row-start-1'>
            <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                dynamicHeight={true}
            >
                <div>
                    <img src={Image1} alt="1" />
                </div>
                <div>
                    <img src={Image2} alt="2" />
                </div>
                <div>
                    <img src={Image3} alt="3" />
                </div>
            </Carousel>
        </div>
    );
};

export default SquareSlider;
