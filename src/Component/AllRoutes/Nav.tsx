import React from "react";
import { useRoutes } from "react-router-dom";
import Enterdata from "../Enterdata/Enterdata";

const Nav = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <Enterdata />,
    },
  ]);

  return route;
};

export default Nav;
