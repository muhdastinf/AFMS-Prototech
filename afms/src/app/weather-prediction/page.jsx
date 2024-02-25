"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import axios from "axios";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  CloudSunFill,
  CloudyFill,
  CloudsFill,
  CloudLightningRainFill,
  CloudHazeFill,
  CloudFog2Fill,
  CloudFogFill,
  CloudRainHeavyFill,
  CloudRainFill,
  CloudDrizzleFill,
} from "react-bootstrap-icons";

const formatDatetime = (datetime) => {
  const year = datetime.substring(0, 4);
  const month = datetime.substring(5, 7);
  const day = datetime.substring(8, 10);
  const hour = datetime.substring(11, 13);
  const minute = datetime.substring(14, 16);

  return `${day}-${month}-${year} ${hour}:${minute}:00`;
};

const formatDateToString = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = days[date.getDay()];
  const dateOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} | ${dateOfMonth} ${month} ${year}`;
};

export default function WeatherPrediction() {
  const [humidityData, sethumidityData] = useState([]);
  const [tempData, settempData] = useState([]);
  const [weatherData, setweatherData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    if (weatherData.length > 0) {
      setCurrentDateTime(formatDatetime(weatherData[0].datetime));
    }
  }, [weatherData]);

  console.log("currentDateTime: ", currentDateTime);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTimur.xml",
          {
            responseType: "text",
          }
        );
        const xmlData = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        const areaElement = xmlDoc.querySelector('area[id="501294"]');

        setAreaData(areaElement.getAttribute("description"));

        if (areaElement) {
          // humidity element
          const humidityElement =
            areaElement.querySelector('parameter[id="hu"]');

          if (humidityElement) {
            const timerangeHumidity =
              humidityElement.querySelectorAll("timerange");

            const humidityValues = Array.from(timerangeHumidity).map(
              (timerangeElement) => ({
                datetime: formatDate(timerangeElement.getAttribute("datetime")),
                value: timerangeElement.querySelector("value").textContent,
              })
            );

            sethumidityData(humidityValues);
          } else {
            setError(
              'No <parameter> element with id="hu" found inside the <area> element'
            );
          }

          // temperature element
          const tempElement = areaElement.querySelector('parameter[id="t"]');
          if (tempElement) {
            const timerangetemp = tempElement.querySelectorAll("timerange");
            const tempValues = Array.from(timerangetemp).map(
              (timerangeElement) => ({
                datetime: formatDate(timerangeElement.getAttribute("datetime")),
                value: timerangeElement.querySelector("value").textContent,
              })
            );

            settempData(tempValues.slice(0, 9));
          } else {
            setError(
              'No <parameter> element with id="t" found inside the <area> element'
            );
          }

          // weather element
          const weatherElement = areaElement.querySelector(
            'parameter[id="weather"]'
          );
          if (weatherElement) {
            const timerangeweather =
              weatherElement.querySelectorAll("timerange");

            const weatherValues = Array.from(timerangeweather).map(
              (timerangeElement) => ({
                datetime: formatDate(timerangeElement.getAttribute("datetime")),
                value: timerangeElement.querySelector("value").textContent,
              })
            );

            setweatherData(weatherValues.slice(0, 9));
          } else {
            setError(
              'No <parameter> element with id="weather" found inside the <area> element'
            );
          }
        } else {
          setError('No <area> element with id="501294" found');
        }

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      if (hour % 6 == 0 && minute == 0 && second == 0) {
        router.refresh();
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  const formatDate = (datetime) => {
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    return `${day}-${month}-${year} ${hour}:${minute}:00`;
  };

  var dataTemperature = tempData;
  Chart.register(ChartDataLabels);
  const chartRef = useRef(null);

  dataTemperature.map((data) => {
    console.log("datetime: ", data.datetime);
  });

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const chartData = {
      type: "line",
      data: {
        labels: dataTemperature.map((row) => row.datetime),
        datasets: [
          {
            label: "",
            data: dataTemperature.map((row) => row.value),
            borderColor: "#FFCC6E",
            backgroundColor: "#fff",
            fill: false,
            tension: 0.4,
            datalabels: {
              display: true,
              align: "end",
              anchor: "end",
              color: "white",
              font: {
                weight: "bold",
                size: 14,
              },
              formatter: function (value, context) {
                return value + "°C";
              },
            },
          },
        ],
      },
      options: {
        layout: {
          padding: {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
          },
          y: {
            beginAtZero: true,
            display: false,
            ticks: {
              stepSize: 20,
            },
          },
        },
        plugins: {
          annotation: {
            annotations: {
              point1: {
                type: "point",
                radius: 10,
                xValue:
                  currentIndex !== -1
                    ? dataTemperature[currentIndex].datetime
                    : 0,
                yValue:
                  currentIndex !== -1
                    ? parseInt(dataTemperature[currentIndex].value)
                    : 0,
                backgroundColor: "rgba(255, 99, 132, 0.25)",
              },
            },
          },

          legend: false,
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                var label = "Temperature: " + context.parsed.y + "°C";
                return label;
              },
            },
          },
        },
      },
    };

    const chartElement = document.getElementById("weather");
    if (chartElement) {
      const newChart = new Chart(chartElement, chartData);
      chartRef.current = newChart;
    }
  }, [dataTemperature]);

  const getCurrentTime = () => {
    return new Date();
  };

  const findCurrentTimeIndex = (currentTime, tempData, weatherData) => {
    for (let i = 0; i < tempData.length; i++) {
      const dateString = tempData[i].datetime;
      const [day, month, year, hour, minute, second] =
        dateString.split(/[\s:-]/);

      const tempTime = new Date(year, month - 1, day, hour, minute, second);

      if (currentTime <= tempTime) {
        return i - 1;
      }
    }
    return -1;
  };

  const currentTime = getCurrentTime();
  const currentIndex = findCurrentTimeIndex(currentTime, tempData);
  const currentTempValue =
    currentIndex !== -1 ? tempData[currentIndex].value : "null";
  const formattedDate = formatDateToString(currentTime);

  const weatherInformation = (data) => {
    if (data == 0) {
      return "Clear Skies";
    } else if (data == 1 || data == 2) {
      return "Partly Cloudly";
    } else if (data == 3) {
      return "Mostly Cloudy";
    } else if (data == 4) {
      return "Overcast";
    } else if (data == 5) {
      return "Haze";
    } else if (data == 10) {
      return "Smoke";
    } else if (data == 45) {
      return "Fog";
    } else if (data == 60) {
      return "Light Rain";
    } else if (data == 61) {
      return "Rain";
    } else if (data == 63) {
      return "Heavy Rain";
    } else if (data == 80) {
      return "Isolated Shower";
    } else if (data == 95 || data == 97) {
      return "Severe Thunderstorm";
    }
  };

  const weatherIcon = (data, { size }) => {
    if (data == 0) {
      return <BrightnessHighFill color="#4E4E4E" size={size} />;
    } else if (data == 1 || data == 2) {
      return <CloudSunFill color="#4E4E4E" size={size} />;
    } else if (data == 3) {
      return <CloudyFill color="#4E4E4E" size={size} />;
    } else if (data == 4) {
      return <CloudsFill color="#4E4E4E" size={size} />;
    } else if (data == 5) {
      return <CloudHazeFill color="#4E4E4E" size={size} />;
    } else if (data == 10) {
      return <CloudFogFill color="#4E4E4E" size={size} />;
    } else if (data == 45) {
      return <CloudFog2Fill color="#4E4E4E" size={size} />;
    } else if (data == 60) {
      return <CloudDrizzleFill color="#4E4E4E" size={size} />;
    } else if (data == 61) {
      return <CloudRainFill color="#4E4E4E" size={size} />;
    } else if (data == 63) {
      return <CloudRainHeavyFill color="#4E4E4E" size={size} />;
    } else if (data == 80) {
      return <CloudRainHeavyFill color="#4E4E4E" size={size} />;
    } else if (data == 95 || data == 97) {
      return <CloudLightningRainFill color="#4E4E4E" size={size} />;
    }
  };

  const currentWeatherValue =
    currentIndex !== -1 ? weatherData[currentIndex].value : "null";

  var weatherFix = weatherInformation(parseInt(currentWeatherValue));
  console.log("weatherData: ", weatherData);
  console.log("tempData: ", tempData);

  return (
    <>
      <Navbar />
      <div className="mt-28 mb-8 flex flex-row gap-2 justify-between mx-20 my-10">
        <div className="flex flex-col w-3/4 gap-6" data-aos="fade-up">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <Image
                src="location-icon.svg"
                width={20}
                height={20}
                alt="location"
              />
              <div className="text-[#4E4E4E] font-normal text-sm">
                {areaData}
              </div>
            </div>

            <div className="flex flex-col gap-4 text-[#4E4E4E] ">
              <div className="text-xl font-medium">{weatherFix}</div>
              <div className="flex flex-col">
                <div className="text-[40px] font-semibold">
                  {currentTempValue}°C
                </div>
                <div className="text-xs">{formattedDate}</div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col w-full">
            <div className="rounded-t-3xl mb-0 px-4 py-4 bg-[#4E4E4E]">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/clock.svg"
                      width={20}
                      height={20}
                      alt="clock"
                    />
                    <h6 className="text-xs font-semibold text-white">
                      24-hour forecast
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#4E4E4E] rounded-b-3xl h-60 ">
              <div className="w-full">
                <canvas id="weather"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-end gap-4">
          <div className="flex items-start">
            {weatherIcon(currentWeatherValue, { size: 135 })}
          </div>
          <div className="flex flex-col gap-4 bg-[#4E4E4E] py-6 px-16 text-white rounded-3xl">
            <p>dashboard</p>
            <p>dashboard</p>
            <p>dashboard</p>
            <p>dashboard</p>
            <p>dashboard</p>
            <p>dashboard</p>
            <p>dashboard</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
