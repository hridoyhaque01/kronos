import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function Otp() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username: "john", email: "john@gmail.com" };
    dispatch(setUser(user));
    localStorage.setItem("auth", JSON.stringify(user));
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-xl bg-blackBold rounded-2xl overflow-hidden pb-6 md:pb-10 lg:pb-14">
      <div className="bg-fadeGradient h-20 text-center text-3xl font-bold font-openSans"></div>

      <div className="w-full max-w-[470px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86"
              height="86"
              viewBox="0 0 86 86"
              fill="none"
              className="w-16 h-16 md:w-20 md:h-20"
            >
              <path
                d="M7.16699 30.4584C7.16699 17.9167 14.3337 12.5417 25.0837 12.5417H60.917C71.667 12.5417 78.8337 17.9167 78.8337 30.4584V55.5417C78.8337 68.0834 71.667 73.4584 60.917 73.4584H25.0837"
                stroke="#B55B0C"
                strokeWidth="5.375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60.9163 32.25L49.7005 41.2083C46.0097 44.1467 39.9538 44.1467 36.263 41.2083L25.083 32.25"
                stroke="#B55B0C"
                strokeWidth="5.375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.16699 59.125H28.667"
                stroke="#B55B0C"
                strokeWidth="5.375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.16699 44.7917H17.917"
                stroke="#B55B0C"
                strokeWidth="5.375"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="text-center mt-6 md:mt-10 lg:mt-16 ">
            <h4 className="text-2xl sm:text-3xl lg:text-[40px] font-light">
              Please Verify Account
            </h4>
            <p className="text-xs sm:text-sm text-whiteRgb font-inter mt-4 md:mt-2">
              With this free mobile-ready sign-in template, you will ensure
              smooth and quick logins either mobile devices.
            </p>
          </div>
        </div>
        <form action="" className="mt-6 lg:mt-10 " onSubmit={handleSubmit}>
          <div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={"otpInputs"}
              containerStyle={"otpContainer"}
            />
          </div>

          {/* submit button  */}
          <div className="mt-6 md:mt-10">
            <button
              className=" w-full py-4 bg-orangeDark font-inter font-medium rounded-full text-center"
              type="submit"
            >
              Verify and Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
