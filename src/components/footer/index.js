import React from "react";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border-t-[#ddf1ff] bg-[#eff7fe] py-5 md:py-10 px-5 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 ">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-2 ">
              <div className="mb-3">
                <img src="/images/logo.png" alt="" width={50} height={50} />
              </div>
              <p className="text-[15px] text-[#223645e6]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece Lorem fugit on looked ipsum.
              </p>
              <div className=" flex gap-3 mt-2">
                <div className="w-10 h-10 bg-[#2c67ce] hover:bg-[#3b6cc2] flex justify-center items-center rounded-full cursor-pointer">
                  <FaFacebookF className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#1c9dea] hover:bg-[#3a91c7] flex justify-center items-center rounded-full cursor-pointer">
                  <FaTwitter className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#0e76a8] hover:bg-[#0e76a8] flex justify-center items-center rounded-full cursor-pointer">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#e4405e] hover:bg-[#e4405e] flex justify-center items-center rounded-full cursor-pointer">
                  <FaInstagram className="text-white" />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 p-2">
              <div>
                <p className="text-[20px] font-semibold text-[#223645] mb-2">
                  Useful Links
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Home</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> About us</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Services</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Blog</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 p-2">
              <div>
                <p className="text-[20px] font-semibold text-[#223645] mb-2">
                  Chitchat Help
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Privacy Policy </Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> FAQ</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> Support</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Contact</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Term</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 p-2">
              <div>
                <p className="text-[20px] font-semibold text-[#223645] mb-2">
                  Download For
                </p>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Windows</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Linux</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium"> IOS</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Android</Link>
                  </li>
                  <li className="flex items-center gap-1 hover:text-[#1c9dea] hover:pl-1 transition-[all_0.2s] cursor-pointer">
                    <IoIosArrowForward />
                    <Link to={"/"} className="text-[16px] font-medium">Mac</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 p-2">
              <div>
                <p className="text-[20px] font-semibold text-[#223645] mb-2">
                  Download Apps
                </p>
                <div className="flex flex-col gap-3">
                  <div className="bg-[#1c6ee9] py-4 px-5 rounded-md max-w-max">
                    <div className="flex gap-2 items-center">
                      <FaApple className="text-white text-[40px]" />
                      <div>
                        <p className="text-sm text-white">Available On The</p>
                        <p className="text-white">App Store</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fff] py-4 px-5 rounded-md max-w-max">
                    <div className="flex gap-2 items-center">
                      <FaGooglePlay className="text-black text-[40px]" />
                      <div>
                        <p className="text-sm text-[#647589]">
                          Available On The
                        </p>
                        <p className="text-[#647589]">Google Play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
