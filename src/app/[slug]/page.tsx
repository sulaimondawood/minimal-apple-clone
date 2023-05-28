import Link from "next/link";
import styles from "./detail.module.scss";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { url } from "inspector";

export default async function Detail({ params }: any) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type == 'detail' && slug.current == "${slug}"][0]`
  );
  const res = data;

  // console.log(res);

  return (
    <>
      <div className={styles.header}>
        <div>
          <h2>{res?.name}</h2>
          <Link href="">Buy</Link>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${urlForImage(res?.image).url()})` }}
        className={styles.hero_detail}
      >
        <div>
          <h1>{res?.desc}</h1>
        </div>
      </div>

      <div className={styles.sec_2}>
        <h2>{res.sec2Title}</h2>
        <p>{res.sec2pricerange}</p>

        <div className={styles.grid_2}>
          <div className={styles.grid_item_left}>
            <div className={styles.f_sub_div}>
              <h2>{res.secGridOneItemTitle}</h2>
              <img src={urlForImage(res.sec2gridone[0]).url()} alt="" />
            </div>
            <div className={styles.btm_sub_div}>
              <div className={styles.sub_div}>
                <p>{res.secGridOneItemText1}</p>
                <h2>{res.secGridOneItemInch1}</h2>
              </div>
              <div className={styles.sub_div}>
                <p>{res.secGridOneItemText2}</p>
                <h2>{res.secGridOneItemInch2}</h2>
              </div>
            </div>
          </div>
          <div className={styles.grid_item_right}>
            <div className={styles.sub_div}>
              <p>{res.secGridOneItem2Title}</p>
              <h2>{res.secGridOneItem2Text}</h2>
            </div>
            <div className={styles.sub_div_2}>
              <img src={urlForImage(res.sec2gridone[1]).url()} alt="" />

              <p>{res.secGridOneItem3Title}</p>
              <h2>{res.secGridOneItem3Text}</h2>
            </div>
          </div>
        </div>
        <div className={styles.grid_3}>
          <img src={urlForImage(res?.secGridTwoItem1Img).url()} alt="" />
          <div>
            <p>{res?.secGridTwoItem2Title}</p>
            <h2>{res?.secGridTwoItem2Text}</h2>
            <img src={urlForImage(res?.secGridTwoItem2Img).url()} alt="" />
          </div>
        </div>
        <div className={styles.grid_4}>
          <div className={styles.grid_4_left}>
            <div
              className=""
              style={{
                backgroundImage: `url(${urlForImage(
                  res?.secGridThreeItem1Img
                ).url()})`,
              }}
            >
              <h2>{res.secGridThreeItem1Text}</h2>
            </div>
            <div className={styles.div_2}>
              <p>Superspeedy</p>
              <img src={urlForImage(res.secGridThreeItem2Img).url()} alt="" />
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${urlForImage(
                res?.secGridThreeItem3Img
              ).url()})`,
            }}
            className={styles.grid_4_right}
          >
            <h2>{res.secGridThreeItem3Text}</h2>
          </div>
        </div>
        <div className={styles.grid_5}>
          <div
            style={{
              backgroundImage: `url(${urlForImage(
                res?.secGridFourItem1Img
              ).url()})`,
            }}
            className={styles.grid_item_left}
          >
            <h2>{res.secGridFourItem1Text}</h2>
          </div>
          <div className={styles.grid_item_right}>
            <img src={urlForImage(res.secGridFourItem2Img).url()} alt="" />
          </div>
        </div>
        <div className={styles.grid_6}>
          <div className={styles.grid_6_item_left}>
            <p style={{ color: res.secGridFiveItem1Color }}>
              {res.secGridFiveItemText1}
            </p>
            <h2>{res.seGridFiveItem1Text2}</h2>
            <img src={urlForImage(res.secGridFiveItem1Img).url()} alt="" />
          </div>
          <div
            style={{
              backgroundImage: `url(${urlForImage(
                res.secGridFiveItem2Img
              ).url()})`,
            }}
            className={styles.grid_6_item_right}
          >
            <h2 style={{ color: res.secGridFiveItem2TextColor }}>
              {res.secGridFiveItem2Text}
            </h2>
          </div>
        </div>
      </div>

      <div className={styles.sec_3}>
        <div className={styles.sec_3_sub}>
          <div className={styles.top}>
            <h1>{res.sec2GridMainTitle}</h1>
          </div>
          <div className={styles.bottom}>
            <article className={styles.bottom_left}>
              <h2>{res.sec2GridItem1Title}</h2>
              <p>{res.sec2GridItem1Text}</p>
              <img src={urlForImage(res.sec2GridItem1Image).url()} alt="" />
            </article>
            <article className={styles.bottom_center}>
              <h2>{res.sec2GridItem2Title}</h2>
              <p>{res.sec2GridItem2Text}</p>
              <img src={urlForImage(res.sec2GridItem2Image).url()} alt="" />
            </article>
            <article className={styles.bottom_right}>
              <h2>{res.sec2GridItem3Title}</h2>

              <p>{res.sec2GridItem3Text}</p>

              <img src={urlForImage(res.sec2GridItem3Image).url()} alt="" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
