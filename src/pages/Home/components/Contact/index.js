import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import "./contact.css";
import { color } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendMail = (e) => {
    e.preventDefault();
    console.log("data", form.current);

    emailjs
      .sendForm(
        "service_mijd9il",
        "template_4upbg2i",
        form.current,
        "8p8_XwFxEbvGqfOoL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <React.Fragment>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box className="box" height="80%" width="70%" boxShadow={10}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box mx={3} my={10}>
                <Typography
                  variant="h2"
                  color="#FFC700"
                  fontWeight={800}
                  gutterBottom
                >
                  Start a new Project!!
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="white"
                  textAlign="justify"
                >
                  Nostrud esse ad esse nulla ad commodo. Aute tempor eu
                  exercitation ut Lorem ipsum quis enim est ex. Ex nulla mollit
                  cupidatat dolor aliqua.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box mx={3} my={6}>
                {/* <FormControl required fullWidth>
                  <FormLabel
                    sx={{
                      fontSize: "13px",
                      color: "white",
                      fontWeight: "medium",
                    }}
                    component="label"
                  >
                    Email
                  </FormLabel>
                  <TextField
                    sx={{
                      bgcolor: "white",
                      color: "black",
                    }}
                    placeholder={"enter your email"}
                  />
                </FormControl> */}
                <form ref={form} onSubmit={sendMail}>
                  <TextField
                    name="user_name"
                    fullWidth
                    label="Full Name"
                    id="custom-css-outlined-input"
                    // color="#FFC700"
                    // focused
                    sx={{
                      my: 1,
                      outlineColor: "#FFC700",
                    }}
                    // helperText="Some important text"
                  />
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    name="user_email"
                    label="Email"
                    type="email"
                    sx={{
                      my: 1,
                    }}
                    // helperText="Some important text"
                  />
                  <TextField
                    fullWidth
                    id="outlined-helperText"
                    label="Subject"
                    name="subject"
                    sx={{
                      my: 1,
                    }}
                    // helperText="Some important text"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    label="Body"
                    name="message"
                    multiline
                    rows={4}
                    sx={{
                      my: 1,
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon></SendIcon>}
                    sx={{
                      my: 1,
                      bgcolor: "#FFC700",
                      color: "black",
                      float: "right",
                    }}
                  >
                    Send
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Contact;
