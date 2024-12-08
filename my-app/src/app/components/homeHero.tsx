import React from "react";
import Image from "next/image";
export default function HomeHeroSection() {
  const heroSecs = [
    {
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing a car rental safely and reliably. Of course at a low price.",
      imageUrl: "/hero/HeroCar (1).png",
      bgColor: "bg-sky-400",
      additionalSettings: "flex",
    },
    {
      title: "Easy way to rent a car at a low price",
      description:
        "Providing cheap car rental services and safe and comfortable facilities.",
      imageUrl: "/hero/HeroCar (2).png",
      bgColor: "bg-blue-500",
      additionalSettings: "md:flex hidden",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 md:px-10 px-4 flex flex-col gap-10 items-center">
      <div className="md:hidden flex max-w-md w-full px-5 py-2 gap-3 rounded-full border-2 border-gray-400 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="24"
              className="fill-gray-600"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="fill-gray-600"
            >
              <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
            </svg>
          </div>
      <div key={2} className="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 relative max-w-screen-xl m-auto">
        {heroSecs.map((hero, index) => {
          return (
            <>
              <div
                key={index}
                className={`p-8 ${hero.bgColor} min-h-[300px] rounded-xl ${hero.additionalSettings} flex-col relative z-[2] overflow-hidden`}
              >
                <Image
                  src={hero.imageUrl}
                  alt=""
                  className="absolute bottom-0 pb-2 right-2"
                  width={300}
                  height={300}
                />
                <div className="max-w-[250px] flex flex-col gap-5 relative z-10 text-white">
                  <div className="flex flex-col gap-5 text-white">
                    <h3 className="text-2xl font-semibold">{hero.title}</h3>
                    <p>{hero.description}</p>
                  </div>
                  <a href="/RentalCar">
                  <button
                    type="button"
                    className="w-fit px-5 py-2.5 rounded-sm border-none text-white text-base tracking-wider border outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700 relative z-10"
                  >
                    Rental Car
                  </button>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex w-full relative items-center justify-between max-w-screen-xl m-auto gap-5 lg:flex-row flex-col">
        <div className="px-5 sm:px-10 py-5 flex flex-col gap-2 bg-white rounded-xl w-full">
          <div className="flex font-semibold gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Pick - Up</div>
          <div className="flex justify-between gap-2">
            <div className="border-r-2 pr-2"><span className="font-semibold">Locations</span><div className="flex text-[12px]">Select your city<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
            <div className="border-r-2 pr-2"><span className="font-semibold">Date</span><div className="flex text-[12px]">Select your date<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
            <div className="border-r-2 pr-2"><span className="font-semibold">Time</span><div className="flex text-[12px]">Select your time<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
          </div>
        </div>
        <div className="w-fit bg-blue-600 h-fit p-4 rounded-lg absolute inset-0 m-auto"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg></div>
        <div className="px-5 sm:px-10 py-5 flex flex-col gap-2 bg-white rounded-xl w-full">
          <div className="flex font-semibold gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="blue"><path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>Drop - Off</div>
          <div className="flex justify-between gap-2">
            <div className="border-r-2 pr-2"><span className="font-semibold">Locations</span><div className="flex text-[12px]">Select your city<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
            <div className="border-r-2 pr-2"><span className="font-semibold">Date</span><div className="flex text-[12px]">Select your date<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
            <div className="border-r-2 pr-2"><span className="font-semibold">Time</span><div className="flex text-[12px]">Select your time<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
