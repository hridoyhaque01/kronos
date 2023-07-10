import React from "react";
import { Outlet } from "react-router-dom";
import { circle } from "../utils/getAssets";

function AnalyticsLayout() {
  return (
    <section className="relative w-full h-screen flex ">
      <div className="h-full flex items-center justify-center">
        <div className="grid grid-cols-12 gap-5 justify-between">
          <div className="col-span-6">
            <Outlet></Outlet>
          </div>
          <div></div>
          <div className="col-span-5">
            <img src={circle} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsLayout;
