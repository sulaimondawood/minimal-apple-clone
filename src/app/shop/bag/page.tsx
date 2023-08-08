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
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { headers } from "next/dist/client/components/headers";

//   const [sessionLoading, setSessionLoading] = useState(false);
//   const dispatch = useDispatch();
//   const { products, totalPrice } = useSelector(
//     (state: RootState) => state.basketSlice
//   );
//   console.log(products);

//   function removeProduct(id: any): any {
//     dispatch(removeFromBasket(id));
//   }

//   const handleStripeCheckout = async () => {
//     // const stripe = await getStripe();

//     // step 1: load stripe
//     const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
//     const stripe = await loadStripe(STRIPE_PK);

//     // step 2: define the data for monthly subscription
//     const body = {
//       interval: "month",
//       amount: 2000,
//       plan: "Monthly",
//       planDescription: "Subscribe for $20 per month",
//     };

//     // step 3: make a post fetch api call to /checkout-session handler
//     const result = await fetch("/api/checkout_session", {
//       method: "post",
//       body: JSON.stringify(body, null),
//       headers: {
//         "content-type": "application/json",
//       },
//     });

//     // step 4: get the data and redirect to checkout using the sessionId
//     const data = (await result.json()) as Stripe.Checkout.Session;
//     const sessionId = data.id!;
//     stripe?.redirectToCheckout({ sessionId });

//     setSessionLoading(true);

//     // const stripeCheckoutSession: Stripe.Checkout.Session = await fetchPostJSON(
//     //   "/api/checkout_session",

//     //   { id: 101, name: "Alice" }
//     // );

//     // internal server eerror
//     // if ((stripeCheckoutSession as any).status === 500) {
//     //   console.error((stripeCheckoutSession as any).message);
//     //   return;
//     // }

//     // const { error } = await stripe!.redirectToCheckout({
//     //   sessionId: stripeCheckoutSession.id,
//     // });
//     // console.warn(error.message);

//     // toast.loading("Redirecting...");
//     // setSessionLoading(false);
//   };

//   return (
//     <div>
//       <Nav bgState={"white"} colorState={"black"} state={false} />
//       <section className={styles.section}>
//         <div className={styles.top}>
//           <h1>Review your bag.</h1>
//           <p>Free delivery and free returns.</p>
//         </div>

//         {products.length <= 0 ? (
//           <div className={styles.oops}>
//             <h1>Oopss no products in cart yet!!🤨🙂</h1>
//           </div>
//         ) : (
//           <div className={styles.bottom}>
//             {products?.map((item: any) => {
//               return (
//                 <div className={styles.product_row} key={item._id}>
//                   <div className={styles.sub_div}>
//                     <img
//                       className={styles.img}
//                       src={urlForImage(item.bagImage).url()}
//                       alt=""
//                     />
//                     <div>
//                       <h2>{item.name}</h2>
//                       <p>Show product details</p>
//                     </div>
//                   </div>

//                   <div className={styles.count_btn_price}>
//                     <div className={styles.product_count}>
//                       <h2>{item.quantity}</h2>
//                       <span>
//                         <FaAngleDown />
//                       </span>
//                     </div>
//                     <div className={styles.price_div}>
//                       {/* <h2>${item.priceOnCart}</h2> */}
//                       <NumericFormat
//                         value={`${item.priceOnCart}`}
//                         displayType="text"
//                         decimalScale={2}
//                         fixedDecimalScale
//                         prefix="$"
//                       />
//                       <button onClick={() => removeProduct(item)}>
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <div className={styles.sub_total}>
//               <div className={styles.sub_1}>
//                 <p>Subtotal</p>
//                 <p>${totalPrice}</p>
//               </div>
//               <div className={styles.sub_1}>
//                 <p>Shipping </p>
//                 <p>${"free"}</p>
//               </div>
//             </div>

//             <div className={styles.total}>
//               <h2>Total</h2>
//               {/* <h2>${totalPrice}</h2> */}
//               <NumericFormat
//                 value={`${totalPrice}`}
//                 displayType="text"
//                 decimalScale={2}
//                 fixedDecimalScale
//                 prefix="$"
//               />
//             </div>

//             <div className={styles.checkout_wrp}>
//               <p>How would you like to check out?</p>
//               <div className={styles.row}>
//                 <div className="">
//                   <h3>
//                     Pay Monthly with Apple Card $108.25/mo.per month at 0%
//                     APRFootnote at 0% APR◊
//                   </h3>
//                   <button>
//                     Check Out with Apple Card Monthly Installments
//                   </button>
//                 </div>
//                 <div className="">
//                   <h3>Pay in Full $3,327.00</h3>
//                   <button onClick={() => handleStripeCheckout()}>
//                     Check Out
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </section>
//       <Footer state="f5f5f5" />
//     </div>
//   );
// };
const Page = () => {
  const [sessionLoading, setSessionLoading] = useState(false);
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector(
    (state: RootState) => state.basketSlice
  );
  const objProducts = { products };

  function removeProduct(id: any): any {
    dispatch(removeFromBasket(id));
  }

  const handleStripeCheckout = async () => {
    const stripe = await getStripe();
    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      "/api/checkout_session",
      { products }
    );

    // internal server eerror
    if (checkoutSession) {
      stripe?.redirectToCheckout({ sessionId: checkoutSession.id });
    }

    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    console.warn(error.message);

    // toast.loading("Redirecting...");
  };
  // const handleStripeCheckout = async () => {
  //   const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
  //     "/api/checkout_session",
  //     { products }
  //   );

  //   // internal server eerror
  //   if ((checkoutSession as any).statusCode === 500) {
  //     console.error((checkoutSession as any).message);
  //     return;
  //   }

  //   //Reddirect to checkout
  //   const stripe = await getStripe();
  //   const { error } = await stripe!.redirectToCheckout({
  //     sessionId: checkoutSession.id,
  //   });
  //   console.warn(error.message);

  //   // toast.loading("Redirecting...");
  // };

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
                  <button type="button" onClick={handleStripeCheckout}>
                    Check Out
                  </button>
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
