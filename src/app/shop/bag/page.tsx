"use client";

import Nav from "@/app/components/nav/Nav";
import styles from "./bag.module.scss";
import { useAppSelector } from "@/redux/hooks/hook";
import { LandingProducts } from "@/types/TradeTab1";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Page = () => {
  const products = useSelector(
    (state: RootState) => state.basketSlice.products
  );
  console.log(products);

  return (
    <div>
      <Nav bgState={"white"} colorState={"black"} state={false} />
      <section className={styles.section}>
        <div className={styles.top}>
          <h1>Review your bag.</h1>
          <p>Free delivery and free returns.</p>
        </div>

        <div className={styles.bottom}>
          {products?.map((item: LandingProducts) => {
            return (
              <div key={item._id}>
                <div>
                  <img src="" alt="" />
                  <div>
                    <h2>{item.name}</h2>
                    <p>Show product details</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Page;
