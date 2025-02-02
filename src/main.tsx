import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Collections } from "./pages/Collections.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout child={<App />} />,
  },
  {
    path: "/collections",
    element: <Layout child={<Collections />} />,
  },
  {
    path: "/users",
    element: <Layout child={<h1>users page</h1>} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
