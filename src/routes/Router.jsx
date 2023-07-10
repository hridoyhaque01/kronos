import { createBrowserRouter } from "react-router-dom";
import AnalyticsLayout from "../layout/AnalyticsLayout";
import Layout from "../layout/Layout";
import AddPostText from "../pages/addPostText/AddPostText";
import Analytics from "../pages/analytics/Analytics";
import EditPostText from "../pages/editPostText/EditPostText";
import Post from "../pages/post/Post";
import Schedule from "../pages/schedule/Schedule";
import Share from "../pages/share/Share";
import PrivateRouter from "./PrivateRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout></Layout>
      </PrivateRouter>
    ),
    children: [
      // {
      //   path: "/",
      //   element: <Home></Home>,
      // },
      {
        path: "/",
        element: <AnalyticsLayout></AnalyticsLayout>,
        children: [
          {
            path: "/",
            element: <Analytics></Analytics>,
          },
          {
            path: "/post",
            element: <Post></Post>,
          },
          {
            path: "/share",
            element: <Share></Share>,
          },
          {
            path: "/schedule",
            element: <Schedule></Schedule>,
          },
          {
            path: "/addPostText",
            element: <AddPostText></AddPostText>,
          },
          {
            path: "/editPostText",
            element: <EditPostText></EditPostText>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
