import React from "react";
import Sidebar from "../components/sidebar";
import HomeSectionTwo from "../components/homeTwo";
import Image from "next/image";

export default function ProductDetails() {
  const data = [
    {
      name: "Alex Stanton",
      position: "Ceo at Bukalapak",
      description:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      pfp: "/avatars/ProfileOne.png",
    },
    {
      name: "Skylar Dias",
      position: "Ceo at Amazon",
      description:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      pfp: "/avatars/ProfileTwo.png",
    },
  ];

  return (
    <div className="flex bg-gray-100 max-w-screen-xl m-auto">
      <Sidebar />
      <div className="w-full flex flex-col gap-10 p-5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10">
          <div className="flex flex-col gap-5">
            <div>
              <Image src={"/details page/Products (4).png"} width={500} height={500} alt="" />
            </div>
            <div className="flex justify-between gap-2">
              <div>
                <Image src={"/details page/Products (2).png"} alt="" width={150} height={150} />
              </div>
              <div>
                <Image src={"/details page/Products (3).png"} alt="" width={150} height={150} />
              </div>
              <div>
                <Image src={"/details page/Products (1).png"} alt="" width={150} height={150} />
              </div>
            </div>
          </div>
          <div className="p-5 bg-white flex flex-col justify-between gap-5 rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Nissan GT - R</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
              </div>
              <div className="flex gap-2">
                <svg
                  className="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 stroke-gray-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <span className="text-sm">440+ Reviewer</span>
              </div>
            </div>
            <div className="text-gray-500">
              NISMO has become the embodiment of Nissan&apos;s outstanding
              performance, inspired by the most unforgiving proving ground, the
              &apos;race track&apos;.
            </div>
            <div className="flex justify-between text-sm gap-2">
              <div className="flex flex-col text-gray-500">
                <span>Type Car</span>
                <span>Steering</span>
              </div>
              <div className="flex flex-col">
                <span>Sport</span>
                <span>Manual</span>
              </div>
              <div className="flex flex-col text-gray-500">
                <span>Capacity</span>
                <span>Gasoline </span>
              </div>
              <div className="flex flex-col">
                <span>2 Person</span>
                <span>70L</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <div>
                <span className="font-bold sm:text-3xl text-xl">$80.00</span>
                /day
              </div>
              <a href="/checkout">
              <button
                type="button"
                className="w-fit px-5 py-2.5 rounded-sm border-none text-white text-sm tracking-wider border outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700 relative z-10"
              >
                Rent Now
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 flex flex-col gap-5">
          <div className="flex gap-2">
            <span className="text-xl font-bold">Reviews</span>
            <span className="h-8 w-12 bg-blue-700 text-white rounded-md inline-flex items-center justify-center">
              13
            </span>
          </div>
          {data.map((person, index) => {
            return (
              <div key={index} className="flex gap-2">
                <Image
                  src={person.pfp}
                  className="w-14 h-14 rounded-full mx-auto object-contain"
                  alt=""
                  height={14}
                  width={14}
                />
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{person.name}</h3>
                    <div className="inline-flex">
                      <svg
                        className="w-5 fill-yellow-400"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-5 fill-yellow-400"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-5 fill-yellow-400"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-5 fill-yellow-400"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        className="w-5 fill-yellow-400"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-gray-500">{person.position}</h4>
                  <p className={`text-sm text-gray-500`}>
                    {person.description.slice(0, 200)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <HomeSectionTwo />
      </div>
    </div>
  );
}
