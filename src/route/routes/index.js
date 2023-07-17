import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/main";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Services from "../../pages/Services";
import Contact from "../../pages/ContactUs";
import Intro from "../../pages/IntroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro></Intro>,
  },
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
