"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import axios from "axios";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function WeatherPrediction() {
  const [humidityData, sethumidityData] = useState([]);
  const [tempData, settempData] = useState([]);
  const [weatherData, setweatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
        if (areaElement) {
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

          const tempElement = areaElement.querySelector('parameter[id="t"]');

          if (tempElement) {
            const timerangetemp = tempElement.querySelectorAll("timerange");
            const tempValues = Array.from(timerangetemp).map(
              (timerangeElement) => ({
                datetime: formatDate(timerangeElement.getAttribute("datetime")),
                value: timerangeElement.querySelector("value").textContent,
              })
            );

            settempData(tempValues.slice(0,8));
          } else {
            setError(
              'No <parameter> element with id="t" found inside the <area> element'
            );
          }

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

            setweatherData(weatherValues);
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

  const formatDate = (datetime) => {
    const year = datetime.substring(0, 4);
    const month = datetime.substring(4, 6);
    const day = datetime.substring(6, 8);
    const hour = datetime.substring(8, 10);
    const minute = datetime.substring(10, 12);
    return `${day}-${month}-${year} ${hour}:${minute}:00`;
  };

  console.log("tempData: ",tempData)
  console.log("humidityData: ",humidityData)
  console.log("weatherData: ", weatherData)

  Chart.register(ChartDataLabels);

  const dataTemperature = tempData;

  const chartRef = useRef(null);

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
                return value + "°";
              },
            },
          },
        ],
      },
      options: {
        layout: {
          padding: {
            right: 20,
            left: 20,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            beginAtZero: true,
            display: false,
            ticks: {
              stepSize: 25,
            },
          },
        },
        plugins: {
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

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div className="relative flex flex-col w-3/5">
          <div className="rounded-t-3xl mb-0 px-6 py-6 bg-[#4E4E4E]">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <div className="flex gap-2 items-center">
                  <Image src="/clock.svg" width={20} height={20} alt="clock" />
                  <h6 className="text-white text-xs font-semibold ">
                    24-hour forecast
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-auto bg-[#4E4E4E] rounded-b-3xl">
            <div className="relative ">
              <canvas id="weather"></canvas>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
