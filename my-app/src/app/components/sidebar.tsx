import React from "react";

export default function Sidebar() {
  return (
    <>
      <aside className="hidden bg-white border-r-2 top-0 left-0 w-full max-w-[300px] lg:flex flex-col py-6 px-4 overflow-auto">
        <div className="mt-4">
          <ul className="mt-2 flex flex-col gap-4 p-2">
            <label htmlFor="" className="text-gray-500">Type</label>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />Sports
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />SUV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />MPV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />Home & Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />Sedan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />Coupe
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id=""/>Hatchback
              </a>
            </li>
            <label htmlFor="" className="text-gray-500">Capacity</label>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px] block   rounded  transition-all"
              >
                <input type="checkbox" name="" id="" />Groceries & Pets
              </a>
            </li>
            <label htmlFor="" className="text-gray-500">Price</label>
            <li>
              <input type="range" name="" id="" step={20} />
            </li>
            <span className="text-gray-500">Max. $100.00</span>
          </ul>
        </div>
      </aside>
    </>
  );
}
