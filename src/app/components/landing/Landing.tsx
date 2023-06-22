"use client";

import Link from "next/link";
import styles from "./landing.module.scss";
import { urlForImage } from "../../../../sanity/lib/image";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import { useAppDispatch } from "@/redux/hooks/hook";
import { addToBasket } from "@/redux/basketSlice";
import { useDispatch } from "react-redux";
import { useStateContext } from "@/context/Context";

interface Iitems {
  learnmore: "Learn More";
  buy: "Buy";
  name: string;
  slug: { current: string };
  desc: string;
  image: any;
  color: string;
  logo: any;
  _id: string;
}

export type Slides = {
  image: any;
  name: string;
  slug: {
    current: string;
  };
};

export default function Landing({
  landingProducts,
  landingProducts2,
  slides,
}: {
  landingProducts: any;
  landingProducts2: any;
  slides: Slides[];
}) {
  console.log(useStateContext());

  const dispatch = useAppDispatch();
  function addBasket(item: any): void {
    dispatch(addToBasket(item));
  }
  return (
    <>
      <Nav bgState="rgba(22, 22, 23, 0.8)" colorState="#e8e8ed" state={true} />

      <section className={styles.hero}>
        <h1>Introducing the new MacBook Pro and Mac mini.</h1>
        <button>Watch the announcement</button>
      </section>

      <div className={styles.products_wrp}>
        {landingProducts.map((items: Iitems) => {
          return (
            <div
              key={items._id}
              className={styles.bg_item}
              style={{
                backgroundImage: `url(${urlForImage(items?.image).url()})`,
              }}
            >
              <h1 className="" style={{ color: items.color }}>
                {items.name}
              </h1>
              <h2 style={{ color: items.color }}>{items.desc}</h2>

              <Button addBasket={addBasket} items={items} />
            </div>
          );
        })}
      </div>
      <div className={styles.products_2_wrp}>
        {landingProducts2.map((items: Iitems) => {
          return (
            <div
              key={items._id}
              className={styles.bg_item}
              style={{
                backgroundImage: `url(${urlForImage(items?.image).url()})`,
              }}
            >
              <img
                className={
                  items.slug.current === "wwdc23"
                    ? styles.logo_initial
                    : styles.logo
                }
                src={urlForImage(items?.logo)?.url()}
                alt="alt"
              />
              <h2 style={{ color: items.color }}>{items.desc}</h2>
              <Button addBasket={addBasket} items={items} />
            </div>
          );
        })}
      </div>
      <Slider slides={slides} />
      <Footer state={"white"} />
    </>
  );
}
