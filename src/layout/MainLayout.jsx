import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

function MainLayout() {
  return (
    <div className="bg-dotBg bg-no-repeat object-cover bg-cover w-full text-white">
      <Navbar></Navbar>
      <main className="">
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default MainLayout;
