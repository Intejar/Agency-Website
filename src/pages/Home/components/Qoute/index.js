import React from "react";
import Carousel from "react-material-ui-carousel";
import slider from "../../../../dummy/Qoute.json";
import Item from "./component/item";
import { bgcolor } from "@mui/system";

const Qoute = () => {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
        },
      }}
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-40px",
          position: "relative",
        },
      }}
      sx={{
        margin: "0 0  10%  0",
      }}
    >
      {slider.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

export default Qoute;
