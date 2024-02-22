"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chart from "chart.js";

export default function WeatherPrediction() {
  const data = [
    { year: 2010, count: 22 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  useEffect(() => {
    (async function () {
      const chartData = {
        type: "line",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
              borderColor: "#FFCC6E",
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white",
                },
                
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "white",
                },
                
              },
            ],
          },
        },
      };

      const chartElement = document.getElementById("acquisitions");
      if (chartElement) {
        new Chart(chartElement, chartData);
      }
    })();
  }, [data]);

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-col justify-center items-center">
        <div className="relative flex flex-col w-1/2">
          <div className="rounded-t-xl mb-0 px-4 py-4 bg-[#4E4E4E]">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="text-white text-xs font-semibold">
                  24-hour forecast
                </h6>
              </div>
            </div>
          </div>
          <div className="flex-auto bg-[#4E4E4E] rounded-b-xl">
            {/* Chart */}
            <div className="relative h-350-px">
              <canvas id="acquisitions"></canvas>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
