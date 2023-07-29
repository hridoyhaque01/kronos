import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/getAssets";

function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm p-6 absolute left-0 right-0 top-0 font-satoshi font-medium font-openSans">
      <nav
        className="max-w-[78rem] w-full mx-auto px-2 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center gap-x-2 text-xl font-semibold"
            to="/"
          >
            <img className="w-36 h-auto" src={logo} alt="Logo" />
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border  shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm "
              data-hs-collapse="#navbar-image-and-text-2"
              aria-controls="navbar-image-and-text-2"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-2"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:flex items-center justify-between z-[60] bg-blackReg sm:bg-transparent p-6 rounded-md"
        >
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-20 sm:bg-fadeMidRgb sm:border sm:border-fadeMidRgb w-full sm:max-w-max mx-auto sm:py-3.5 sm:px-8 rounded-md sm:rounded-full  sm:flex-row sm:items-center sm:justify-end ">
            <Link className="" to="/history" aria-current="page">
              About
            </Link>
            <Link className="" to="/analytics">
              Pricing
            </Link>
            <Link className="" to="/settings">
              Contact
            </Link>
            <Link className="" to="/support">
              Support
            </Link>
          </div>
          <div className="mt-6 sm:mt-0">
            <Link
              to="/signin"
              className="inline-block py-3.5 px-8 bg-orangeDark text-white font-semibold rounded-[48px]"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
