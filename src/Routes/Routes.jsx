import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("lawyersData.json"),
        path: "/",
        Component: Home,
      },
      {
        index: true,
        path: "/my-bookings",
        Component: MyBookings,
      },
      {
        index: true,
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);
