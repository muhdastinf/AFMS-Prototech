"use client";

import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function WeatherPrediction() {
  Chart.register(ChartDataLabels);

  const data = [
    { year: 2010, count: 27 },
    { year: 2011, count: 25 },
    { year: 2012, count: 22 },
    { year: 2013, count: 16 },
    { year: 2014, count: 22 },
    { year: 2015, count: 16 },
    { year: 2016, count: 20 },
    { year: 2017, count: 16 },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const chartData = {
      type: "line",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "",
            data: data.map((row) => row.count),
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
              formatter: function(value, context) {
                return value + "°";
              },
            },
          },
        ],
      },
      options: {
        layout: {
          padding: 30,
        },
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
          legend: false,
          
        },
      },
    };

    const chartElement = document.getElementById("weather");
    if (chartElement) {
      const newChart = new Chart(chartElement, chartData);
      chartRef.current = newChart;
    }
  }, [data]);

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
