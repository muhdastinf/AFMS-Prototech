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
  const pathname = usePathname()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 py-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        {logoTitle()}
        <div className="flex mr-2 lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-300"
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
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1  ${
            menuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col pt-4 pl-4 text-[#274C5B] text-sm font-normal lg:p-0 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:border-gray-700">
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
