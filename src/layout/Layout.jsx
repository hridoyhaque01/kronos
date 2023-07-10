import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

function Layout() {
  return (
    <div className="bg-dotBg bg-no-repeat bg-cover object-cover text-white">
      <Navbar></Navbar>
      <main className="">
        <div className="max-w-[1240px] mx-auto">
          <Outlet></Outlet>
        </div>
      </main>
    </div>
  );
}

export default Layout;
