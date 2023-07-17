import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WorkStyleCard from "./component/WorkStyleCard";
import AOS from "aos";
import "aos/dist/aos.css";
import datas from "../../../../dummy/workStyle.json";

const WorkStyle = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <React.Fragment>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h3"
          fontWeight={900}
          mt={10}
          gutterBottom
          data-aos="zoom-in"
        >
          How We <span style={{ color: "#FFC700" }}>Work</span>
        </Typography>
        <Typography
          variant="subtitle2"
          textAlign="justify"
          overflow="hidden"
          data-aos="zoom-in"
        >
          Elit irure do veniam consequat qui nostrud labore et. Nostrud ipsum
          incididunt mollit nisi nisi aute reprehenderit mollit id id.
          Reprehenderit ullamco qui id dolore est eiusmod nisi cupidatat dolore.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={1}>
          {datas.map((data, i) => (
            <Grid item xs={12} md={4}>
              <WorkStyleCard data={data} key={i} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default WorkStyle;
