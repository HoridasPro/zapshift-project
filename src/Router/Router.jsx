import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Services from "../Pages/Services";
import Coverage from "../Pages/Coverage";
import AboutUs from "../Pages/AboutUs";
import Pricing from "../Pages/Pricing";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Services />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
