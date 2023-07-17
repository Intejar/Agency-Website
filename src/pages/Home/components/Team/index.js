import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import datas from "../../../../dummy/team.json";
import TeamProfile from "./components/TeamProfile";
import Image from "mui-image";

const Team = () => {
  return (
    <React.Fragment>
      <Box height="100vh">
        <Typography
          variant="h3"
          fontWeight={900}
          mt={10}
          gutterBottom
          data-aos="zoom-out"
        >
          Our <span style={{ color: "#FFC700" }}>Team</span>
        </Typography>
        <Divider
          sx={{
            borderBottomWidth: 5,
            width: "100px",
            borderColor: "#FFC700",
            mb: 3,
          }}
        ></Divider>
        <Typography
          variant="subtitle2"
          width="50%"
          textAlign="justify"
          gutterBottom
        >
          Elit ipsum nulla aliquip excepteur minim veniam. Occaecat non proident
          dolor labore. Irure nostrud id velit duis. Veniam amet id ex tempor
          Lorem. Laborum sunt in incididunt dolore ex laborum voluptate. Irure
          labore in occaecat aliquip ad non laboris qui ex culpa nisi. Est in
          magna eiusmod sint irure. Cupidatat proident ad nostrud tempor commodo
          officia non. Velit ad irure consectetur nulla. Officia dolor ex ex
          cillum cupidatat quis adipisicing laboris consequat aliquip laboris
          non. Aliqua ex reprehenderit pariatur enim Lorem enim exercitation
          occaecat laborum irure velit eiusmod elit. Culpa quis pariatur ullamco
          do qui exercitation occaecat. Commodo laboris sit voluptate ipsum
          Lorem fugiat voluptate nostrud reprehenderit. Excepteur occaecat elit
          et veniam ipsum aliqua.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={5}
          my={10}
          position="relative"
        >
          {datas.map((data, i) => (
            <TeamProfile team={data} key={i} />
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Team;
