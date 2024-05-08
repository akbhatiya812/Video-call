import React from "react";
import { IoMdCall } from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { MdCallEnd } from "react-icons/md";
import { IoCall } from "react-icons/io5";


const AudioAndVideo = () => {
  return (
    <>
      <div className="py-[100px] bg-[linear-gradient(58deg,rgba(0,202,243,1)_0%,rgba(0,144,255,1)_100%)]">
        <div className="max-w-[1600px] w-full mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className="text-[calc(18px+30*(100vw-320px)/1600)] font-black text-white">
                Audio & Video
              </h1>
              <p className="text-[calc(13px+3*(100vw-320px)/1600)] text-white">
                Chitchat comes with Audio call and Video call, Meet Your friend
              </p>
            </div>
          </div>
          <div className="flex justify-center my-10">
            <div>
              <div className="relative">
                <div className="px-2">
                  <img src="/images/videocall_bg.jpg" alt="" className="max-w-full"/>
                </div>
                <div className="absolute top-[6%] left-[3%] flex gap-4 items-center">
                  <div className="flex flex-wrap items-center ml-[10px]">
                    <div className="relative z-0  rounded-full transition h-[50px] w-[50px] overflow-hidden">
                      <img
                        src="/images/user1.jpg"
                        className="max-w-full w-full object-cover"
                      />
                    </div>
                    <div className="relative z-0 -ml-[10px]  rounded-full transition h-[50px] w-[50px] overflow-hidden">
                      <img
                        src="/images/user2.jpg"
                        className="max-w-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[#223645] text-[calc(13px+1*(100vw-320px)/1600)] font-bold">
                      Josephin water
                    </p>
                    <p className="text-[10px] text-[#647589] font-semibold">
                      America ,California
                    </p>
                  </div>
                </div>
                <div className="bg-white p-2 rounded-full absolute right-[5%] top-[6%]">
                  <RiFullscreenFill className="text-lg" />
                </div>
                <div className="absolute bottom-[10%]  flex justify-center m-auto left-0 right-0">
                  <div className="flex gap-5">
                    <div className="p-2 sm:p-3 md:p-5 bg-[#3fcc35] rounded-full is-animate">
                      <IoCall className="text-white text-[20px] sm:text-[30px] up-call" />
                    </div>
                    <div className="p-2 sm:p-3 md:p-5 bg-[#ff4e2b] rounded-full">
                      <IoCall className="text-white text-[20px] sm:text-[30px] rotate-[133deg]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioAndVideo;
