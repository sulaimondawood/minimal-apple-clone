"use client";

import Nav from "@/app/components/nav/Nav";
import styles from "./bag.module.scss";
import { useAppSelector } from "@/redux/hooks/hook";
import { LandingProducts } from "@/types/TradeTab1";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { FaAngleDown } from "react-icons/fa";
import { removeFromBasket } from "@/redux/basketSlice";
import { urlForImage } from "../../../../sanity/lib/image";
import Footer from "@/app/components/footer/Footer";
import { NumericFormat } from "react-number-format";
import { useEffect, useState } from "react";
import Stripe from "stripe";
import { fetchPostJSON } from "@/lib/stripe/stripe-api-helper";
import getStripe from "@/lib/stripe/stripe";
import { toast } from "react-hot-toast";

const Page = () => {
  const [sessionLoading, setSessionLoading] = useState(false);
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.basketSlice
  );
  console.log(products);

  function removeProduct(id: any): any {
    dispatch(removeFromBasket(id));
  }

  const handleStripeCheckout = async () => {
    // initialized stripe instance once
    const stripe = await getStripe();
    setSessionLoading(true);
    // const stripeCheckoutSession: Stripe.Checkout.Session = await fetchPostJSON(
    // const stripeCheckoutSession = await fetchPostJSON(
    //   "/src/app/api/checkout_session",
    //   products
    // );

    const stripeCheckoutSession = await fetch(
      "/src/app/api/checkout_session/route.ts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }
    );
    // internal server eerror
    if ((stripeCheckoutSession as any).status === 500) return;
    const data = await stripeCheckoutSession.json();

    // const { error } = await stripe!.redirectToCheckout({
    //   sessionId: stripeCheckoutSession.id,
    // });
    toast.loading("Redirecting...");
    setSessionLoading(false);
  };

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
                    <img
                      className={styles.img}
                      src={urlForImage(item.bagImage).url()}
                      alt=""
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p>Show product details</p>
                    </div>
                  </div>

                  <div className={styles.count_btn_price}>
                    <div className={styles.product_count}>
                      <h2>{item.quantity}</h2>
                      <span>
                        <FaAngleDown />
                      </span>
                    </div>
                    <div className={styles.price_div}>
                      {/* <h2>${item.priceOnCart}</h2> */}
                      <NumericFormat
                        value={`${item.priceOnCart}`}
                        displayType="text"
                        decimalScale={2}
                        fixedDecimalScale
                        prefix="$"
                      />
                      <button onClick={() => removeProduct(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className={styles.sub_total}>
              <div className={styles.sub_1}>
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </div>
              <div className={styles.sub_1}>
                <p>Shipping </p>
                <p>${"free"}</p>
              </div>
            </div>

            <div className={styles.total}>
              <h2>Total</h2>
              {/* <h2>${totalPrice}</h2> */}
              <NumericFormat
                value={`${totalPrice}`}
                displayType="text"
                decimalScale={2}
                fixedDecimalScale
                prefix="$"
              />
            </div>

            <div className={styles.checkout_wrp}>
              <p>How would you like to check out?</p>
              <div className={styles.row}>
                <div className="">
                  <h3>
                    Pay Monthly with Apple Card $108.25/mo.per month at 0%
                    APRFootnote at 0% APR◊
                  </h3>
                  <button>
                    Check Out with Apple Card Monthly Installments
                  </button>
                </div>
                <div className="">
                  <h3>Pay in Full $3,327.00</h3>
                  <button onClick={handleStripeCheckout}>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer state="f5f5f5" />
    </div>
  );
};

export default Page;
