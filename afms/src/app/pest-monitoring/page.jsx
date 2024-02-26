"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardImage from "../components/CardImage";

export default function PestMonitoring() {
  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div>ESP32-CAM Images</div>
        <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 sm:grid-cols-2">
          <CardImage />
          <CardImage />
          <CardImage />
          <CardImage />
        </div>
      </div>

      <Footer />
    </>
  );
}
