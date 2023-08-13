"use client";

import React from "react";
import styles from "./shop.module.scss";
import { urlForImage } from "../../../../sanity/lib/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks/hook";
import { toast } from "react-hot-toast";
import { addToBasket } from "@/redux/basketSlice";

function Shop({ data }: { data: any }) {
  const dispatch = useAppDispatch();
  function addBasket(item: any): void {
    dispatch(addToBasket(item));
    toast.success(`${item.name} added to cart`);
  }
  return (
    <section className={styles.shop}>
      <h1>Buy {data.name}</h1>
      <p>{data.sec2pricerange}</p>

      <div className={styles.cart_box}>
        <Swiper
          className={`mySwiper ${styles.swipe_me}`}
          pagination={true}
          modules={[Pagination]}
        >
          {data.cartImages.map((item: any) => {
            return (
              <SwiperSlide key={item._key}>
                <img src={urlForImage(item).url()} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={styles.boxes}>
          <h3>Model. Which is best for you?</h3>
          {data.cartProductModel.map((item: any) => {
            return (
              <article key={item._key}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <p>{item.price}</p>
              </article>
            );
          })}
          <button onClick={() => addBasket(data)}>Add to cart</button>
        </div>
      </div>

      <div className={styles.btm}>
        <h2>What&apos;s in the Box</h2>
        <div className={styles.btm_row}>
          {data.cartProductBox.map((item: any) => {
            return (
              <div key={item._key}>
                <div className={styles.img_wrp}>
                  <img src={urlForImage(item?.image).url()} />
                </div>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.btm_row2}>
          <h3>Our environmental goals.</h3>
          <p>
            As part of our efforts to reach carbon neutrality by 2030, iPhone 14
            Pro and iPhone 14 Pro Max do not include a power adapter or EarPods.
            Included in the box is a USB C to Lightning Cable that supports fast
            charging and is compatible with USB C power adapters and computer
            ports.
          </p>

          <p>
            We encourage you to re use your current USB A to Lightning cables,
            power adapters, and headphones, which are compatible with these
            iPhone models. But if you need any new Apple power adapters or
            headphones, they are available for purchase.
          </p>
        </div>
      </div>

      <div className={styles.sec_4_sub}>
        <article className={styles.sub_wrp}>
          <div className={styles.top}>
            <h1 style={{ color: data.eachSecTitleColor }}>
              Which iPhone is right for you?
            </h1>
          </div>
          <div className={styles.bottom}>
            <article className={styles.col_1}>
              <div>
                <img src={urlForImage(data.sec4GridItem1Image).url()} alt="" />
                <h2 style={{ color: data.eachSecTitleColor }}>
                  {data.sec4GridItem1Name}
                </h2>
                <p
                  className={styles.p1}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem1Text}
                </p>
                <p
                  className={styles.p2}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem1Price}
                </p>
              </div>
              <div>
                <img src={urlForImage(data.sec4GridItem2Image).url()} alt="" />
                <h2 style={{ color: data.eachSecTitleColor }}>
                  {data.sec4GridItem2Name}
                </h2>
                <p
                  className={styles.p1}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem2Text}
                </p>
                <p
                  className={styles.p2}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem2Price}
                </p>
              </div>
              <div>
                <img src={urlForImage(data.sec4GridItem3Image).url()} alt="" />
                <h2 style={{ color: data.eachSecTitleColor }}>
                  {data.sec4GridItem3Name}
                </h2>
                <p
                  className={styles.p1}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem3Text}
                </p>
                <p
                  className={styles.p2}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem3Price}
                </p>
              </div>
              <div>
                <img src={urlForImage(data.sec4GridItem4Image).url()} alt="" />
                <h2 style={{ color: data.eachSecTitleColor }}>
                  {data.sec4GridItem4Name}
                </h2>
                <p
                  className={styles.p1}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem4Text}
                </p>
                <p
                  className={styles.p2}
                  style={{ color: data.eachSecTitleColor }}
                >
                  {data.sec4GridItem4Price}
                </p>
              </div>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Shop;
