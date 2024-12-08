import React from "react";
import Sidebar from "../components/sidebar";
import HomeSectionTwo from "../components/homeTwo";

export default function ProductDetails() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="w-full">
        <div className="flex w-full relative justify-between max-w-screen-xl gap-5 lg:flex-row flex-col p-5">
          <div className="px-5 sm:px-10 py-5 flex flex-col gap-2 bg-white rounded-xl w-full">
            <div className="flex font-semibold gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="blue"
              >
                <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              Pick - Up
            </div>
            <div className="flex justify-between gap-2">
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Locations</span>
                <div className="flex text-[12px]">
                  Select your city
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Date</span>
                <div className="flex text-[12px]">
                  Select your date
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Time</span>
                <div className="flex text-[12px]">
                  Select your time
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-600 m-auto w-fit h-fit p-4 rounded-lg absolute inset-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="white"
            >
              <path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z" />
            </svg>
          </div>
          <div className="px-5 sm:px-10 py-5 flex flex-col gap-2 bg-white rounded-xl w-full">
            <div className="flex font-semibold gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="blue"
              >
                <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
              Drop - Off
            </div>
            <div className="flex justify-between gap-2">
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Locations</span>
                <div className="flex text-[12px]">
                  Select your city
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Date</span>
                <div className="flex text-[12px]">
                  Select your date
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
              <div className="border-r-[1px] pr-2">
                <span className="font-semibold">Time</span>
                <div className="flex text-[12px]">
                  Select your time
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeSectionTwo />
      </div>
    </div>
  );
}
