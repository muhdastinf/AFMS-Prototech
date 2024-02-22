import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFMS IoT",
  description: "Automated Farming Management System",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
