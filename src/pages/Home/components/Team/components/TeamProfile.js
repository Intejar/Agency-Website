import { Box, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import "../team.css";

const TeamProfile = ({ team }) => {
  return (
    <Box position="relative">
      {/* <Box
        height="120px"
        width="120px"
        sx={{
          position: "absolute",
          top: "-40px",
          left: "90px",
          borderRadius: "50%",
          bgcolor: "yellow",
        }}
      ></Box> */}
      <Box
        height="110px"
        width="110px"
        sx={{
          position: "absolute",
          top: "-50px",
          left: "100px",
          borderRadius: "50%",
          // bgcolor: "",
        }}
        bgcolor="#FFC700"
        className="cardPic"
      ></Box>

      <Box
        sx={{
          height: "165px",
          width: "300px",
          bgcolor: "black",
          borderBottomLeftRadius: "35px",
          borderTopRightRadius: "35px",
        }}
        //   position="relative"
        className="card"
        mb={5}
      >
        <Image
          src={team.img}
          height="100px"
          width="100px"
          sx={{
            position: "absolute",
            bottom: "45px",
            left: "105px",
            borderRadius: "50%",
            borderBottom: "2px sild #FFC700",
          }}
        ></Image>
        <Typography variant="h6" color="white" textAlign="center">
          {team.name}
        </Typography>
        <Typography variant="subtitle2" color="#FFC700" textAlign="center">
          {team.designation} || {team.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="white"
          textAlign="justify"
          mx={2}
          my={3}
        >
          {team.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeamProfile;
