import React from "react";
import styles from "./appleTrade.module.scss";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import Nav from "../nav/Nav";
import TradeTab1, { ContentI } from "@/types/TradeTab1";
import Tab from "../tabs1/Tab";

const AppleTrade = ({ res, tab }: { res: any; tab: TradeTab1[] }) => {
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
    </div>
  );
};

export default AppleTrade;
