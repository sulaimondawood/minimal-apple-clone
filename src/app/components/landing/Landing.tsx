import Link from "next/link";
import styles from "./landing.module.scss";
import { urlForImage } from "../../../../sanity/lib/image";

interface Iitems {
  learnmore: "Learn More";
  buy: "Buy";
  name: string;
  slug: { current: string };
  desc: string;
  image: any;
  color: string;
  logo: any;
  // image: {
  //   asset: {
  //     _ref: string;
  //   };
  // };
}

export default function Landing({ landingProducts, landingProducts2 }: any) {
  // console.log(landingProducts);
  return (
    <>
      <section className={styles.hero}>
        <h1>Introducing the new MacBook Pro and Mac mini.</h1>
        <button>Watch the announcement</button>
      </section>

      <div className={styles.products_wrp}>
        {landingProducts.map((items: Iitems) => {
          return (
            <Link
              href={`/${items.slug.current}`}
              key={items.slug.current}
              className={styles.bg_item}
              style={{
                backgroundImage: `url(${urlForImage(items?.image).url()})`,
              }}
            >
              <h1 className="" style={{ color: items.color }}>
                {items.name}
              </h1>
              <h2 style={{ color: items.color }}>{items.desc}</h2>

              <div className={styles.btn_wrap}>
                <Link href=""> {items.learnmore} </Link>
                <Link href="/order">{items.buy}</Link>
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.products_2_wrp}>
        {landingProducts2.map((items: Iitems) => {
          return (
            <Link
              href={`/${items.slug.current}`}
              key={items.slug.current}
              className={styles.bg_item}
              style={{
                backgroundImage: `url(${urlForImage(items?.image).url()})`,
              }}
            >
              <img
                className={
                  items.slug.current === "wwdc23"
                    ? styles.logo_initial
                    : styles.logo
                }
                src={urlForImage(items?.logo)?.url()}
                alt="alt"
              />
              <h2 style={{ color: items.color }}>{items.desc}</h2>

              <div className={styles.btn_wrap}>
                <Link href=""> {items.learnmore} </Link>
                <Link href="/order">{items.buy}</Link>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
