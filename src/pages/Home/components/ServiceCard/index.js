import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "mui-image";

const ServiceCard = ({ name }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          width: "80%",
          height: "80%",
          margin: 5,
          bgcolor: "black",
          color: "white",
        }}
      >
        <CardContent>
          {/* <DesktopMacOutlinedIcon
          sx={{
            bgcolor: "yellow",
            color: "black",
            borderRadius: 50,
            // padding: 3,
          }}
        ></DesktopMacOutlinedIcon> */}

          <Box mx={8} my={5}>
            <Typography
              variant="h5"
              fontWeight="bolder"
              color="white"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography variant="subtitle2" textAlign="justify">
              Id voluptate laboris eu nostrud aute aliqua id aliqua duis. Minim
              cillum fugiat pariatur laborum. Incididunt minim consectetur
              proident occaecat ullamco proident cillum nisi aliquip id
              proident.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default ServiceCard;
