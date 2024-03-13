import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "login", element: <Login/> },
    { path: "*", element: <NotFound /> },
    {
      path: "transaction",
      element: <Transaction />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
