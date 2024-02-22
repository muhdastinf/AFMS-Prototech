"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardImage from "./components/CardImage";

import { Yellowtail } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";

import Image from "next/image";

const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="relative mt-20 mb-8">
        <div className="flex relative">
          <Image
            src="/landing-page.png"
            width={850}
            height={600}
            alt="Landing Page"
            className="z-0"
            data-aos="fade-right"
          />
          <div className="absolute z-10 right-40 top-16 px-10 pt-8 pb-8 bg-white text-[#274C5B] text-wrap rounded-lg flex justify-center items-center h-100 w-1/3" data-aos="zoom-in-up">
            <div className="flex flex-col gap-2">
              <p className={`${yellowtail.className} text-2xl text-[#7EB693]`}>
                Eco Friendly
              </p>
              <h1 className="text-3xl font-extrabold mb-2">
                Automated Farming Management System
              </h1>
              <div>
                <p className="font-medium">Weather Prediction</p>
                <p className="text-sm">cek cuaca</p>
              </div>
              <div>
                <p className="font-medium">Soil Moisture Monitoring</p>
                <p className="text-sm">cek kelembapan</p>
              </div>
              <div>
                <p className="font-medium">Pest Monitoring</p>
                <p className="text-sm">cek wereng</p>
              </div>
              <div>
                <p className="font-medium">Servo and LED UV Monitoring</p>
                <p className="text-sm">servo and LED UV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
