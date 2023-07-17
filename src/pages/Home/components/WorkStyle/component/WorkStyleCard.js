import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../../../utils/motion";
import "./Style.css";

const WorkStyleCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card
        sx={{ width: 275, height: 250, bgcolor: "black", color: "white" }}
        onMouseDown={handleClick}
        className="card"
      >
        <CardContent>
          <Typography variant="h3" color="grey" fontWeight={700} mx={2}>
            {data.id}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            my={4}
          >
            <Typography
              variant="h4"
              color="#FFC700"
              component="div"
              fontWeight={600}
            >
              {data.title}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          width: 275,
          height: 250,
          bgcolor: "black",
          color: "white",
        }}
        onMouseOver={handleClick}
      >
        <CardContent>
          <Typography variant="caption">{data.description}</Typography>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};

export default WorkStyleCard;
