import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  randerImgOne,
  randerImgThree,
  randerImgTwo,
} from "../../../utils/getAssets";

function PostPhoto() {
  const { state } = useLocation();
  const { platform } = state || {};
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState({});

  const data = [
    {
      id: 1,
      imageUrl: randerImgOne,
      imageNumber: "one",
    },
    {
      id: 2,
      imageUrl: randerImgThree,
      imageNumber: "two",
    },
    {
      id: 3,
      imageUrl: randerImgTwo,
      imageNumber: "three",
    },
  ];

  const handleNavigate = () => {
    navigate("/addPostText", { state: { platform, payload: selectedItem } });
  };

  return (
    <div>
      <h1 className="font-light text-3xl leading-normal pr-4">
        Here you are, Which image would you like to share?
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-3 gap-5 items-start">
          {data?.map((item) => (
            <div
              className="cursor-pointer border border-white-10 rounded-md overflow-hidden relative"
              key={item?.id}
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item?.imageUrl}
                alt=""
                className="w-48 h-32 bg-cover object-cover bg-center"
              />
              {selectedItem?.id && item?.id === selectedItem?.id && (
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
          ))}
        </div>

        <div className="mt-28 flex items-center justify-between border-t border-white-10 pt-3">
          <div>
            <p>step 3 of 5</p>
          </div>
          <div className="flex items-center gap-10 ">
            <button
              className="text-secondary capitalize"
              //   onClick={() => handleNavigate("back")}
            >
              Re-Submit
            </button>
            <button
              type="button"
              className={`px-6 py-3 ${
                selectedItem?.id
                  ? "bg-secondary text-white"
                  : "bg-brown text-fade"
              } rounded-lg capitalize font-semibold`}
              disabled={!selectedItem?.id}
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

export default PostPhoto;
