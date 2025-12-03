import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Services from "../Pages/Services";
import Coverage from "../Pages/Coverage";
import AboutUs from "../Pages/AboutUs";
import Pricing from "../Pages/Pricing";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Rider from "../Pages/Rider";
import Private from "../Private/Private";
import SendPercel from "../Pages/SendPercel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Services />,
      },
      {
        path: "/rider",
        element: (
          <Private>
            <Rider></Rider>
          </Private>
        ),
      },
      {
        path: "/send_percel",
        element: (
          <Private>
            <SendPercel></SendPercel>
          </Private>
        ),
        loader: () => fetch("/jsonData.json").then((res) => res.json()),
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
      {
        path: "/coverage",
        // loader: () => fetch("/jsonData.json").then((res) => res.json()),
        element: <Coverage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <Private>
        <DashboardLayout></DashboardLayout>
      </Private>
    ),
    children: [
      {
        path: "myParcels",
        element: <MyParcels />,
      },
      {
        path: "payment/:paymentId",
        element: <Payment />,
      },
      {
        path: "paymentSuccess",
        element: <PaymentSuccess />,
      },
      {
        path: "paymentCancelled",
        element: <PaymentCancelled />,
      },
    ],
  },
]);
export default router;
