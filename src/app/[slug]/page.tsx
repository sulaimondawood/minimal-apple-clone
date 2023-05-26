import Link from "next/link";
import styles from "./detail.module.scss";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

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
              <h2></h2>
            </div>
          </div>
          <div className={styles.grid_4_right}>
            <h2></h2>
          </div>
        </div>
      </div>
    </>
  );
}
