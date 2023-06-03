"use client";

import { useState } from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import styles from "./tab.module.scss";
import TradeTab1, { ContentI } from "@/types/TradeTab1";
const Tab = ({ tab }: { tab: TradeTab1[] }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabFunc = (index: any) => {
    setTabIndex((prev) => (prev = index));
    console.log(tabIndex);
  };
  return (
    <>
      <div className={styles.btn_wrp}>
        {tab.map((item: TradeTab1, index) => {
          return (
            <button
              onClick={() => setTabIndex(index)}
              //   onClick={handleTabFunc(index)}
              className={styles.button}
              key={item.slug.current}
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
                <table>
                  <thead>
                    <tr>
                      <th>{item.contentSubName}</th>
                      <th>{item.contentSubPrice}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.contentSubName2}</td>
                      <td>{item.contentSubPrice2}</td>
                    </tr>
                    <tr>
                      <td>{item.contentSubName3}</td>
                      <td>{item.contentSubPrice3}</td>
                    </tr>
                    <tr>
                      <td>{item.contentSubName4}</td>
                      <td>{item.contentSubPrice4}</td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </div>
          <div className={styles.right}>
            {tab[tabIndex].ContentName.map((item: ContentI) => {
              return (
                <img src={urlForImage(item.contentSubImage).url()} alt="" />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tab;
