import logo from "./logo.svg";
import "./App.css";
import Appbar from "./pages/Appbar";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./route/routes";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
