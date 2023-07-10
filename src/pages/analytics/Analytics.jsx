import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Analytics() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { platform } = state || {};
  const [isChecked, setIsChecked] = useState(platform || "tweet");

  const handleNavigate = () => {
    console.log("hello");
    navigate("/post", { state: { platform: isChecked } });
  };

  return (
    <div>
      <div>
        <h1 className="font-light text-3xl leading-normal">
          How can I help your marketing needs?
        </h1>
        <div className="mt-8">
          <div className="flex flex-col gap-y-5">
            <label
              className={`flex items-center justify-between p-4 border cursor-pointer ${
                isChecked === "tweet" ? "border-secondary" : "border-white-20"
              } rounded-md relative`}
              htmlFor="tweet"
            >
              <p className="text-lg">Create a tweet</p>
              <div>
                <input
                  type="radio"
                  id="tweet"
                  checked={isChecked === "tweet" ? true : false}
                  onChange={() => setIsChecked("tweet")}
                  className="absolute opacity-0"
                />
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white">
                  {isChecked === "tweet" && (
                    <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  )}
                </div>
              </div>
            </label>
            <label
              className={`flex items-center justify-between p-4 border cursor-pointer ${
                isChecked === "photoPost"
                  ? "border-secondary"
                  : "border-white-20"
              } rounded-md relative`}
              htmlFor="photoPost"
            >
              <p className="text-lg">Create photo post</p>
              <div>
                <input
                  type="radio"
                  id="photoPost"
                  value="photoPost"
                  className="absolute opacity-0"
                  checked={isChecked === "photoPost" ? true : false}
                  onChange={() => setIsChecked("photoPost")}
                />
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white">
                  {isChecked === "photoPost" && (
                    <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  )}
                </div>
              </div>
            </label>
            <label
              className={`flex items-center justify-between p-4 border cursor-pointer ${
                isChecked === "reel" ? "border-secondary" : "border-white-20"
              } rounded-md relative`}
              htmlFor="reel"
            >
              <p className="text-lg">Create photo reel</p>
              <div>
                <input
                  type="radio"
                  id="reel"
                  value="reel"
                  className="absolute opacity-0"
                  checked={isChecked === "reel" ? true : false}
                  onChange={() => setIsChecked("reel")}
                />
                <div className="flex items-center justify-center w-6 h-6 rounded-full border border-white">
                  {isChecked === "reel" && (
                    <div className="w-4 h-4 rounded-full bg-secondary"></div>
                  )}
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-16 flex items-center justify-between  border-t border-white-10 pt-3">
        <div>
          <p>step 1 of 5</p>
        </div>
        <div>
          <button
            type="button"
            className="px-6 py-3 bg-secondary rounded-lg capitalize font-semibold"
            onClick={handleNavigate}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
