import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselOne from "../images/carousel/carousel-1.jpg";
import CarouselTwo from "../images/carousel/carousel-2.jpg";
import CarouselThree from "../images/carousel/carousel-3.jpg";

function HomeCarousel() {
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselOne}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselTwo}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselThree}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
}

export default HomeCarousel;