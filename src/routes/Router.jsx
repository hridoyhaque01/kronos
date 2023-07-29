import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import MainLayout from "../layout/MainLayout";
import Analytics from "../pages/analytics/Analytics";
import Otp from "../pages/authentication/otp/Otp";
import Signup from "../pages/authentication/register/Signup";
import Signin from "../pages/authentication/signin/Signin";
import Contact from "../pages/contact/Contact";
import CreateReel from "../pages/create/CreateReel";
import CreateTweet from "../pages/create/CreateTweet";
import GenerateImage from "../pages/create/GenerateImage";
import Dashboard from "../pages/dashboard/Dashboard";
import History from "../pages/history/History";
import Home from "../pages/home/Home";
import InstaTag from "../pages/instaTag/InstaTag";
import Subscription from "../pages/subscription/Subscription";
import TwitterTag from "../pages/twitterTag/TwitterTag";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/generateImge",
        element: <GenerateImage></GenerateImage>,
      },
      {
        path: "/createTweet",
        element: <CreateTweet></CreateTweet>,
      },
      {
        path: "/createReel",
        element: <CreateReel></CreateReel>,
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>,
      },

      {
        path: "/twitter-tag",
        element: <TwitterTag></TwitterTag>,
      },
      {
        path: "/insta-tag",
        element: <InstaTag></InstaTag>,
      },
      {
        path: "/history",
        element: <History></History>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/subscription",
        element: <Subscription></Subscription>,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/otp",
        element: <Otp></Otp>,
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
