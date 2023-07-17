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
      <Card sx={{ height: "60vh", bgcolor: "#FFC700" }}>
        <Box display="flex" justifyContent="center" alignItems="center" mt={20}>
          <Box>
            <Typography variant="h1" textAlign="center" fontWeight={900}>
              “
            </Typography>
            <Typography variant="h6" textAlign="justify" gutterBottom>
              {item.qoute}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight={900}
              gutterBottom
            >
              {item.name}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={800}
              gutterBottom
              textAlign="center"
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Paper>
  );
}
export default Item;
