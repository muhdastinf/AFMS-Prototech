"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import style from "./page.module.css";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="mt-20 mb-8 flex flex-col justify-center items-center">
        <div
          className={`justify-center text-center w-full h-[280px] md:h-[840px] ${style.container}`}
        >
          <h1 className={style.c404}>404</h1>
          <h2 className={style.NotFound}>Page not found</h2>
          <p className={`font-semibold ${style.Paragraf}`}>
            The page you are looking for doesn&apos;t exist or has been moved
          </p>
          <div class="flex flex-row justify-center space-y-0">
            <a
              href="#"
              class="inline-flex mt-6 justify-center items-center py-2 px-4 md:py-4 md:px-8 text-xs md:text-lg font-semibold text-center text-white rounded-lg bg-[#325F43] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              Go to Homepage
              <svg
                class="w-5 h-5 px-1 py-1 bg-[#7EB693] rounded-xl ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* <a href="#" className={`${style.HomepageContainer}`}>
            <h1 className="Homepage">Go to Homepage</h1>
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2 self-center"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
