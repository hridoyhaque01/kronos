import React from "react";

function PasswordInput({
  isShowPassword,
  setIsShowPassword,
  handleInput,
  isShowIcon,
  ...rest
}) {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-semibold text-base">Password *</p>
      <div className="relative">
        <input
          required
          type={isShowPassword ? "text" : "password"}
          onInput={handleInput}
          placeholder="Enter Password"
          className="placeholer:text-fadeMid text-sm w-full border border-white rounded-md p-3 flex items-center gap-5 bg-transparent outline-none"
          {...rest}
        />
        {isShowIcon && (
          <span
            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5104 12.7C15.2504 14.11 14.1004 15.26 12.6904 15.52"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.47 14.53L2 22"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.0003 2L14.5303 9.47"
                stroke="#B8B8B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      <p className="text-sm text-fadeLight">
        Password must be at least 8 characters.
      </p>
    </div>
  );
}

export default PasswordInput;
