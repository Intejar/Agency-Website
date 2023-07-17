import { Box, Typography } from "@mui/material";
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box className="box" height="80%" width="70%">
          <Box>
            <Typography variant="h6" color="red">
              Start a new project
            </Typography>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
