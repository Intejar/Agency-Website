import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <Card sx={{ display: "flex", height: "60vh", bgcolor: "#FFC700" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: 5,
            my: 20,
          }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
            }}
          >
            <Typography component="div" variant="h3" fontWeight={900}>
              {item.title}
            </Typography>
            <Typography
              mt={3}
              variant="subtitle2"
              color="text.secondary"
              component="div"
              textAlign="justify"
            >
              {item.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "50%", height: "100%" }}
          image={item.image}
          alt="Slider Image"
        />
      </Card>
    </Paper>
  );
}
export default Item;
