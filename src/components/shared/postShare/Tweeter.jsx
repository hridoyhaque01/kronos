import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Tweeter() {
  const { state } = useLocation();
  const { platform } = state || {};
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const handleNavigate = () => {
    navigate("/schedule", { state: { platform, payload: message } });
  };

  return (
    <div>
      <h1 className="font-light text-3xl leading-normal">
        Here you are. Feel free to edit or share.
      </h1>
      <div className="mt-8">
        <textarea
          name=""
          className="w-full h-52 border border-white rounded-md bg-transparent px-4 py-3 text-white font-base placeholder:text-white-30 outline-none focus:border-secondary duration-200"
          placeholder="Type here..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="mt-16 flex items-center justify-between border-t border-white-10 pt-3">
          <div>
            <p>step 3 of 5</p>
          </div>
          <div className="flex items-center gap-10 ">
            <button className="text-secondary capitalize">Re-Submit</button>
            <button
              disabled={message?.trim()?.length > 0 ? false : true}
              type="button"
              className={`px-6 py-3 ${
                message?.trim()?.length > 0
                  ? "bg-secondary text-white"
                  : "bg-brown text-fade"
              } rounded-lg capitalize font-semibold`}
              onClick={() => handleNavigate()}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweeter;
