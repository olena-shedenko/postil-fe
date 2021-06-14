import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="" alt="pr" />
        </div>
        <div>
          <img src="../img-02.jpg" alt="pr" />
        </div>
        <div>
          <img src="../img-03.jpg" alt="pr" />
        </div>
      </Carousel>
    </div>
  );
}
