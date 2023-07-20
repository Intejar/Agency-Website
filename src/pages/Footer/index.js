import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Profile from "./component/Profile";
import "./index.css";
import Service from "./component/Service";
import About from "./component/About";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box height="60vh" width="100%" bgcolor="black" marginTop={20} padding={10}>
      <Grid container spacing={5}>
        <Grid item xs={6} md={3}>
          <Profile></Profile>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Service></Service>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <About></About>
          </Box>
        </Grid>
        <Grid item xs={6} md={3}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box>
              <Typography my={2} variant="h5" color="#FFC700">
                Address
              </Typography>
              <Box display="flex" alignItems="center" gap={2} mb={1}>
                <PlaceIcon
                  sx={{
                    color: "#FFC700",
                  }}
                ></PlaceIcon>
                <Typography variant="subtitle2" color="white">
                  5/1/H, Mohonpur, Adabor, Dhaka
                </Typography>
              </Box>
              <Box mt={2}>
                <Box display="flex" alignItems="center" gap={2}>
                  <FaInstagramSquare className="icon"></FaInstagramSquare>
                  <FaFacebookSquare className="icon"></FaFacebookSquare>
                  <FaLinkedin className="icon"></FaLinkedin>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
