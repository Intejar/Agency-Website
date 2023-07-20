import { Box, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "../index.css";
const Profile = () => {
  return (
    <Box>
      <Typography variant="h3" color="#FFC700" gutterBottom>
        Logo
      </Typography>
      <Typography
        textAlign="justify"
        variant="subtitle2"
        color="white"
        gutterBottom
      >
        Nostrud amet quis aliquip nulla. Cupidatat ipsum duis id sint veniam
        cillum. Mollit ex ullamco amet cupidatat anim anim deserunt cupidatat id
        do. Excepteur tempor cupidatat enim labore do aliqua aliqua dolor minim
        ea anim officia occaecat fugiat.
      </Typography>
      <Box display="flex" alignItems="center" gap={2} my={2}>
        <EmailIcon
          sx={{
            color: "#FFC700",
          }}
        ></EmailIcon>
        <Typography variant="subtitle2" color="white">
          2am.creativesolutions@gmail.com
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2} my={2}>
        <CallIcon
          sx={{
            color: "#FFC700",
          }}
        ></CallIcon>
        <Typography variant="subtitle2" color="white">
          +880 18545-31575
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
