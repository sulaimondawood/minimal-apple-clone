import Link from "next/link";
import styles from "./detail.module.scss";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

export default async function Detail({ params }: any) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type == 'detail' && slug.current == "${slug}"][0]`
    // `*[_type == 'detail' && slug.current == ${slug}][0]`
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
        style={{ backgroundImage: `url(${urlForImage(res.image).url()})` }}
        className={styles.hero_detail}
      >
        <div>
          <h1>{res?.desc}</h1>
        </div>
      </div>
    </>
  );
}
