import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="tracking-wide px-10 pt-12 pb-6 max-w-screen-xl m-auto">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-md">
            <span className="text-3xl font-semibold text-blue-600">MORENT</span>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed text-sm max-w-[280px]">
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>
        <div className="flex sm:gap-14 gap-5 flex-wrap">
          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
              About
            </h4>
            <ul className="space-y-4 mt-6">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
              Community
            </h4>

            <ul className="space-y-4 mt-6">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          <div className="max-lg:min-w-[140px]">
            <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
              Socials
            </h4>

            <ul className="space-y-4 mt-6">
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gray-800 text-gray-600 text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>

        <hr className="mt-10 mb-6 border-gray-300" />

        <div className="flex flex-wrap max-md:flex-col gap-4">
          <p className="text-gray-600 text-sm md:mr-auto">
            ©2022 MORENT. All rights reserved
          </p>
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <a href="#" className="hover:text-gray-800 text-gray-600 text-sm">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800 text-gray-600 text-sm">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
