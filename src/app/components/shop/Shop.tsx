"use client";

import React from "react";
import styles from "./shop.module.scss";
import { urlForImage } from "../../../../sanity/lib/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

function Shop({ data }: { data: any }) {
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
          <h2>Model. Which is best for you?</h2>
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
        </div>
      </div>

      <div className={styles.btm}>
        <h2>What&apos;s in the Box</h2>
        <div></div>
      </div>
    </section>
  );
}

export default Shop;
