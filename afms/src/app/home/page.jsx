"use client";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CardImage from "../components/CardImage";
import style from "../page.module.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { Yellowtail } from "next/font/google";

import Image from "next/image";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (!Cookies.get("loggedmacaddress")) {
      router.push("/");
    } else {
      setAlert(true);
      setAlertMessage("Sign In Success!");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative mt-20 mb-8">
        <div className="flex relative">
          <Image
            src="/landing-page-fix1.png"
            width={950}
            height={400}
            alt="Landing Page"
            className={`z-0 ${style.ResponsiveImage}`}
            data-aos="fade-right"
          />
          <div
            className="absolute opacity-90 md:opacity-100 top-6 right-8 ml-6 z-6 pt-6 pr-6 pl-6 pb-6 md:z-10 md:right-12 md:top-16 md:pl-8 md:pr-2 md:pt-8 md:pb-8 bg-white text-[#274C5B] text-wrap rounded-xl flex justify-center items-center md:h-100 md:w-2/5"
            data-aos="zoom-in-up"
          >
            <div className="flex flex-col gap-1 md:gap-2">
              <p
                className={`${yellowtail.className} text-base md:text-2xl text-[#7EB693]`}
              >
                Eco Friendly
              </p>
              <h1 className="text-xl md:text-3xl font-extrabold mb:1 md:mb-2">
                Automated Farming Management System
              </h1>
              <div>
                <p className="text-sm md:text-base font-bold">
                  Weather Prediction
                </p>
                <p className="text-xs md:text-sm font-light">
                  Sistem akan menampilkan hasil prediksi cuaca dari BMKG yang
                  digunakan untuk melakukan perairan
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-bold">
                  Soil Moisture Monitoring
                </p>
                <p className="text-xs md:text-sm text-sm font-light">
                  Sistem akan menampilkan kelembapan data tanah
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-bold">
                  Pest Monitoring
                </p>
                <p className="text-xs md:text-sm font-light">
                  Sistem akan menampilkan hasil tangkapan gambar dari ESP32
                  untuk mendeteksi adanya hama atau tidak
                </p>
              </div>
              <div>
                <p className="text-sm md:text-base font-bold">
                  Servo and LED UV Monitoring
                </p>
                <p className="text-xs md:text-sm font-light">
                  Sistem akan menampilkan apakah servo dan LED UV aktif atau
                  tidak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {alert ? (
        <div
          id="toast-success"
          class="fixed flex items-center w-full max-w-[15rem] p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
          role="alert"
        >
          <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span class="sr-only">Check icon</span>
          </div>
          <div class="ms-3 text-sm font-normal">{alertMessage}</div>
          <button
            type="button"
            class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-success"
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
