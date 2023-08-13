"use client";

import Link from "next/link";
import styles from "./nav.module.scss";
import { useState } from "react";

import { useAppSelector } from "@/redux/hooks/hook";

import { IoMdClose } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

import NavConstants from "@/constants/nav";
import { FaGripLines } from "react-icons/fa6";

const Nav = ({
  state,
  bgState,
  colorState,
}: {
  state: boolean;
  bgState: string;
  colorState: string;
}) => {
  const router = useRouter();
  const { products } = useAppSelector((state) => state.basketSlice);
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleRoute = () => {
    router.push("/shop/bag");
  };

  return (
    <div className="">
      <div
        style={{
          backgroundColor: bgState,
          position: state ? "fixed" : "static",
        }}
        className={styles.header_wrapper}
      >
        <Link href="/">
          <span>
            <svg
              className={styles.apple_logo}
              viewBox="0 0 17 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: colorState }}
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              ></path>
            </svg>
          </span>
        </Link>
        {NavConstants.map(
          (item: { name: string; link: string; id: number }) => (
            <Link
              style={{ color: colorState }}
              className="nav-link"
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          )
        )}

        <button className="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 44">
            <path
              style={{ fill: colorState }}
              d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
            ></path>
          </svg>
        </button>
        <button className={styles.svg_grd} onClick={handleRoute}>
          {products.length > 0 && (
            <span style={{ color: bgState, backgroundColor: colorState }}>
              {products.length}
            </span>
          )}
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: colorState }}
              d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile? */}
      <div
        style={{
          backgroundColor: bgState,
          position: state ? "fixed" : "static",
        }}
        className={styles.header_wrapper_2}
      >
        <Link href="/">
          <span>
            <svg
              className={styles.apple_logo}
              viewBox="0 0 17 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: colorState }}
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              ></path>
            </svg>
          </span>
        </Link>
        <div className={styles.btn_wrp}>
          <Link href="/shop/bag" className={styles.svg_grd}>
            {products.length > 0 && (
              <span style={{ color: bgState, backgroundColor: colorState }}>
                {products.length}
              </span>
            )}
            <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: colorState }}
                d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
              ></path>
            </svg>
          </Link>

          <button className={styles.btn_open} onClick={handleNav}>
            <FaGripLines style={{ color: colorState, fontSize: "2rem" }} />
          </button>
        </div>
        {/* <div
          // style={{
          //   backgroundColor: bgState,
          // }}
          className={styles.links_wrp}
          // className={
          //   isOpen ? `${styles.active} ${styles.links_wrp}` : styles.links_wrp
          // }
        >
          <div className={styles.wrp}>
            <button className={styles.btn_close} onClick={handleNav}>
              <span></span>
              <span></span>
            </button>

            {NavConstants.map(
              (item: { name: string; link: string; id: number }) => (
                <Link
                  onClick={handleNav}
                  style={{ color: colorState }}
                  className="nav-link"
                  key={item.id}
                  href={item.link}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
