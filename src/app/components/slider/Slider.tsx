"use client";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slides } from "../landing/Landing";
import { urlForImage } from "../../../../sanity/lib/image";

import styles from "./slider.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

function Slider({ slides }: { slides: Slides[] }) {
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<HTMLSpanElement | any>(null);
  const onAutoplayTimeLeft = (s: unknown, time: number, progress: number) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className={styles.grd_swiper}>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1440: {
            width: 1440,
            slidesPerView: 1.16,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((item: Slides) => {
          return (
            <SwiperSlide
              className={styles.swiper_slide}
              key={item.slug.current}
            >
              <img src={urlForImage(item.image).url()} alt="" />
            </SwiperSlide>
          );
        })}
        <div className={styles.autoplay_progress} slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </section>
  );
}

export default Slider;
