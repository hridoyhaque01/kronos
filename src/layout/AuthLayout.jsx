import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen w-full bg-authBg bg-cover bg-bottom bg-no-repeat flex items-center justify-center text-white px-4 py-10">
      <Outlet></Outlet>
    </div>
  );
}

export default AuthLayout;
