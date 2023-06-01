import Nav from "@/app/components/nav/Nav";
import React from "react";
import { client } from "../../../../sanity/lib/client";
import styles from "./card.module.scss";
import Link from "next/link";
import { urlForImage } from "../../../../sanity/lib/image";

const page = async ({ params }: { params: { card: string } }) => {
  const { card } = params;
  // console.log(params);

  const data = await client.fetch(
    `*[_type == 'details2' && slug.current == "${card}"][0]`
  );

  //   console.log(data);

  return (
    <section>
      <Nav bgState={data?.navBg} colorState={data.navColor} state={false} />
      <div style={{ backgroundColor: data.navColor }} className={styles.header}>
        <div>
          <h2 style={{ color: data.navBg }}>{data?.heroName}</h2>
          <div>
            <p>Overview</p>
            <Link href="">Apply</Link>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${urlForImage(data.heroBg).url()})` }}
        className={styles.hero_detail}
      >
        <div>
          <img src={urlForImage(data?.heroTitle).url()} alt="" />
          <Link href={""}>Apply now</Link>
        </div>
      </div>
      <article style={{ backgroundColor: data.secBg }} className={styles.sec_1}>
        <p style={{ backgroundImage: data.secTitleColor }}>
          The simplicity of Apple. In a credit card.
        </p>
        <p>{data.secText}</p>
      </article>
      <article
        style={{ backgroundColor: data.div1Bg }}
        className={styles.grid1}
      >
        <h2>{data.div1Text}</h2>
        <img src={urlForImage(data.div1Image).url()} alt="" />
      </article>
      <article className={styles.grid_2}>
        <div
          style={{ backgroundImage: data.div2ItemBgColor }}
          className={styles.left}
        >
          <h1 style={{ color: data.div2ItemTextColor }}>{data.div2ItemText}</h1>
        </div>
        <div className={styles.right}>
          <img src={urlForImage(data.div2Item2Image).url()} alt="" />
          <h1 style={{ color: data.div2Item2TextColor }}>
            {data.div2Item2Text}
          </h1>
        </div>
      </article>
      <article
        style={{ backgroundColor: data.div3BgColor }}
        className={styles.grid_3}
      >
        <img src={urlForImage(data.div3Image).url()} alt="" />
        <h1 style={{ color: data.div3TitleColor }}>{data.div3Title}</h1>
      </article>
      <article className={styles.grid_4}>
        <div className={styles.left}>
          <h1 style={{ backgroundImage: data.div4Item1TextColor }}>
            {data.div4Item1Text}
          </h1>
        </div>
        <div
          style={{ backgroundImage: data.div4Item2BgColor }}
          className={styles.right}
        >
          <h1 style={{ color: data.div4Item2TextColor }}>
            {data.div4Item2Text}
          </h1>
          <img
            className={styles.img}
            src={urlForImage(data.div4Item2Image[0]).url()}
            alt=""
          />
          <img src={urlForImage(data.div4Item2Image[1]).url()} alt="" />
        </div>
      </article>
    </section>
  );
};

export default page;
