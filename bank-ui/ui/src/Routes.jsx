import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";
import Register from "./pages/Register";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Login/> },
    { path: "*", element: <NotFound /> },
    {
      path: "transaction",
      element: <Transaction />,
    },
    {
      path: "register",
      element: <Register/>
    },
  ]);

  return element;
};

export default ProjectRoutes;
