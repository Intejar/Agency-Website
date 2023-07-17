import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./components/item";
import slider from "../../../../dummy/projectList.json";
import { Place } from "@mui/icons-material";

function ProjectSlider() {
  const [play, setPlay] = useState(false);
  return (
    <Carousel
      autoPlay={true}
      stopAutoPlayOnHover={false}
      interval={6000}
      duration={1000}
      indicators={true}
      indicatorContainerProps={{
        style: {
          color: "yellow",
          zIndex: 1,
          position: "absolute",
          right: "300px",
          rotate: "90deg",
          top: "300px",
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: "#FFC700", // 2
          fontSize: "10px",
          mb: "5px",
        },
      }}
    >
      {slider.map((item, i) => (
        <Item key={i} item={item} setPlay={setPlay} />
      ))}
    </Carousel>
  );
}

export default ProjectSlider;
