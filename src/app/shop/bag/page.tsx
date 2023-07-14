"use client";

import Nav from "@/app/components/nav/Nav";
import styles from "./bag.module.scss";
import { useAppSelector } from "@/redux/hooks/hook";
import { LandingProducts } from "@/types/TradeTab1";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { FaAngleDown } from "react-icons/fa";
import { removeFromBasket } from "@/redux/basketSlice";

const Page = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.basketSlice);
  console.log(products);

  function removeProduct(id: any): any {
    dispatch(removeFromBasket(id));
  }
  return (
    <div>
      <Nav bgState={"white"} colorState={"black"} state={false} />
      <section className={styles.section}>
        <div className={styles.top}>
          <h1>Review your bag.</h1>
          <p>Free delivery and free returns.</p>
        </div>

        {products.length <= 0 ? (
          <div className={styles.oops}>
            <h1>Oopss no products in cart yet!!🤨🙂</h1>
          </div>
        ) : (
          <div className={styles.bottom}>
            {products?.map((item: any) => {
              return (
                <div className={styles.product_row} key={item._id}>
                  <div className={styles.sub_div}>
                    <img src="" alt="" />
                    <div>
                      <h2>{item.name}</h2>
                      <p>Show product details</p>
                    </div>
                  </div>

                  <div className={styles.product_count}>
                    <h2>{item.quantity}</h2>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className={styles.price_div}>
                    <h2>$1000</h2>
                    <button onClick={() => removeProduct(item)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Page;
