"use client";

import { Sarabun } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const sarabun = Sarabun({ weight: "800", subsets: ["latin"] });

export default function Login() {
  const [MacAddress1, setMacAddress1] = useState();
  const [MacAddress2, setMacAddress2] = useState();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      MacAddress1 == "84:8C:8D:DF:1D:F2" &&
      MacAddress2 == "D8:F3:BC:61:86:E9"
    ) {
      Cookies.set("loggedmacaddress", "true");
      router.push("/home");
    } else {
      setAlertMessage("401: Not Authenticated! Please Check Your Mac Address!");
      setAlert(true);
    }
  };
  return (
    <>
      <div className=" flex md:flex-row flex-col pt-14 bg-[#E6FFEE] md:min-h-svh md:space-x-28 md:justify-center items-center md:items-start md:gap-8 ">
        <div
          className={`${sarabun.className} flex flex-col md:text-[35px] text-[25px] w-[30rem] md:items-start items-center`}
        >
          <div className="mb-2 md:w-full w-full md:text-wrap text-[24px] md:text-[32px] md:text-start text-center">
            <h1>Welcome to</h1>
            <h1>Automated Farming Management System</h1>
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
              onChange={(e) => setMacAddress1(e.target.value)}
              value={MacAddress1}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              id="address2"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mac Address 2"
              onChange={(e) => setMacAddress2(e.target.value)}
              value={MacAddress2}
              required
            />
          </div>
          <div className="mb-5">
            <button
              type="submit"
              onClick={(e) => handleLogin(e)}
              className="text-white bg-[#274C5B] hover:bg-white hover:text-black hover:border-[#274C5B] hover:border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      {alert ? (
        <div
          id="toast-danger"
          class="fixed flex items-center w-full max-w-sm md:max-w-lg p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span class="sr-only">Error icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">{alertMessage}</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-danger"
            aria-label="Close"
            onClick={() => setAlert(false)}
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
