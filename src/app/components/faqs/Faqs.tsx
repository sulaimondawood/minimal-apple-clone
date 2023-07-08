"use client";

import { Faqs, FaqsQues } from "@/types/TradeTab1";
import styles from "./faqs.module.scss";
import { useState } from "react";
function Faqs({ faqs }: { faqs: Faqs[] }) {
  const [isActive, setIsActive] = useState(0);

  const handleClick = (index: number) => {
    setIsActive(index);
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
          return (
            <div key={item._key}>
              <h2>{item?.name}</h2>
              <div className={styles.ques}>
                <div className={styles.sub}>
                  <p className={styles.ques_}>{item.question}</p>
                </div>
                <p className={styles.ans_active}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faqs;
