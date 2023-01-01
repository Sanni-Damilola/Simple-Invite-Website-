import React from "react";
import { useRoutes } from "react-router-dom";
import Enterdata from "../Enterdata/Enterdata";

const Nav = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Enterdata  />,
    },
  ]);

  return element;
};

export default Nav;
