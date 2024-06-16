import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl mx-auto p-8 text-center">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            {/* add img from assests folder  below*/}

            <img src={banner1} alt="Slide 1" />
          </div>
          <div>
            <img src={banner2} alt="Slide 2" />
          </div>
          {/* <div>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
          </div> */}
        </Carousel>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 p-8 ">
          Welcome to Swastik Creations
        </h1>
        <p className="mt-4 text-gray-600">
          Explore our latest collections of sarees and ethnic wear.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
