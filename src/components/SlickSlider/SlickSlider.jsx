import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src="../img-01.jpg" alt="pr" />
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
