"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import CardComponents from "../../components/CardComponents";
import { Client } from "paho-mqtt";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function ServoLEDMonitor() {
  const [isActiveServo, setIsActiveServo] = useState(false);
  const [isActiveLED, setIsActiveLED] = useState(false);
  const [targetHumidity, setTargetHumidity] = useState();

  const router = useRouter();

  if (!Cookies.get("loggedmacaddress")) {
    router.push("/");
  }

  function map(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  // Fungsi untuk mengganti status aktivitas secara otomatis

  const onMessage = (message) => {
    if (message.topic == "hafidzganteng/irrigation") {
      const intValue = parseInt(message.payloadString, 10);
      console.log(intValue);
      if (intValue != -1) {
        setTargetHumidity(Math.round(map(intValue, 4096, 0, 0, 100)));
      } else {
        setIsActiveServo(false);
      }
    } else if (message.topic == "hafidzganteng/servo") {
      if (message.payloadString == "true") {
        setIsActiveServo(true);
      } else {
        setIsActiveServo(false);
      }
    } else if (message.topic == "hafidzganteng/detectpest") {
      if (message.payloadString == "yes") {
        setIsActiveLED(true);
      } else {
        setIsActiveLED(false);
      }
    }
  };

  // Panggil toggleActivity saat komponen pertama kali dimuat
  useEffect(() => {
    //MQTT Over Websocket
    const client = new Client("broker.hivemq.com", Number(8000), "ClientID");
    // Check if the client is already connected
    if (client.isConnected()) {
      console.log("Already connected!");
      return;
    }
    client.connect({
      onSuccess: () => {
        console.log("Connected!");
        client.subscribe("hafidzganteng/servo");
        client.subscribe("hafidzganteng/soilmoisture");
        client.subscribe("hafidzganteng/irrigation");
        client.subscribe("hafidzganteng/detectpest");
        client.onMessageArrived = onMessage;
      },
      onFailure: () => {
        console.log("Failed to connect!");
      },
    });
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
          <CardComponents
            isActive={isActiveServo}
            type="servo"
            targetHumidity={targetHumidity}
          />
          <CardComponents isActive={isActiveLED} type="leduv" />
        </div>
      </div>
      <Footer />
    </>
  );
}
