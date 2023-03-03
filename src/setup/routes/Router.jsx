import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import PageNotFound from "../../pages/Errors/PageNotFound";
import Practice from "../../pages/Practice";
import Blogs from "../../pages/Blogs";
import BlogPageDetails from "../../pages/Blogs/BlogPageDetails";
import BlogsPage from "../../pages/Blogs/BlogPage";
import TempratureApp from "../../pages/TempratureApp";
import Product from "../../pages/Product";
import BookList from "../../pages/Books";
import StateExample from "../../pages/Practice/StateExample";
import StateDemo from "../../pages/Practice/StateDemo";
import EffectExample from "../../pages/Practice/EffectExample";
import ReducerExample from "../../pages/Practice/ReducerExample";
import MemoExample from "../../pages/Practice/MemoExample";
import Prefrences from "../../components/Auth/Prefrences";
import Dashboard from "../../pages/Dashboard";
import LoginPage from "../../pages/Login";
import RazorPay from "../../pages/RazorPay";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "practice",
        element: <Practice />,
        children: [
          {
            path: "",
            element: <StateDemo />,
          },
          {
            path: "state",
            element: <StateExample />,
          },
          {
            path: "effect",
            element: <EffectExample />,
          },
          {
            path: "reducer",
            element: <ReducerExample />,
          },
          {
            path: "memo",
            element: <MemoExample />,
          },
        ],
      },
      {
        path: "blogs",
        element: <Blogs />,
        children: [
          {
            path: "",
            element: <BlogsPage />,
          },
          {
            path: "blogs-details",
            element: <BlogPageDetails />,
          },
        ],
      },
      {
        path: "temp",
        element: <TempratureApp />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "books",
        element: <BookList />,
      },
      {
        path: "preferences",
        element: <Prefrences />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "pay",
        element: <RazorPay />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
