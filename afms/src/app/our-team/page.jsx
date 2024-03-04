"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function OurTeam() {
  const router = useRouter();

  if (!Cookies.get("loggedmacaddress")) {
    router.push("/");
  }

  return (
    <>
      <Navbar />
      <div className="mt-24 mb-8 flex flex-row md:flex-col justify-center items-center">
        <div className={styles.container}>
          <div
            className={`${styles.box} ${styles.box1}`}
            style={{ "--img": "url(https://i.postimg.cc/sgBkfbtx/img-1.jpg)" }}
            data-text="Renji"
          ></div>
          <div
            className={`${styles.box} ${styles.box2}`}
            style={{ "--img": "url(https://i.postimg.cc/3RZ6bhDS/img-2.jpg)" }}
            data-text="Sora"
          ></div>
          <div
            className={`${styles.box} ${styles.box3}`}
            style={{ "--img": "url(https://i.postimg.cc/DZhHg0m4/img-3.jpg)" }}
            data-text="Kaito"
          ></div>
          <div
            className={`${styles.box} ${styles.box4}`}
            style={{ "--img": "url(https://i.postimg.cc/KjqWx5ft/img-4.jpg)" }}
            data-text="Tsuki"
          ></div>
          <div
            className={`${styles.box} ${styles.box5}`}
            style={{ "--img": "url(https://i.postimg.cc/nrcWyW4H/img-5.jpg)" }}
            data-text="Mitsui"
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
