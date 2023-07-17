import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ServiceCard from "../ServiceCard";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import Image from "mui-image";
import code from "../../../../assets/images/code.png";
import ui from "../../../../assets/images/design.png";
import video from "../../../../assets/images/video-editing.png";
import graphics from "../../../../assets/images/vector.png";
import { Fade } from "react-reveal";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const codeName = "Web Development";
  const videName = "Video Editing";
  const uiName = "UI / UX Design";
  const vectorName = "Graphics Design";

  return (
    <React.Fragment>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box>
          <Grid xs={12} md={12}>
            <Box
              sx={{
                mx: 5,
                mt: 15,
              }}
            >
              <Typography variant="h3" fontWeight="600">
                We're Always Ready For
              </Typography>
              <Typography
                variant="h3"
                fontWeight="900"
                color="#FFC700"
                data-aos="zoom-in"
              >
                Challenges
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} md={12}>
            <Box position="relative" data-aos="fade-left">
              <Box
                sx={{
                  height: "40%",
                  bgcolor: "#FFC700",
                  color: "black",
                  borderRadius: "80%",
                  position: "absolute",
                  left: -10,
                  top: 50,
                  padding: 3,
                }}
              >
                {/* <DesktopMacOutlinedIcon></DesktopMacOutlinedIcon> */}
                <Image src={code} height="100%"></Image>
              </Box>
              <ServiceCard name={codeName}></ServiceCard>
            </Box>
          </Grid>
          <Grid xs={12} md={12}>
            <Box position="relative" data-aos="fade-left">
              <Box
                sx={{
                  height: "40%",
                  bgcolor: "#FFC700",
                  color: "black",
                  borderRadius: "80%",
                  position: "absolute",
                  left: -10,
                  top: 50,
                  padding: 3,
                }}
              >
                {/* <DesktopMacOutlinedIcon></DesktopMacOutlinedIcon> */}
                <Image src={code} height="100%"></Image>
              </Box>
              <ServiceCard name={uiName}></ServiceCard>
            </Box>
          </Grid>
        </Box>
        <Box>
          <Grid xs={12} md={12}>
            <Box position="relative" data-aos="fade-right">
              <Box
                sx={{
                  height: "40%",
                  bgcolor: "#FFC700",
                  color: "black",
                  borderRadius: "80%",
                  position: "absolute",
                  right: 60,
                  top: 50,
                  padding: 3,
                }}
              >
                {/* <DesktopMacOutlinedIcon></DesktopMacOutlinedIcon> */}
                <Image src={video} height="100%"></Image>
              </Box>
              <ServiceCard name={videName}></ServiceCard>
            </Box>
          </Grid>
          <Grid xs={12} md={12}>
            <Box position="relative" data-aos="fade-right">
              <Box
                sx={{
                  height: "40%",
                  bgcolor: "#FFC700",
                  color: "black",
                  borderRadius: "80%",
                  position: "absolute",
                  right: 60,
                  top: 50,
                  padding: 3,
                }}
              >
                {/* <DesktopMacOutlinedIcon></DesktopMacOutlinedIcon> */}
                <Image src={graphics} height="100%"></Image>
              </Box>
              <ServiceCard name={vectorName}></ServiceCard>
            </Box>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Services;
