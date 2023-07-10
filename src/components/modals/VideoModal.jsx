import React from "react";
import ReactPlayer from "react-player";

function VideoModal({ item }) {
  return (
    <div
      id="video-modal"
      className="hs-overlay hidden w-full h-full fixed inset-y-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-overlay scrollbar-none"
    >
      <div className=" hs-overlay-open:opacity-100 hs-overlay-open:duration-300 opacity-0 ease-out transition-all w-full h-full mx-auto flex items-center justify-center ">
        <div className="w-[44rem] z-20  overflow-auto ">
          <div className="w-full flex items-center justify-end mb-2">
            <button
              type="button"
              className="bg-white-30 flex items-center justify-center h-10 w-10 rounded-full text-2xl"
              data-hs-overlay="#video-modal"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.192 6.34375L11.949 10.5858L7.70697 6.34375L6.29297 7.75775L10.535 11.9998L6.29297 16.2418L7.70697 17.6558L11.949 13.4137L16.192 17.6558L17.606 16.2418L13.364 11.9998L17.606 7.75775L16.192 6.34375Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="bg-fade h-96 rounded-xl">
            <ReactPlayer
              url={item?.videoUrl}
              width="100%"
              height="100%"
              controls={true}
            ></ReactPlayer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
