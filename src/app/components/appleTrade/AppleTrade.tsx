import React from "react";
import styles from "./appleTrade.module.scss";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import Nav from "../nav/Nav";
import TradeTab1 from "@/types/TradeTab1";

const AppleTrade = ({ res, tab }: { res: any; tab: TradeTab1[] }) => {
  console.log(tab);

  return (
    <div>
      <section className={styles.appleTradeSec}>
        <Nav bgState={res?.navBg} colorState={res?.navColor} state={false} />
        <div style={{ backgroundColor: res.navBg }} className={styles.header}>
          <div>
            <h2 style={{ color: res.navColor }}>{res?.heroName}</h2>
            <div>
              <p>Overview</p>
              <Link href="">Find your trade-in value</Link>
            </div>
          </div>
        </div>
        <div className={styles.sec_1}>
          <img src={urlForImage(res.heroTitle).url()} alt="" />
          <h1>{res.heroTitleString}</h1>
          <p>{res.heroDesc}</p>
        </div>
        <div className={styles.sec2}>
          <div className={styles.btn_wrp}>
            {tab.map((item: TradeTab1) => {
              return (
                <>
                  <button key={item.slug.current}>
                    <img src={urlForImage(item.icon).url()} alt="" />
                    <p>{item.title}</p>
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppleTrade;
