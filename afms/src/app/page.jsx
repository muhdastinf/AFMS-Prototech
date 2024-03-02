"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardImage from "./components/CardImage";
import style from "./page.module.css";

import { Yellowtail } from "next/font/google";

import Image from "next/image";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export default function Home() {
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
    </>
  );
}
