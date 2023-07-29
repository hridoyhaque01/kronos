import React from "react";
import { Link } from "react-router-dom";

function DashboardNavbar() {
  return (
    <div className="w-full bg-fadeBold p-6">
      <navbar className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>
        <div>
          <ul className="font-openSans flex items-center gap-9">
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 max-w-max py-3 px-6 border border-orangeDark rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 21H14.8C14.634 21 14.5 20.866 14.5 20.7V16.5C14.5 15.119 13.381 14 12 14C10.619 14 9.5 15.119 9.5 16.5V20.7C9.5 20.866 9.36595 21 9.19995 21H6C4 21 3 20 3 18V11.651C3 9.65302 3.52305 9.34608 4.43005 8.58608L10.394 3.58498C11.323 2.80598 12.6781 2.80598 13.6071 3.58498L19.571 8.58608C20.477 9.34608 21.001 9.65302 21.001 11.651V18C21 20 20 21 18 21Z"
                    fill="white"
                  />
                </svg>
                <span className="text-base font-semibold text-white">
                  Back To Home
                </span>
              </Link>
            </li>
            <li>
              <div className="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-custom-trigger"
                  type="button"
                  className="hs-dropdown-toggle py-3 px-6 inline-flex justify-center items-center gap-4 rounded-full font-medium bg-orangeDark text-gray-700 shadow-sm align-middle transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M11.9996 10.8C13.9878 10.8 15.5996 9.18823 15.5996 7.20001C15.5996 5.21178 13.9878 3.60001 11.9996 3.60001C10.0114 3.60001 8.39961 5.21178 8.39961 7.20001C8.39961 9.18823 10.0114 10.8 11.9996 10.8Z"
                      fill="white"
                    />
                    <path
                      d="M3.59961 21.6C3.59961 16.9608 7.36042 13.2 11.9996 13.2C16.6388 13.2 20.3996 16.9608 20.3996 21.6H3.59961Z"
                      fill="white"
                    />
                  </svg>
                  <span className="text-white font-semibold text-base">
                    John
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.35147 8.75147C6.8201 8.28284 7.5799 8.28284 8.04853 8.75147L12 12.7029L15.9515 8.75147C16.4201 8.28284 17.1799 8.28284 17.6485 8.75147C18.1172 9.22009 18.1172 9.97989 17.6485 10.4485L12.8485 15.2485C12.3799 15.7172 11.6201 15.7172 11.1515 15.2485L6.35147 10.4485C5.88284 9.97989 5.88284 9.22009 6.35147 8.75147Z"
                      fill="white"
                    />
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 "
                  aria-labelledby="hs-dropdown-custom-trigger"
                >
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </navbar>
    </div>
  );
}

export default DashboardNavbar;
