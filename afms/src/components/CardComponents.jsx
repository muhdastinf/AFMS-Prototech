import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

const CardComponents = ({ isActive, type, targetHumidity }) => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    let interval;

    if (type == "servo") {
      if (isActive) {
        interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage < 5 ? prevImage + 1 : 5));
        }, 400);
      } else {
        interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage > 1 ? prevImage - 1 : 1));
        }, 400);
      }
    } else {
      if (isActive) {
        interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage < 2 ? prevImage + 1 : 2));
        }, 400);
      } else {
        interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage > 1 ? prevImage - 1 : 1));
        }, 400);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, currentImage]);

  return (
    <div className="w-[11.4rem] h-[20.5rem] md:w-[19rem] md:h-[28rem] bg-[#E5E5E5] border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-[11.4rem] md:w-[19rem] h-[14rem] md:h-[19.5rem] bg-white"
          src={`${type}${currentImage}.png`}
          alt={`${type} ${currentImage}`}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-md md:text-xl font-bold tracking-tight text-[#274C5B] dark:text-white">
            {type === "servo" ? "Servo Motor" : "LED UV"}
          </h5>
        </a>
        <p
          className={`${
            robotoMono.className
          } mb-3 md:mb-4 font-normal text-xs md:text-base ${
            isActive ? "text-[#00A224]" : "text-[#FF0000]"
          }`}
        >
          {isActive ? "Activated" : "Not active"}
        </p>
        {isActive && type == "servo" ? (
          <p
            className={`${robotoMono.className} mb-3 md:mb-4 font-normal text-xs md:text-base text-dark dark:text-white`}
          >
            Until Humidity:{targetHumidity}%
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardComponents;
