import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import MyBookings from "../pages/MyBookings/MyBookings";
import Blogs from "../pages/Blogs/Blogs";
import LawyersDetails from "../pages/LawyersDetails/LawyersDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await fetch("lawyersData.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/my-bookings",
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "lawyers/:lawyerId",
        Component: LawyersDetails,
        loader: async () => {
          const res = await fetch("lawyersData.json");
          const data = await res.json();
          return data;
        },
      },
    ],
  },
]);
