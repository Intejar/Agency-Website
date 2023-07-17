import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "../../carousel";
import Services from "./components/Services";
import WorkStyle from "./components/WorkStyle";
import ProjectSlider from "./components/OurProjects";
import Team from "./components/Team";
import Qoute from "./components/Qoute";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <Box
      mt={8}
      // sx={{
      //   placeItems: "center",
      // }}
    >
      <Slider></Slider>
      <Grid container sx={{ mx: 5, mb: 5 }}>
        <Services></Services>
      </Grid>
      <Box position="relative">
        <Grid container sx={{ mx: 3, mb: 5 }} spacing={2}>
          <WorkStyle></WorkStyle>
        </Grid>
        <Box
          bgcolor="black"
          sx={{ opacity: 0.04, borderRadius: "0 150px 150px 0" }}
          height="60%"
          width="10%"
          position="absolute"
          top={30}
        ></Box>
      </Box>
      <Box mx={5} my={5} position="relative">
        <ProjectSlider></ProjectSlider>
      </Box>
      <Box mx={5} my={5} position="relative">
        <Team></Team>
        <Box
          bgcolor="#FFC700"
          sx={{ borderRadius: " 150px  0  0 150px " }}
          height="30%"
          width="10%"
          position="absolute"
          top={50}
          right={-40}
        ></Box>
      </Box>
      <Qoute></Qoute>
      <Box mx={5} my={5} height="80vh">
        <Box height="100%" width="100%" position="absolute">
          <Contact></Contact>
        </Box>
        <Box
          bgcolor="#FFC700"
          // sx={{ borderRadius: " 150px  0  0 150px " }}
          height="30%"
          width="10%"
          position="absolute"
          left={200}
        ></Box>
      </Box>
    </Box>
  );
};

export default Home;
