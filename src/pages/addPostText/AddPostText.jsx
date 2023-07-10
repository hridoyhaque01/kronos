import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddPostText() {
  const { state } = useLocation();
  const { platform, payload } = state || {};
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const handleNavigate = () => {
    navigate("/editPostText", { state: { platform, payload, texts: message } });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 22) {
      setMessage(value);
    }
  };

  return (
    <div>
      <h1 className="font-light text-3xl leading-normal pr-4">
        What text would you like to add to this image?
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-6 gap-5 items-start">
          <div className="col-span-4">
            <textarea
              name=""
              className="w-full h-52 border border-white rounded-md bg-transparent px-4 py-3 text-white font-base placeholder:text-white-30 outline-none duration-200"
              placeholder="Type here..."
              value={message}
              onChange={handleChange}
            ></textarea>
            <div>
              <p className="text-right text-[10px] text-fade">
                {message?.length} / 22
              </p>
            </div>
          </div>
          <div className="col-span-2">
            {platform === "photoPost" ? (
              <div className="cursor-pointer border border-white-10 rounded-md overflow-hidden relative">
                <img
                  src={payload?.imageUrl}
                  alt=""
                  className="w-48 h-32 bg-cover object-cover bg-center"
                />
                {message?.trim()?.length > 0 ? (
                  <div className="absolute w-full inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    {message}
                  </div>
                ) : (
                  <div
                    className={`absolute top-1 left-1 right-1 bottom-1 bg-success-50 rounded-md flex items-center justify-center`}
                  >
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.625 17.9999L15.87 22.2449L24.375 13.7549"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-white-10 pt-3">
          <div>
            <p>step 3 of 5</p>
          </div>
          <div className="flex items-center gap-10 ">
            <button
              disabled={message?.trim()?.length > 0 ? false : true}
              type="button"
              className={`px-6 py-3 ${
                message?.trim()?.length > 0
                  ? "bg-secondary text-white"
                  : "bg-brown text-fade"
              } rounded-lg capitalize font-semibold`}
              onClick={handleNavigate}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPostText;
