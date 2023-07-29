import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../../assets/getAssets";

function Footer({ width }) {
  return (
    <footer className="">
      <div className=" px-4">
        <div className={width}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 font-openSans">
            <div>
              <div>
                <img src={logo} alt="" className="w-28" />
              </div>
              <h4 className="text-whiteRgb text-base font-light mt-1 mb-6">
                Design tools from the future.
              </h4>
              <Link
                to=""
                className="inline-block py-2 px-5 text-xs leading-6 font-semibold bg-fadeMidRgb border border-fadeMidRgb rounded-full"
              >
                Join the future
              </Link>
            </div>
            <div>
              <h4 className="text-base font-semibold">Products</h4>
              <ul className="text-sm text-fadeReg flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-3 lg:mt-4">
                <li>
                  <Link to="">Genius</Link>
                </li>
                <li>
                  <Link to="">Magician</Link>
                </li>
                <li>
                  <Link to="">Automator</Link>
                </li>
                <li>
                  <Link to="">UI-AI</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold">Company</h4>
              <ul className="text-sm text-fadeReg flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-3 lg:mt-4">
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Careers</Link>
                </li>
                <li>
                  <Link to="">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold">Legal</h4>
              <ul className="text-sm text-fadeReg flex flex-col gap-2 sm:gap-3 lg:gap-4 mt-3 lg:mt-4">
                <li>
                  <Link to="">Privacy</Link>
                </li>
                <li>
                  <Link to="">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-copyBg bg-cover bg-center px-4">
        <div className={width}>
          <div className="flex justify-between items-center py-10">
            <div>
              <p>©2023 Kronos.ai</p>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5_18156)">
                        <mask
                          id="mask0_5_18156"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <path d="M24 0H0V24H24V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_5_18156)">
                          <mask
                            id="mask1_5_18156"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <path d="M24 0H0V24H24V0Z" fill="white" />
                          </mask>
                          <g mask="url(#mask1_5_18156)">
                            <path
                              d="M8.66082 19.6341C15.4536 19.6341 19.1683 14.0045 19.1683 9.12273C19.1683 8.96285 19.1651 8.80371 19.1579 8.64522C19.8807 8.12202 20.5045 7.47421 21 6.73217C20.3383 7.02646 19.6262 7.22454 18.8792 7.31384C19.6417 6.85649 20.227 6.13294 20.5032 5.27048C19.7783 5.70068 18.9852 6.00395 18.1582 6.16722C17.4843 5.44912 16.5248 5 15.4625 5C13.4231 5 11.7693 6.65446 11.7693 8.69384C11.7693 8.98378 11.8017 9.26571 11.8651 9.53622C8.79574 9.38172 6.07409 7.91165 4.25261 5.67632C3.92454 6.24011 3.75199 6.88087 3.75256 7.53317C3.75256 8.8149 4.40451 9.94638 5.39598 10.6084C4.80951 10.5904 4.23592 10.432 3.72344 10.1463C3.72289 10.1618 3.72289 10.1769 3.72289 10.1935C3.72289 11.9826 4.99584 13.4764 6.68565 13.8149C6.36828 13.9014 6.04079 13.9451 5.71185 13.9449C5.4743 13.9449 5.24279 13.9215 5.01779 13.8783C5.48795 15.3462 6.85127 16.4144 8.46765 16.4442C7.20366 17.4353 5.61143 18.0256 3.8809 18.0256C3.58652 18.0258 3.29237 18.0088 3 17.9744C4.63441 19.0224 6.57494 19.6341 8.66082 19.6341Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_5_18156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                    >
                      <path
                        d="M18.3633 2H5.63672C4.18295 2 3 3.18295 3 4.63672V17.3633C3 18.817 4.18295 20 5.63672 20H10.9453V13.6367H8.83594V10.4727H10.9453V8.32812C10.9453 6.58336 12.3646 5.16406 14.1094 5.16406H17.3086V8.32812H14.1094V10.4727H17.3086L16.7812 13.6367H14.1094V20H18.3633C19.817 20 21 18.817 21 17.3633V4.63672C21 3.18295 19.817 2 18.3633 2Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_5_18182)">
                        <mask
                          id="mask0_5_18182"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <path d="M24 0H0V24H24V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_5_18182)">
                          <mask
                            id="mask1_5_18182"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <path d="M24 0H0V24H24V0Z" fill="white" />
                          </mask>
                          <g mask="url(#mask1_5_18182)">
                            <path
                              d="M12.0007 4C9.82806 4 9.55539 4.0095 8.70205 4.04833C7.85037 4.08733 7.26903 4.22217 6.76036 4.42C6.23419 4.62433 5.78785 4.89767 5.34318 5.3425C4.89818 5.78717 4.62484 6.2335 4.41984 6.7595C4.2215 7.26833 4.0865 7.84983 4.04817 8.70117C4.01 9.5545 4 9.82733 4 12C4 14.1727 4.00967 14.4445 4.04833 15.2978C4.0875 16.1495 4.22234 16.7308 4.42 17.2395C4.62451 17.7657 4.89784 18.212 5.34268 18.6567C5.78719 19.1017 6.23352 19.3757 6.75936 19.58C7.26837 19.7778 7.84987 19.9127 8.70138 19.9517C9.55472 19.9905 9.82723 20 11.9998 20C14.1726 20 14.4444 19.9905 15.2978 19.9517C16.1495 19.9127 16.7315 19.7778 17.2405 19.58C17.7665 19.3757 18.2121 19.1017 18.6567 18.6567C19.1017 18.212 19.375 17.7657 19.58 17.2397C19.7767 16.7308 19.9117 16.1493 19.9517 15.298C19.99 14.4447 20 14.1727 20 12C20 9.82733 19.99 9.55467 19.9517 8.70133C19.9117 7.84967 19.7767 7.26833 19.58 6.75967C19.375 6.2335 19.1017 5.78717 18.6567 5.3425C18.2116 4.8975 17.7666 4.62417 17.24 4.42C16.73 4.22217 16.1483 4.08733 15.2966 4.04833C14.4433 4.0095 14.1716 4 11.9982 4H12.0007ZM11.2831 5.44167C11.4961 5.44133 11.7337 5.44167 12.0007 5.44167C14.1368 5.44167 14.3899 5.44933 15.2335 5.48767C16.0135 5.52333 16.4368 5.65367 16.7188 5.76317C17.0921 5.90817 17.3583 6.0815 17.6381 6.3615C17.9181 6.6415 18.0915 6.90817 18.2368 7.2815C18.3463 7.56317 18.4768 7.9865 18.5123 8.7665C18.5507 9.60983 18.559 9.86317 18.559 11.9982C18.559 14.1332 18.5507 14.3865 18.5123 15.2298C18.4767 16.0098 18.3463 16.4332 18.2368 16.7148C18.0918 17.0882 17.9181 17.354 17.6381 17.6338C17.3581 17.9138 17.0923 18.0872 16.7188 18.2322C16.4371 18.3422 16.0135 18.4722 15.2335 18.5078C14.3901 18.5462 14.1368 18.5545 12.0007 18.5545C9.86456 18.5545 9.61139 18.5462 8.76805 18.5078C7.98804 18.4718 7.5647 18.3415 7.28253 18.232C6.9092 18.087 6.64253 17.9137 6.36252 17.6337C6.08252 17.3537 5.90919 17.0877 5.76385 16.7142C5.65435 16.4325 5.52385 16.0092 5.48835 15.2292C5.45002 14.3858 5.44235 14.1325 5.44235 11.9962C5.44235 9.85983 5.45002 9.60783 5.48835 8.7645C5.52402 7.9845 5.65435 7.56117 5.76385 7.27917C5.90885 6.90583 6.08252 6.63917 6.36252 6.35917C6.64253 6.07917 6.9092 5.90583 7.28253 5.7605C7.56454 5.6505 7.98804 5.5205 8.76805 5.48467C9.50606 5.45133 9.79206 5.44133 11.2831 5.43967V5.44167ZM16.2711 6.77C15.7411 6.77 15.3111 7.1995 15.3111 7.72967C15.3111 8.25967 15.7411 8.68967 16.2711 8.68967C16.8011 8.68967 17.2311 8.25967 17.2311 7.72967C17.2311 7.19967 16.8011 6.77 16.2711 6.77ZM12.0007 7.89167C9.73189 7.89167 7.89237 9.73117 7.89237 12C7.89237 14.2688 9.73189 16.1075 12.0007 16.1075C14.2696 16.1075 16.1085 14.2688 16.1085 12C16.1085 9.73117 14.2695 7.89167 12.0007 7.89167ZM12.0007 9.33333C13.4734 9.33333 14.6674 10.5272 14.6674 12C14.6674 13.4727 13.4734 14.6667 12.0007 14.6667C10.5279 14.6667 9.33406 13.4727 9.33406 12C9.33406 10.5272 10.5279 9.33333 12.0007 9.33333Z"
                              fill="white"
                            />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_5_18182">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
