import "./carousel.css";
import Carouse1 from "./Carouse1";
import { Carousel as CarouselBootstrap } from "react-bootstrap";
import { useState } from "react";
const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      {/* <Carouse1 /> */}

      <CarouselBootstrap
        activeIndex={index}
        onSelect={handleSelect}
        indicators={true}
        controls={true}
        interval={2000}
      >
        <CarouselBootstrap.Item>
          <Carouse1 />
        </CarouselBootstrap.Item>

        <CarouselBootstrap.Item>
          <Carouse1 />
        </CarouselBootstrap.Item>

        <CarouselBootstrap.Item>
          <Carouse1 />
        </CarouselBootstrap.Item>
      </CarouselBootstrap>
    </div>
  );
};

export default Carousel;
