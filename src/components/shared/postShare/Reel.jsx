import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";
import video from "../../../assets/video/testVideo.mp4";
import video2 from "../../../assets/video/testVideo2.mp4";
import VideoModal from "../../modals/VideoModal";

function Reel() {
  const { state } = useLocation();
  const { platform } = state || {};
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState({});
  const [videoPlay, setVideoPlay] = useState({});

  const data = [
    {
      id: 1,
      videoUrl: video,
      imageNumber: "one",
    },
    {
      id: 2,
      videoUrl: video2,
      imageNumber: "two",
    },
    {
      id: 3,
      videoUrl: video,
      imageNumber: "three",
    },
    {
      id: 4,
      videoUrl: video2,
      imageNumber: "four",
    },
  ];

  const handleNavigate = () => {
    navigate("/addPostText", { state: { platform, payload: selectedItem } });
  };

  return (
    <div>
      <h1 className="font-light text-3xl leading-normal pr-4">
        Here you are. which reel would you like to share?
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-4 gap-5 items-start">
          {data?.map((item) => (
            <div
              className="cursor-pointer border border-white-10 rounded-md overflow-hidden relative z-10"
              key={item?.id}
            >
              <div
                className="w-full h-52 relative "
                onClick={() => setSelectedItem(item)}
              >
                <ReactPlayer
                  url={item?.videoUrl}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
              <button
                className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-50"
                type="button"
                data-hs-overlay="#video-modal"
                onClick={() => setVideoPlay(item)}
              >
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_133_284)">
                    <path
                      d="M17.4564 32.0846C25.5105 32.0846 32.0397 25.5555 32.0397 17.5013C32.0397 9.44715 25.5105 2.91797 17.4564 2.91797C9.40223 2.91797 2.87305 9.44715 2.87305 17.5013C2.87305 25.5555 9.40223 32.0846 17.4564 32.0846Z"
                      fill="#919191"
                      fillOpacity="0.55"
                    />
                  </g>
                  <path
                    d="M12.7456 17.8353V15.3999C12.7456 12.3666 14.8894 11.127 17.5144 12.6437L19.6289 13.8687L21.7435 15.0937C24.3685 16.6103 24.3685 19.0895 21.7435 20.6062L19.6289 21.8312L17.5144 23.0562C14.8894 24.5728 12.7456 23.3332 12.7456 20.2999V17.8353Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_b_133_284"
                      x="-6.12695"
                      y="-6.08203"
                      width="47.1667"
                      height="47.166"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.5"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_133_284"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_133_284"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
              {selectedItem?.id && item?.id === selectedItem?.id && (
                <div
                  className={`absolute top-1 left-1 right-1 bottom-1 bg-success-50 rounded-md flex items-center justify-center z-50`}
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
      <VideoModal item={videoPlay}></VideoModal>
    </div>
  );
}

export default Reel;
