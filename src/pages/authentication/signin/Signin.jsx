import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../../features/auth/authSlice";

function Signin() {
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
    <div className="w-full max-w-xl bg-blackBold rounded-2xl overflow-hidden pb-6">
      <div className="bg-fadeGradient py-5 text-center text-3xl font-bold font-openSans">
        Log In
      </div>
      <div className="w-full max-w-[378px] mx-auto mt-4 px-6">
        <p className="font-inter text-sm text-whiteRgb text-center">
          With this free mobile-ready sign-in template, you will ensure smooth
          and quick logins either mobile devices.
        </p>
      </div>
      <div className="w-full max-w-[424px] mx-auto px-6">
        <form action="" className="mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold text-base">Username</p>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 20C3.45 20 2.97933 19.8043 2.588 19.413C2.196 19.021 2 18.55 2 18V6C2 5.45 2.196 4.97933 2.588 4.588C2.97933 4.196 3.45 4 4 4H20C20.55 4 21.021 4.196 21.413 4.588C21.8043 4.97933 22 5.45 22 6V18C22 18.55 21.8043 19.021 21.413 19.413C21.021 19.8043 20.55 20 20 20H4ZM12 12.825C12.0833 12.825 12.1707 12.8123 12.262 12.787C12.354 12.7623 12.4417 12.725 12.525 12.675L19.6 8.25C19.7333 8.16667 19.8333 8.06267 19.9 7.938C19.9667 7.81267 20 7.675 20 7.525C20 7.19167 19.8583 6.94167 19.575 6.775C19.2917 6.60833 19 6.61667 18.7 6.8L12 11L5.3 6.8C5 6.61667 4.70833 6.61233 4.425 6.787C4.14167 6.96233 4 7.20833 4 7.525C4 7.69167 4.03333 7.83733 4.1 7.962C4.16667 8.08733 4.26667 8.18333 4.4 8.25L11.475 12.675C11.5583 12.725 11.646 12.7623 11.738 12.787C11.8293 12.8123 11.9167 12.825 12 12.825Z"
                      fill="#B8B8B8"
                    />
                  </svg>
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="pl-12 placeholer:text-fadeMid text-sm w-full border border-white rounded-md p-3 flex items-center gap-5 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-semibold text-base">Password</p>
              <div className="relative">
                <span className="absolute top-1/2 left-3 -translate-y-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M6 22.8159C5.45 22.8159 4.97933 22.6203 4.588 22.2289C4.196 21.8369 4 21.3659 4 20.8159V10.8159C4 10.2659 4.196 9.79492 4.588 9.40292C4.97933 9.01158 5.45 8.81592 6 8.81592H7V6.81592C7 5.43258 7.48767 4.25325 8.463 3.27792C9.43767 2.30325 10.6167 1.81592 12 1.81592C13.3833 1.81592 14.5627 2.30325 15.538 3.27792C16.5127 4.25325 17 5.43258 17 6.81592V8.81592H18C18.55 8.81592 19.021 9.01158 19.413 9.40292C19.8043 9.79492 20 10.2659 20 10.8159V20.8159C20 21.3659 19.8043 21.8369 19.413 22.2289C19.021 22.6203 18.55 22.8159 18 22.8159H6ZM12 17.8159C12.55 17.8159 13.021 17.6203 13.413 17.2289C13.8043 16.8369 14 16.3659 14 15.8159C14 15.2659 13.8043 14.7949 13.413 14.4029C13.021 14.0116 12.55 13.8159 12 13.8159C11.45 13.8159 10.9793 14.0116 10.588 14.4029C10.196 14.7949 10 15.2659 10 15.8159C10 16.3659 10.196 16.8369 10.588 17.2289C10.9793 17.6203 11.45 17.8159 12 17.8159ZM9 8.81592H15V6.81592C15 5.98258 14.7083 5.27425 14.125 4.69092C13.5417 4.10758 12.8333 3.81592 12 3.81592C11.1667 3.81592 10.4583 4.10758 9.875 4.69092C9.29167 5.27425 9 5.98258 9 6.81592V8.81592Z"
                      fill="#B8B8B8"
                    />
                  </svg>
                </span>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="pl-12 placeholer:text-fadeMid text-sm w-full border border-white rounded-md p-3 flex items-center gap-5 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 max-w-max">
                <input type="checkbox" id="check" className="bg-transparent" />
                <label htmlFor="check" className="text-xs text-whiteRgb">
                  Remember Me
                </label>
              </div>
              <div>
                <Link to="/" className="text-xs underline">
                  Forget Password?
                </Link>
              </div>
            </div>
            <div className="">
              <button
                className=" w-full py-4 bg-orangeDark font-inter font-medium rounded-full text-center"
                type="submit"
              >
                Log In
              </button>
            </div>
            <div className="">
              <div className="py-3 flex items-center text-base before:flex-[1_1_0%] before:border-t before:border-fadeLightRgb before:mr-6 after:flex-[1_1_0%] after:border-t after:border-fadeLightRgb after:ml-6 text-whiteRegRgb">
                Or Sign Up with
              </div>
            </div>
          </div>
        </form>
        <div className="mt-6 md:mt-12">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link to="/">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_98_2404)">
                      <path
                        d="M16.0018 31.9997C24.8383 31.9997 32.0017 24.8363 32.0017 15.9999C32.0017 7.16338 24.8383 0 16.0018 0C7.16533 0 0.00195312 7.16338 0.00195312 15.9999C0.00195312 24.8363 7.16533 31.9997 16.0018 31.9997Z"
                        fill="#292D32"
                      />
                      <path
                        d="M25.803 11.4985C25.1174 11.8025 24.3798 12.0082 23.6063 12.1C24.3961 11.6268 25.0022 10.8782 25.2882 9.98459C24.5492 10.423 23.7304 10.741 22.8596 10.9124C22.162 10.1694 21.168 9.70508 20.0674 9.70508C17.9557 9.70508 16.243 11.4178 16.243 13.5295C16.243 13.8293 16.2769 14.121 16.3425 14.4011C13.1641 14.2417 10.3459 12.7192 8.45954 10.4047C8.13041 10.9694 7.9416 11.6268 7.9416 12.3276C7.9416 13.6541 8.61726 14.8252 9.64289 15.5109C9.01628 15.4912 8.42617 15.3192 7.91079 15.032C7.91051 15.0483 7.91051 15.0645 7.91051 15.0805C7.91051 16.9335 9.22933 18.4791 10.9785 18.8302C10.658 18.918 10.3194 18.9645 9.97117 18.9645C9.72417 18.9645 9.48488 18.9408 9.25158 18.8963C9.73815 20.4154 11.1502 21.5212 12.8242 21.5522C11.515 22.5781 9.86621 23.1894 8.07393 23.1894C7.7659 23.1894 7.46073 23.1714 7.16211 23.1357C8.85371 24.2213 10.8645 24.8541 13.0241 24.8541C20.0586 24.8541 23.9055 19.0267 23.9055 13.9724C23.9055 13.8067 23.9018 13.6416 23.8944 13.4779C24.6422 12.9388 25.2905 12.2654 25.803 11.4985Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_2404">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.00195312)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_98_2410)">
                      <path
                        d="M16.002 32C24.8385 32 32.002 24.8366 32.002 16C32.002 7.16344 24.8385 0 16.002 0C7.1654 0 0.00195312 7.16344 0.00195312 16C0.00195312 24.8366 7.1654 32 16.002 32Z"
                        fill="#292D32"
                      />
                      <path
                        d="M25.5603 17.2868V23.8832H21.7359V17.7289C21.7359 16.1836 21.1837 15.1283 19.799 15.1283C18.7423 15.1283 18.1145 15.8388 17.8373 16.5267C17.7366 16.7725 17.7106 17.114 17.7106 17.4588V23.883H13.8859C13.8859 23.883 13.9373 13.4595 13.8859 12.3805H17.7109V14.0105C17.7032 14.0234 17.6924 14.0359 17.6856 14.0482H17.7109V14.0105C18.2192 13.2285 19.1256 12.1104 21.1578 12.1104C23.6739 12.1104 25.5603 13.7544 25.5603 17.2868ZM9.88492 6.83594C8.57663 6.83594 7.7207 7.69472 7.7207 8.82303C7.7207 9.92739 8.55182 10.811 9.83472 10.811H9.85953C11.1935 10.811 12.0229 9.92739 12.0229 8.82303C11.9975 7.69472 11.1935 6.83594 9.88492 6.83594ZM7.94802 23.8832H11.7713V12.3805H7.94802V23.8832Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_2410">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.00195312)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_98_2416)">
                      <path
                        d="M16.002 32C24.8385 32 32.002 24.8366 32.002 16C32.002 7.16344 24.8385 0 16.002 0C7.1654 0 0.00195312 7.16344 0.00195312 16C0.00195312 24.8366 7.1654 32 16.002 32Z"
                        fill="#292D32"
                      />
                      <path
                        d="M24.323 14.4351H16.9804C16.6566 14.4351 16.3945 14.6972 16.3945 15.0209V17.3682C16.3945 17.692 16.6566 17.9541 16.9804 17.9541H21.1161C20.6652 19.1297 19.8172 20.1126 18.7418 20.737L20.5033 23.7896C23.3286 22.1554 25.0014 19.2839 25.0014 16.0732C25.0014 15.6145 24.9667 15.2869 24.9011 14.9207C24.8472 14.6393 24.6044 14.4351 24.323 14.4351Z"
                        fill="white"
                      />
                      <path
                        d="M16.0016 21.477C13.9781 21.477 12.2128 20.3708 11.2646 18.7366L8.21191 20.4942C9.76523 23.1884 12.6753 24.9999 16.0016 24.9999C17.6359 24.9999 19.1738 24.5605 20.5035 23.7935V23.7897L18.7421 20.737C17.9327 21.2072 16.9999 21.477 16.0016 21.477Z"
                        fill="white"
                      />
                      <path
                        d="M20.5 23.7936V23.7897L18.7386 20.7371C17.933 21.2034 17.0002 21.4771 16.002 21.4771V25C17.6362 25 19.1741 24.5606 20.5 23.7936Z"
                        fill="white"
                      />
                      <path
                        d="M10.5249 16.0001C10.5249 15.0018 10.7985 14.069 11.2649 13.2635L8.21223 11.5059C7.44135 12.8279 7.00195 14.362 7.00195 16.0001C7.00195 17.6382 7.44135 19.1722 8.21223 20.4943L11.2649 18.7367C10.7947 17.9311 10.5249 16.9984 10.5249 16.0001Z"
                        fill="white"
                      />
                      <path
                        d="M16.0016 10.5229C17.3198 10.5229 18.5339 10.9931 19.4783 11.7717C19.7134 11.9644 20.0526 11.949 20.2646 11.737L21.9258 10.0758C22.1686 9.83297 22.1494 9.43597 21.8911 9.21241C20.307 7.83255 18.2449 7 16.0016 7C12.6753 7 9.76523 8.81156 8.21191 11.5058L11.2646 13.2634C12.2128 11.6291 13.9781 10.5229 16.0016 10.5229Z"
                        fill="white"
                      />
                      <path
                        d="M19.4786 11.7717C19.7137 11.9644 20.0529 11.949 20.2649 11.737L21.9261 10.0758C22.169 9.83297 22.1497 9.43597 21.8914 9.21241C20.3073 7.83255 18.2452 7 16.002 7V10.5229C17.3202 10.5229 18.5343 10.9893 19.4786 11.7717Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_2416">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.00195312)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_98_2427)">
                      <path
                        d="M32.002 16C32.002 23.9863 26.1507 30.6056 18.502 31.8056V20.625H22.2301L22.9395 16H18.502V12.9988C18.502 11.7331 19.122 10.5 21.1095 10.5H23.127V6.5625C23.127 6.5625 21.2957 6.25 19.5451 6.25C15.8907 6.25 13.502 8.465 13.502 12.475V16H9.43945V20.625H13.502V31.8056C5.8532 30.6056 0.00195312 23.9863 0.00195312 16C0.00195312 7.16375 7.1657 0 16.002 0C24.8382 0 32.002 7.16375 32.002 16Z"
                        fill="#292D32"
                      />
                      <path
                        d="M22.2301 20.625L22.9395 16H18.502V12.9987C18.502 11.7334 19.1218 10.5 21.1094 10.5H23.127V6.5625C23.127 6.5625 21.296 6.25 19.5454 6.25C15.8906 6.25 13.502 8.465 13.502 12.475V16H9.43945V20.625H13.502V31.8056C14.3166 31.9334 15.1515 32 16.002 32C16.8525 32 17.6873 31.9334 18.502 31.8056V20.625H22.2301Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_98_2427">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0.00195312)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
          <p className="text-center text-sm font-semibold mt-6 md:mt-12">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orangeDark">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
