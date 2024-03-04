"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function CarouselDashboard({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
  textOverlay = false,
  overlayText = "",
}) {
  const [curr, setCurr] = useState(0);

  const router = useRouter();

  if (!Cookies.get("loggedmacaddress")) {
    router.push("/");
  }

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const goToSlide = (index) => {
    setCurr(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative rounded-3xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className="object-cover object-center h-[19rem] w-full"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={15} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={15} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-4 h-1 bg-white rounded-full cursor-pointer
              ${curr === i ? "w-4 h-1 " : "bg-opacity-50"}
            `}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
