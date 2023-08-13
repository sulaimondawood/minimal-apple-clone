import React from "react";
import styles from "./appleTrade.module.scss";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";
import Nav from "../nav/Nav";
import TradeTab1, {
  ContentI,
  Faqs as Faqqs,
  Tab2 as TTab2,
} from "@/types/TradeTab1";
import Tab from "../tabs1/Tab";
import Tab2 from "../tabs2/Tab2";
import Faqs from "../faqs/Faqs";
import Footer from "../footer/Footer";

const AppleTrade = ({
  res,
  tab,
  tab2,
  faqs,
}: {
  faqs: Faqqs[];
  res: any;
  tab: TradeTab1[];
  tab2: TTab2[];
}) => {
  return (
    <div className={styles.grand_grand}>
      <Nav bgState={res?.navBg} colorState={res?.navColor} state={false} />
      <section className={styles.appleTradeSec}>
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
      </section>
      <div className={styles.sec_2}>
        <Tab tab={tab} />
      </div>
      <div className={styles.sec_3}>
        <h1>Two easy ways to trade in.</h1>
        <p>
          Trade in your way — online or at an Apple Store. From getting an
          estimate to returning your device, we ll help every step of the way.
        </p>
        <Tab2 tab2={tab2} />

        {/* // anusers */}
        <div className={styles.answers}></div>
      </div>
      <div className={styles.sec_4}>
        <h1>{res.sec2GrandTitle}</h1>
        <div className={styles.row}>
          <div
            style={{ backgroundImage: `url(${urlForImage(res.sec2BgColor)})` }}
            className={styles.item_1}
          >
            <h1>{res.sec2Title}</h1>
            <p>{res.sec2Text}</p>
          </div>
          <div
            style={{ backgroundImage: `url(${urlForImage(res.sec2Img)})` }}
            className={styles.item_1}
          >
            <h1>{res.sec2Title2}</h1>
            <p>{res.sec2Text2}</p>
          </div>
        </div>
      </div>
      {/* frequently asked question */}
      <div className={styles.sec_5}>
        <div className={styles.btn_wrp}>
          <Faqs faqs={faqs} />
        </div>
      </div>
      <Footer state="#f5f5f5" />
    </div>
  );
};

export default AppleTrade;
