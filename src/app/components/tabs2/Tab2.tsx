"use client";

import React, { useState } from "react";
import styles from "./tab.module.scss";
import { Tab2, Tab2Extra } from "@/types/TradeTab1";
import { urlForImage } from "../../../../sanity/lib/image";
function Tab2({ tab2 }: { tab2: Tab2[] }) {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <>
      <div className={styles.btn_wrp}>
        {tab2.map((item: Tab2, index: number) => {
          return (
            <button
              onClick={() => setTabIndex(index)}
              className={styles.button}
              key={item.slug.current}
              style={{
                backgroundColor: tabIndex === index ? "black" : "white",
                color: tabIndex === index ? "white" : "#99999d",
              }}
            >
              {item.btnText1}
            </button>
          );
        })}
      </div>
      <div className={styles.tab2_content}>
        <h2>{tab2[tabIndex].title1}</h2>

        <div className={styles.row} key={tab2[tabIndex].slug.current}>
          {tab2[tabIndex].extraDetails.map((item: Tab2Extra, index: number) => {
            return (
              <div key={index}>
                <img src={urlForImage(item.image).url()} alt="" />
                <p className={styles.p}>{item.step}</p>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Tab2;
