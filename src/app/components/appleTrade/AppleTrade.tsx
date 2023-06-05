import React from "react";
import styles from "./appleTrade.module.scss";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import Nav from "../nav/Nav";
import TradeTab1, { ContentI, Tab2 as TTab2 } from "@/types/TradeTab1";
import Tab from "../tabs1/Tab";
import Tab2 from "../tabs2/Tab2";

const AppleTrade = ({
  res,
  tab,
  tab2,
}: {
  res: any;
  tab: TradeTab1[];
  tab2: TTab2[];
}) => {
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
        <div className={styles.sec_2}>
          <Tab tab={tab} />
        </div>
      </section>
      <div className={styles.sec_3}>
        <h1>Two easy ways to trade in.</h1>
        <p>
          Trade in your way — online or at an Apple Store. From getting an
          estimate to returning your device, we ll help every step of the way.
        </p>
        <Tab2 tab2={tab2} />
      </div>
    </div>
  );
};

export default AppleTrade;
