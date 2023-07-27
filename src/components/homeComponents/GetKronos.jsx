import React from "react";
import { Link } from "react-router-dom";

function GetKronos({ width }) {
  return (
    <section className="px-4 mt-8 sm:mt-16 lg:mt-36">
      <div className={width}>
        <div className="">
          <div className="flex flex-col items-start sm:flex-row gap-7 justify-between  sm:items-center p-6 md:p-10 lg:p-16 gradient-border bg-blackReg font-openSans">
            <div className="max-w-[504px]">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold ">
                Get Kronos
              </h2>
              <p className="text-sm md:text-lg text-fade mt-5 mb-7">
                Start using Kronos with a free 7 day trial to find out if it’s
                the perfect fit for your marketing needs.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/"
                className="text-sm lg:text-lg leading-8 flex max-w-max px-6 py-2 bg-orangeDark rounded-full capitalize font-openSans "
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetKronos;
