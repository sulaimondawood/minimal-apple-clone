import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import styles2 from "./applecard.module.scss";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const AppleCard = ({ res }: { res: any }) => {
  return (
    <>
      <Nav bgState={res?.navBg} colorState={res?.navColor} state={false} />
      <div style={{ backgroundColor: res.navColor }} className={styles2.header}>
        <div>
          <h2 style={{ color: res.navBg }}>{res?.heroName}</h2>
          <div>
            <p>Overview</p>
            <Link href="">Apply</Link>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${urlForImage(res.heroBg).url()})` }}
        className={styles2.hero_detail}
      >
        <div>
          <img src={urlForImage(res?.heroTitle).url()} alt="" />
          <Link href={""}>Apply now</Link>
        </div>
      </div>
      <article style={{ backgroundColor: res.secBg }} className={styles2.sec_1}>
        <p style={{ backgroundImage: res.secTitleColor }}>
          The simplicity of Apple. In a credit card.
        </p>
        <p>{res.secText}</p>
      </article>
      <article
        style={{ backgroundColor: res.div1Bg }}
        className={styles2.grid1}
      >
        <h2>{res.div1Text}</h2>
        <img src={urlForImage(res.div1Image).url()} alt="" />
      </article>

      <article className={styles2.grid_2}>
        <div
          style={{ backgroundImage: res.div2ItemBgColor }}
          className={styles2.left}
        >
          <h1 style={{ color: res.div2ItemTextColor }}>{res.div2ItemText}</h1>
        </div>
        <div className={styles2.right}>
          <img src={urlForImage(res.div2Item2Image).url()} alt="" />
          <h1 style={{ color: res.div2Item2TextColor }}>{res.div2Item2Text}</h1>
        </div>
      </article>

      <article
        style={{ backgroundColor: res.div3BgColor }}
        className={styles2.grid_3}
      >
        <img src={urlForImage(res.div3Image).url()} alt="" />
        <h1 style={{ color: res.div3TitleColor }}>{res.div3Title}</h1>
      </article>
      <article className={styles2.grid_4}>
        <div className={styles2.left}>
          <h1 style={{ backgroundImage: res.div4Item1TextColor }}>
            {res.div4Item1Text}
          </h1>
        </div>
        <div
          style={{ backgroundImage: res.div4Item2BgColor }}
          className={styles2.right}
        >
          <h1 style={{ color: res.div4Item2TextColor }}>{res.div4Item2Text}</h1>
          <img
            className={styles2.img}
            src={urlForImage(res.div4Item2Image[0]).url()}
            alt=""
          />
          <img
            className={styles2.img2}
            src={urlForImage(res.div4Item2Image[1]).url()}
            alt=""
          />
        </div>
      </article>
      <article
        style={{
          backgroundColor: res.div5BgColor,
        }}
        className={styles2.grid_5}
      >
        <img src={urlForImage(res.div5Image).url()} alt="" />
        <h1 style={{ color: res.div5Title }}>{res.div5Title}</h1>
      </article>
      <article
        style={{ backgroundImage: res.div6BgColor }}
        className={styles2.grid_6}
      >
        <p>{res.div6Text}</p>
        <h1>{res.div6Title}</h1>
      </article>

      <article
        style={{
          backgroundImage: `url(${urlForImage(res.sec2BgColor).url()})`,
        }}
        className={styles2.sec_2}
      >
        <img src={urlForImage(res.sec2Img).url()} alt="" />
        <h1>{res.sec2Title}</h1>
        <p>{res.sec2Text}</p>
        <Link href={""}>Apply now</Link>
      </article>

      <Footer state="#f5f5f5" />
    </>
  );
};

export default AppleCard;
