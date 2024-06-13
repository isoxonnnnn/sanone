import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function NavbarMain({ data }) {
  const { pathname } = useLocation();
  return pathname.includes("login") || pathname.includes("admin") ? (
    <></>
  ) : (
    <>
      <Navbar data={data} />
    </>
  );
}

export default NavbarMain;
