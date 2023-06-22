"use client";

import { useState } from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import styles from "./tab.module.scss";
import TradeTab1, { ContentI } from "@/types/TradeTab1";
const Tab = ({ tab }: { tab: TradeTab1[] }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.btn_wrp}>
        {tab.map((item: TradeTab1, index) => {
          return (
            <button
              onClick={() => setTabIndex(index)}
              className={styles.button}
              key={item.slug.current}
              style={{
                borderBottomColor: tabIndex === index ? "black" : "#b8b8c2",
                borderBottomWidth: "2px",
                borderBottomStyle: "solid",
              }}
            >
              <img src={urlForImage(item.icon).url()} alt="" />
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
      <div className={styles.tab1_content}>
        <div className={styles.row} key={tab[tabIndex].slug.current}>
          <div className={styles.left}>
            <h1>{tab[tabIndex].contentTitle}</h1>
            {tab[tabIndex].ContentName.map((item: ContentI) => {
              return (
                <table key={item._key}>
                  <thead className={styles.thead}>
                    <tr>
                      <td className={styles.td}>
                        {tab[tabIndex].subContentTitle}
                      </td>
                      <td className={`${styles.td_l} ${styles.td}`}>
                        {tab[tabIndex].subContentTitle2}
                      </td>
                    </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                    <tr>
                      <td>{item.contentSubName}</td>
                      <td className={styles.td_s}>{item.contentSubPrice}</td>
                    </tr>
                    <tr>
                      <td>{item.contentSubName2}</td>
                      <td className={styles.td_s}>{item.contentSubPrice2}</td>
                    </tr>
                    <tr>
                      <td>{item.contentSubName3}</td>
                      <td className={styles.td_s}>{item.contentSubPrice3}</td>
                    </tr>
                    <tr>
                      <td className={styles.td_ss}>{item.contentSubName4}</td>
                      <td className={`${styles.td_s} ${styles.td_ss}`}>
                        {item.contentSubPrice4}
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
            <button>Find your trade-in value</button>
          </div>
          <div className={styles.right}>
            {tab[tabIndex].ContentName.map((item: ContentI) => {
              return (
                <img
                  key={item._key}
                  src={urlForImage(item.contentSubImage).url()}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
