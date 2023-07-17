import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import "./item.css";

function Item({ item }) {
  return (
    <Paper>
      <Box height="100vh" position="relative">
        <Box position="relative">
          <Typography variant="h3" fontWeight={900} gutterBottom>
            Our Recent <span style={{ color: "#FFC700" }}>Projects</span>
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: 5,
              width: "100px",
              borderColor: "#FFC700",
              mb: 3,
            }}
          ></Divider>
          <Box width="30%">
            <Typography variant="h4" fontWeight="bolder" gutterBottom>
              {item.title}
            </Typography>
            <Typography variant="subtitle2" textAlign="justify">
              {item.description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "450px",
            top: "200px",
          }}
        >
          <div class="ui-card">
            <Image className="img" src={item.image1} />
            <div class="description">
              <h3>Mountain Morning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "200px",
            top: "400px",
          }}
        >
          <div class="ui-card">
            <Image className="img" src={item.image2} />
            <div class="description">
              <h3>Mountain Morning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "200px",
            top: "80px",
          }}
        >
          <div class="ui-card">
            <Image className="img" src={item.image3} />
            <div class="description">
              <h3>Mountain Morning</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
export default Item;
