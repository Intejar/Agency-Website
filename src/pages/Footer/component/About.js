import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box>
      <Typography my={2} variant="h5" color="#FFC700">
        Career
      </Typography>
      <Typography
        my={2}
        variant="subtitle2"
        color="white"
        className="service"
        sx={{
          "&:hover": { color: "#FFC700", cursor: "pointer" },
        }}
      >
        Webdevelopment
      </Typography>
      <Typography
        my={2}
        variant="subtitle2"
        color="white"
        className="service"
        sx={{
          "&:hover": { color: "#FFC700", cursor: "pointer" },
        }}
      >
        Video Editing
      </Typography>
      <Typography
        my={2}
        variant="subtitle2"
        color="white"
        className="service"
        sx={{
          "&:hover": { color: "#FFC700", cursor: "pointer" },
        }}
      >
        Graphics Design
      </Typography>
    </Box>
  );
};

export default About;
