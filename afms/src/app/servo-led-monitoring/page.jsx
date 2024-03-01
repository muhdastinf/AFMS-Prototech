"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import CardComponents from "../components/CardComponents";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function ServoLEDMonitor() {
  const [isActiveServo, setIsActiveServo] = useState(false);
  const [isActiveLED, setIsActiveLED] = useState(false);

  // Fungsi untuk mengganti status aktivitas secara otomatis
  const toggleActivityServo = () => {
    setTimeout(() => {
      setIsActiveServo((prevIsActiveServo) => !prevIsActiveServo);
      toggleActivityServo(); // Menerapkan rekursif untuk memicu perubahan setiap 4 detik
    }, 200);
  };

  const toggleActivityLED = () => {
    setTimeout(() => {
      setIsActiveLED((prevIsActiveLED) => !prevIsActiveLED);
      toggleActivityLED(); // Menerapkan rekursif untuk memicu perubahan setiap 4 detik
    }, 200);
  };

  // Panggil toggleActivity saat komponen pertama kali dimuat
  useEffect(() => {
    toggleActivityServo();
    toggleActivityLED();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div
          className={`text-2xl md:text-4xl mb-4 md:mb-6 text-[#274C5B] font-bold`}
        >
          Hardware Monitoring
        </div>
        <div className="grid grid-cols-2 space-x-2 md:space-x-8">
          <CardComponents isActive={isActiveServo} type="servo" />
          <CardComponents isActive={isActiveLED} type="leduv" />
        </div>
      </div>
      <Footer />
    </>
  );
}
