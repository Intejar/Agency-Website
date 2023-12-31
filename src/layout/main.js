import React from "react";
import App from "../App";
import Appbar from "../pages/Appbar";
import { Outlet } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";
import Footer from "../pages/Footer";

const Main = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", overflow: "hidden" }}>
        <Appbar></Appbar>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet></Outlet>
          <Footer></Footer>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
