import React from "react";
import { banner } from "../../assets/getAssets";

function Banner({ width }) {
  return (
    <section className="px-4 pt-28 md:pt-40 lg:pt-64 text-center duration-300">
      <div className={width}>
        <div>
          <div className="sm:px-[2rem] md:px-[4rem] lg:px-[7rem]">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-openSans font-normal leading-tight">
              Boost your marketing productivity
            </h1>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-fade mt-5 mb-4 lg:my-7 ">
              Kronos is a marketing software that creates ideas for you to share
              with your audience to save time and scale marketing results
            </p>
            <button className="text-sm lg:text-lg leading-8 px-6 py-2 bg-orangeDark rounded-full capitalize font-openSans">
              Get Started Now
            </button>
          </div>
          <div className="mt-4 lg:mt-14">
            <img src={banner} alt="banner" className="w-full " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
