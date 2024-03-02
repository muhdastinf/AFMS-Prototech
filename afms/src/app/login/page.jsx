"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="mt-16 mb-8 flex flex-row md:pt-20 bg-[#E6FFEE] min-h-svh md:space-x-28">
        <div className="flex-col ml-40">
          <h1>Welcome to</h1>
          <h1>
            Automated Farming <br /> Management System
          </h1>
          <img
            src="/farminglogin.png"
            alt="Gambar Smart Farming"
            className="md:w-[35rem]"
          />
        </div>

        <form className="flex-row">
          <div className="text-bold mb-5">Sign In</div>
          <div className="mb-5">
            <input
              type="text"
              id="address1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mac Address 1"
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="address2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mac Address 2"
              required
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              className="text-white bg-[#274C5B] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
