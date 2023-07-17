import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Image from "mui-image";
import logo from "../../assets/images/black.png";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Intro = () => {
  const navigate = useNavigate();
  const handleScroll = () => {
    navigate("/home");
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          // bgcolor: "black",
          height: "100vh",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        onScroll={handleScroll}
        className="main"
      >
        {/* <Typography
        color="white"
        variant="outlined"
        fontWeight="bolder"
        mx="auto"
        onClick={() => navigate("/home")}
        className="name"
      >
        2AM
      </Typography> */}
        <h1 className="name " onClick={handleScroll}>
          2AM
        </h1>
      </Box>
    </React.Fragment>
  );
};

export default Intro;
