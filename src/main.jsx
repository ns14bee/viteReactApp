import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./setup/routes/Router";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
