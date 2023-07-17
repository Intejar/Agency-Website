import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./components/item";
import slider from "../dummy/carouselItem.json";

function Slider() {
  return (
    <Carousel
      indicators={true}
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-40px",
          position: "relative",
        },
      }}
    >
      {slider.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Slider;
