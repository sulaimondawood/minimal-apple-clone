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
    </section>
  );
};

export default page;
