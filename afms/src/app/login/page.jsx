"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({ weight: "800", subsets: ["latin"] });

export default function Login() {
  return (
    <>
      <div className=" flex md:flex-row flex-col pt-14 bg-[#E6FFEE] md:min-h-svh md:space-x-28 md:justify-center items-center md:items-start md:gap-8 ">
        <div className={`${sarabun.className} flex flex-col md:text-[35px] text-[25px] w-[30rem] md:items-start items-center`}>
          <div className="mb-2 md:w-full w-full md:text-wrap text-[24px] md:text-[32px] md:text-start text-center">
            <h1>Welcome to</h1>
            <h1>
              Automated Farming Management System
            </h1>
          </div>

          <img
            src="/farminglogin.png"
            alt="Gambar Smart Farming"
            className="md:w-[30rem] w-full"
          />
        </div>

        <form className="flex-row md:w-[22rem] w-[30rem] md:mt-20 mt-8 mb-10">
          <div className="font-bold text-xl mb-5">Sign In</div>
          <div className="mb-5">
            <input
              type="text"
              id="address1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mac Address 1"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="address2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mac Address 2"
              required
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="text-white bg-[#274C5B] hover:bg-white hover:text-black hover:border-[#274C5B] hover:border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
