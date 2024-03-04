"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function logoTitle() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse lg:ml-16 ml-4"
    >
      <img src="/logo.png" className="h-8" alt="AFMS Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#274C5B]">
        AFMS
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        {logoTitle()}
        <div className="flex mr-2 xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-300"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full xl:flex xl:w-auto xl:order-1  ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col pt-4 pl-4 text-[#274C5B] text-sm font-normal xl:p-0 xl:space-x-8 rtl:space-x-reverse xl:flex-row xl:mt-0 xl:border-0 xl:bg-white dark:border-gray-700">
            <li>
              <a
                onClick={() => {
                  router.push("/weather-prediction");
                }}
                className={`block py-2 cursor-pointer ${
                  pathname === "/weather-prediction"
                    ? "text-black font-semibold"
                    : "hover:text-black hover:font-semibold"
                }`}
              >
                Weather Prediction
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/soil-monitoring");
                }}
                className={`block py-2 cursor-pointer ${
                  pathname === "/soil-monitoring"
                    ? "text-black font-semibold"
                    : "hover:text-black hover:font-semibold"
                }`}
              >
                Soil Moisture Monitoring
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/pest-monitoring");
                }}
                className={`block py-2 cursor-pointer ${
                  pathname === "/pest-monitoring"
                    ? "text-black font-semibold"
                    : "hover:text-black hover:font-semibold"
                }`}
              >
                Pest Monitoring
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  router.push("/servo-led-monitoring");
                }}
                className={`block py-2 cursor-pointer ${
                  pathname === "/servo-led-monitoring"
                    ? "text-black font-semibold"
                    : "hover:text-black hover:font-semibold"
                }`}
              >
                Servo and LED UV Monitoring
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  {
                    router.push("/our-team");
                  }
                }}
                className={`block py-2 cursor-pointer ${
                  pathname === "/our-team"
                    ? "text-black font-semibold"
                    : "hover:text-black hover:font-semibold"
                }`}
              >
                Our Team
              </a>
            </li>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
