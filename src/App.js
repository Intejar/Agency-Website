import logo from "./logo.svg";
import "./App.css";
import Appbar from "./pages/Appbar";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./route/routes";
import Home from "./pages/Home";
import About from "./pages/About";
import { Box, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC700",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
