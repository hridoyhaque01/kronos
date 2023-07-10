import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditPostText() {
  const { state } = useLocation();
  const { platform, payload, texts } = state || {};
  const navigate = useNavigate();
  // const [message, setMessage] = useState();
  console.log(platform);
  const handleNavigate = () => {
    navigate("/schedule", { state: { platform, payload, texts } });
  };
  return (
    <div>
      <h1 className="font-light text-3xl leading-normal pr-4">
        What text would you like to add to this image?
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-5 gap-5 items-start">
          {platform === "photoPost" ? (
            <>
              <div className="col-span-2"></div>
              <div className="col-span-3">
                <div className="cursor-pointer border border-white-10 rounded-md overflow-hidden relative">
                  <img
                    src={payload?.imageUrl}
                    alt=""
                    className="w-full h-56 bg-cover object-cover bg-center"
                  />
                  <div className="absolute w-full inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                    {texts}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>reel</div>
          )}
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-white-10 pt-3">
          <div>
            <p>step 3 of 5</p>
          </div>
          <div className="flex items-center gap-10 ">
            <button
              type="button"
              className={`px-6 py-3  bg-secondary text-white  rounded-lg capitalize font-semibold`}
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

export default EditPostText;
