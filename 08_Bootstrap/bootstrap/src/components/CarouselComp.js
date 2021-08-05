import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselComp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/chinese-3968964_640.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Chinese Lanterns</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/global_zoom_australia_desert.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Australia Desert</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/lands_end_cypress_tree_sunset_bg.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Cypress tree sunset</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
