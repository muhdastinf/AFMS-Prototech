"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardImage from "./components/CardImage";

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
            width={850}
            height={400}
            alt="Landing Page"
            className="z-0"
            data-aos="fade-right"
          />
          <div className="absolute z-10 right-12 top-12 pl-8 pr-6 pt-8 pb-8 bg-white text-[#274C5B] text-wrap rounded-xl flex justify-center items-center h-100 w-2/5" data-aos="zoom-in-up">
            <div className="flex flex-col gap-2">
              <p className={`${yellowtail.className} text-2xl text-[#7EB693]`}>
                Eco Friendly
              </p>
              <h1 className="text-3xl font-extrabold mb-2">
                Automated Farming Management System
              </h1>
              <div>
                <p className="font-bold">Weather Prediction</p>
                <p className="text-sm font-light">Sistem akan menampilkan hasil prediksi cuaca dari BMKG yang digunakan untuk melakukan perairan</p>
              </div>
              <div>
                <p className="font-bold">Soil Moisture Monitoring</p>
                <p className="text-sm font-light">Sistem akan menampilkan kelembapan data tanah</p>
              </div>
              <div>
                <p className="font-bold">Pest Monitoring</p>
                <p className="text-sm font-light">Sistem akan menampilkan hasil tangkapan gambar dari ESP32 untuk mendeteksi adanya hama atau tidak</p>
              </div>
              <div>
                <p className="font-bold">Servo and LED UV Monitoring</p>
                <p className="text-sm font-light">SIstem akan menampilkan apakah servo dan LED UV aktif atau tidak</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
