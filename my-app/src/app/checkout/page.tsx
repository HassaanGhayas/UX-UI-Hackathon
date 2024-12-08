import React from "react";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="bg-gray-100 w-full">
      <div className="w-full max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-3 justify-center">
        <div className="flex flex-col h-fit gap-5 p-5 rounded-lg w-full">
          <div className="flex flex-col h-fit gap-5 p-5 bg-white rounded-lg">
            {" "}
            <div>
              {" "}
              <h4 className="text-xl font-bold">Rental Summary</h4>{" "}
              <p className="text-gray-500">
                {" "}
                Prices may change depending on the length of the rental and the
                price of your rental car.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex gap-2">
              {" "}
              <Image
                src={"/details page/Products (1).png"}
                alt=""
                width={100}
              />{" "}
              <div className="flex flex-col gap-2">
                {" "}
                <span className="sm:text-2xl text-xl font-bold">
                  Nissan GT - R
                </span>{" "}
                <div className="flex sm:gap-1 text-small">
                  {" "}
                  <svg
                    className="w-5 fill-yellow-400"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />{" "}
                  </svg>{" "}
                  <svg
                    className="w-5 fill-yellow-400"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />{" "}
                  </svg>{" "}
                  <svg
                    className="w-5 fill-yellow-400"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />{" "}
                  </svg>{" "}
                  <svg
                    className="w-5 fill-yellow-400"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />{" "}
                  </svg>{" "}
                  <svg
                    className="w-5 fill-yellow-400"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />{" "}
                  </svg>{" "}
                  <span className="text-sm">440+</span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex flex-col gap-5">
              {" "}
              <div className="py-2 flex justify-between border-b-2">
                <span>Subtotal</span>
                <span>$80.00</span>{" "}
              </div>{" "}
              <div className="py-2 flex justify-between border-b-2">
                {" "}
                <span>Tax</span> <span>$0</span>{" "}
              </div>{" "}
              <div className="flex border-2 rounded-2xl overflow-hidden max-w-md mx-auto">
                {" "}
                <input
                  type="email"
                  placeholder="Apply Promo Code"
                  className="w-full outline-none bg-gray-100 text-gray-600 text-sm px-4 py-3"
                />{" "}
                <button
                  type="button"
                  className="flex items-center bg-gray-100 justify-center px-5 text-sm text-black"
                >
                  {" "}
                  Apply Now{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex justify-between items-center">
              {" "}
              <div className="w-[200px] flex flex-col">
                {" "}
                <span className="font-bold">Total Rented Price</span>{" "}
                <span className="text-sm text-gray-500">
                  Overall price and includes rental discount
                </span>{" "}
              </div>{" "}
              <span className="text-3xl font-bold">$80.00</span>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-10 p-5">
          <div>
            <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
              <div>
                <h1 className="text-xl font-bold">Billing Info</h1>
                <p className="flex justify-between text-gray-500">
                  Please enter your billing info{" "}
                  <span className="text-gray-500">Step 1of 4</span>
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 items-center">
                <div>
                  <label className="mb-2 text-base block">Home</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block">Phone Number</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block">Address</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block">Town/City</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
              <div>
                <h1 className="text-xl font-bold">Rental Info</h1>
                <p className="flex justify-between text-gray-500">
                  Please select your rental date{" "}
                  <span className="text-gray-500">Step 2 of 4</span>
                </p>
              </div>
              <div className="flex gap-2">
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
              <div className="grid sm:grid-cols-2 gap-5 items-center">
                <div>
                  <label className="mb-2 text-base block">Locations</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block">Date</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div>
                  <label className="mb-2 text-base block">Time</label>
                  <input
                    type="text"
                    placeholder="Large Input"
                    className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg flex flex-col gap-5">
                <h1 className="flex gap-2">
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
                </h1>
                <div className="grid sm:grid-cols-2 gap-5 items-center">
                  <div>
                    <label className="mb-2 text-base block">Locations</label>
                    <input
                      type="text"
                      placeholder="Large Input"
                      className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-base block">Date</label>
                    <input
                      type="text"
                      placeholder="Large Input"
                      className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-base block">Time</label>
                    <input
                      type="text"
                      placeholder="Large Input"
                      className="px-4 py-2.5 text-sm bg-gray-100 rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
              <div>
                <h1 className="text-xl font-bold">Payment Method</h1>
                <p className="flex justify-between text-gray-500">
                  Please enter your payment method{" "}
                  <span className="text-gray-500">Step 3 of 4</span>
                </p>
              </div>

              {/* Payment Details Section */}
              <div className="p-5 bg-gray-100 rounded-xl flex flex-col gap-5">
                <div className="flex justify-between col-span-2 gap-2">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="blue"
                    >
                      <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <span>Credit Card</span>
                  </div>
                  <Image src={"/details page/Visa.png"} alt="Visa" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 items-center">
                  <div>
                    <label className="mb-2 text-base block">Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter your card number"
                      className="px-4 py-2.5 text-sm bg-white rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-base block">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-2.5 text-sm bg-white rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-base block">Card Holder</label>
                    <input
                      type="text"
                      placeholder="Enter cardholder name"
                      className="px-4 py-2.5 text-sm bg-white rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-base block">CVC</label>
                    <input
                      type="text"
                      placeholder="Enter CVC"
                      className="px-4 py-2.5 text-sm bg-white rounded-md border border-gray-400 w-full outline-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Options Section */}
              <div className="p-4 w-full bg-gray-100 rounded-lg flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="radio" name="" id="" />
                  <span>Paypal</span>
                </div>
                <Image src={"/details page/Paypal.png"} alt="Paypal" />
              </div>

              <div className="p-4 w-full bg-gray-100 rounded-lg flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="radio" name="" id="" />
                  <span>Bitcoin</span>
                </div>
                <Image src={"/details page/Bitcoin.png"} alt="Bitcoin" />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white p-5 rounded-lg flex flex-col gap-5">
              <div>
                <h1 className="text-xl font-bold">Confirmation</h1>
                <p className="flex justify-between text-gray-500">
                  We are getting to the end. Just few clicks and your rental is
                  ready! <span className="text-gray-500">Step 4 of 4</span>
                </p>
              </div>
              <div className="p-4 w-full bg-gray-100 rounded-lg flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="text-sm">
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </span>
                </div>
              </div>

              <div className="p-4 w-full bg-gray-100 rounded-lg flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="text-sm">
                    I agree with our terms and conditions and privacy policy.
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-fit px-5 py-2.5 rounded-lg border-none text-white text-base tracking-wider border outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700 relative z-10"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
