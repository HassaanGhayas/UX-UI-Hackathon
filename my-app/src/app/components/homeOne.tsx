import React from "react";
import Car1 from "../../../public/images/cards/car.png";
import Car2 from "../../../public/images/cards/Car-1.png";
import Car3 from "../../../public/images/cards/Car-3.png";
import Car4 from "../../../public/images/cards/Car-4.png";
import Image from "next/image";

const cardData = [
  {
    carName: "Koenigsegg",
    carType: "Sport",
    carImg: Car1,
    carFuel: "90",
    pplCapacity: "2",
    carPrice: "$99.9",
  },
  {
    carName: "Nissan GT - R",
    carType: "Sport",
    carImg: Car2,
    carFuel: "90",
    pplCapacity: "4",
    carPrice: "$99.9",
  },
  {
    carName: "Rolls - Royce",
    carType: "Sport",
    carImg: Car3,
    carFuel: "90",
    pplCapacity: "2",
    carPrice: "$99.9",
  },
  {
    carName: "Rolls - Royce",
    carType: "Sport",
    carImg: Car4,
    carFuel: "90",
    pplCapacity: "2",
    carPrice: "$99.9",
  },
];

function HomeSectionOne() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col w-full max-w-screen-xl m-auto p-8 gap-10">
        <div className="sm:text-xl flex justify-between">
          <span className="text-gray-500">Popular Car</span>
          <span className="text-blue-500 ml-auto">View all</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
          {cardData.map((card, index) => {
            return (
              <div key={index} className="min-h-[300px] flex flex-col justify-between bg-white p-5 gap-12 rounded-xl">
                <div>
                  <div className="flex justify-between">
                    <span className="text-xl font-semibold">
                      {card.carName}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                    >
                      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                    </svg>
                  </div>
                  <span className="text-gray-500">{card.carType}</span>
                </div>

                <div className="flex justify-center">
                  <Image src={card.carImg} alt="" />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between text-sm">
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="gray"
                      >
                        <path d="M160-120v-640q0-33 23.5-56.5T240-840h240q33 0 56.5 23.5T560-760v280h40q33 0 56.5 23.5T680-400v180q0 17 11.5 28.5T720-180q17 0 28.5-11.5T760-220v-288q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v380q0 42-29 71t-71 29q-42 0-71-29t-29-71v-200h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-200h240v-280H240v280Zm240 0H240h240Z" />
                      </svg>
                      {card.carFuel}
                    </span>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="gray"
                      >
                        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-80q100 0 170-70t70-170q0-51-19-94.5T650-650l-57 57q22 22 34.5 51t12.5 62q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-33 12.5-62t34.5-51l-57-57q-32 32-51 75.5T240-480q0 100 70 170t170 70Zm-40-240h80v-240h-80v240Zm40 0Z" />
                      </svg>
                      Manual
                    </span>
                    <span className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="gray"
                      >
                        <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                      </svg>
                      {card.pplCapacity} People
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold">{card.carPrice}</span>/day
                    </div>
                    <a href="/Products">
                      <button
                        type="button"
                        className="w-fit px-5 py-2.5 rounded-sm border-none text-white text-base tracking-wider border outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700 relative z-10"
                      >
                        Rental Car
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeSectionOne;
