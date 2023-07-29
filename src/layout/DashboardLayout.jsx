import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/shared/navbar/DashboardNavbar";
import Sidebar from "../components/shared/sidebar/Sidebar";

function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full overflow-auto">
        <Sidebar></Sidebar>
        <div className="w-full">
          <DashboardNavbar></DashboardNavbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
