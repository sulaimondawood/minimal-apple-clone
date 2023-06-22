"use client";

import { Faqs, FaqsQues } from "@/types/TradeTab1";
import styles from "./faqs.module.scss";
import { useState } from "react";
function Faqs({ faqs }: { faqs: Faqs[] }) {
  const [isActive, setIsActive] = useState(0);
  const [click, setClick] = useState(0);
  // const [click, setClick] = useState(false);

  const handleClick = (index: number) => {
    setIsActive(index);
  };
  const handleQues = (index: number) => {
    setClick(index);
  };
  return (
    <section className={styles.faqs}>
      <h1>More questions? More answers.</h1>
      <div className={styles.btn_wrp}>
        {faqs.map((item: Faqs, index: number) => {
          return (
            <button
              key={item.slug.current}
              onClick={() => handleClick(index)}
              className={isActive === index ? styles.btn : ""}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className={styles.details_wrp}>
        {faqs[isActive].questions.map((item: FaqsQues, index) => {
          console.log(index);

          return (
            <div key={index}>
              <h2>{item?.name}</h2>
              <div className={styles.ques}>
                <div className={styles.sub}>
                  <p
                    onClick={() => handleClick(index)}
                    className={styles.ques_}
                  >
                    {/* <p onClick={() => setClick(!click)} className={styles.ques_}> */}
                    {item.question}
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17 8.85"
                    className={click ? styles.svg_open : styles.svg}
                    role="img"
                    aria-hidden="true"
                  >
                    <path fill="none" d="M0 0h35v35H0z"></path>
                    <path
                      fill="none"
                      stroke="#86868b"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.25"
                      d="M15 1.13L8.5 7.72 2 1.13"
                    ></path>
                  </svg>
                </div>
                {/* {click && <p className={styles.ans_active}> item.answer</p>} */}
                <p className={click == index ? styles.ans_active : styles.ans}>
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;
