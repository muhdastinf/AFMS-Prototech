"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chart from "chart.js";
import Image from "next/image";

export default function WeatherPrediction() {
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

  useEffect(() => {
    (async function () {
      const chartData = {
        type: "line",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "",
              data: data.map((row) => row.count),
              borderColor: "#FFCC6E",
              backgroundColor: "#4E4E4E",
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 5,
                },
                display: false,
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false,
            displayColors: false,
            callbacks: {
              label: function (tooltipItem, data) {
                return `Count: ${tooltipItem.yLabel}`;
              },
            },
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
              <canvas id="acquisitions"></canvas>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
