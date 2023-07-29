import React from "react";
import { Link } from "react-router-dom";

function Pricing({ width }) {
  return (
    <section className="px-4 pt-8 md:pt-14 lg:pt-28 font-openSans">
      <div className={width}>
        <div className="sm:max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-[44px]  font-semibold">
            Choose your plan
          </h2>
          <p className="text-xs md:text-lg text-fade  t mt-5">
            Whether you’re an individual didital marketer or a corporation
            trying to scale your content, we have a plan that fits for your
            needs.
          </p>
        </div>

        <div className="mt-5 sm:mt-9">
          <div className="flex items-center justify-center gap-4 mb-5 md:mb-12">
            <span className="text-base sm:text-xl font-bold">Monthly</span>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hs-small-switch"
                className="relative shrink-0 w-10 h-6 bg-orangeDark rounded-full cursor-pointer transition-colors ease-in-out duration-200  appearance-none before:inline-block before:w-4 before:h-4 before:bg-white before:translate-y-0.5 before:translate-x-1 checked:before:translate-x-5 before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
              />
            </div>
            <span className="text-base sm:text-xl font-bold">Yearly</span>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-5">
            {/* basic   */}
            <div className="w-full max-w-[318px] border border-fadeHigh hover:border-orangeDark rounded-xl p-8 duration-300 flex flex-col justify-between">
              <div>
                <h2 className="text-[28px] font-bold">Basic</h2>
                <h1 className="text-[28px] font-bold my-6">
                  <span className="text-orangeDark text-3xl">$99</span> / mo
                </h1>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>AI post creation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Share to social media</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Post scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/"
                  className="flex items-center justify-center font-semibold py-3 px-6 border border-orangeDark  hover:bg-orangeDark duration-300 rounded-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
            {/* pro   */}

            <div className="w-full max-w-[318px] bg-orangeGradient border-2 border-orangeDark rounded-xl p-8 duration-300 flex flex-col justify-between scale-y-105 overflow-hidden relative z-10">
              <div>
                <h2 className="text-[28px] font-bold">Pro</h2>
                <h1 className="text-[28px] font-bold my-6">
                  <span className="text-orangeDark text-3xl">$149</span> / mo
                </h1>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>AI post creation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Share to social media</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Post scheduling</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Analytic reports</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Analytic learning</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/"
                  className="flex items-center justify-center font-semibold py-3 px-6 bg-orangeDark  duration-300 rounded-lg"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="py-3 bg-orangeDark text-center absolute top-6 -right-12 w-52 rotate-45 z-50">
                <span className="text-sm font-bold ">Recommended</span>
              </div>
            </div>
            {/* Enterprise  */}

            <div className="w-full max-w-[318px] border border-fadeHigh hover:border-orangeDark rounded-xl p-8 duration-300 flex flex-col justify-between">
              <div>
                <h2 className="text-[28px] font-bold">Enterprise</h2>
                <h1 className="text-[28px] font-bold my-6">
                  <span className="text-orangeDark text-3xl">$499</span> / mo
                </h1>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>AI post creation</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Share to social media</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Post scheduling</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Analytic reports</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Analytic learning</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Customized protocols</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm font-semibold">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM16.2071 8.70711C16.5976 8.31658 16.5976 7.68342 16.2071 7.29289C15.8166 6.90237 15.1834 6.90237 14.7929 7.29289L9.5 12.5858L7.20711 10.2929C6.81658 9.90237 6.18342 9.90237 5.79289 10.2929C5.40237 10.6834 5.40237 11.3166 5.79289 11.7071L8.79289 14.7071C9.18342 15.0976 9.81658 15.0976 10.2071 14.7071L16.2071 8.70711Z"
                          fill="#B55B0C"
                        />
                      </svg>
                    </span>
                    <span>Large scale</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link
                  to="/"
                  className="flex items-center justify-center font-semibold py-3 px-6 border border-orangeDark  hover:bg-orangeDark duration-300 rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
