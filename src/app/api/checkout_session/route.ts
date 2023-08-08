import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});
export async function POST(req: NextRequest) {
  const products = await req.json();
  const transformedProducts = products.products.map((item: any) => {
    price_data: {
      currency: "usd";
      product_data: {
        name: item.name;
      }
      // unit_amount:item,
      quantity: 1;
    }
  });

  console.log(products);
  try {
    if (products.length > 0) {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        invoice_creation: {
          enabled: true,
        },
        line_items: transformedProducts,
        payment_intent_data: {},
        success_url: `${req.headers.get("origin")}/success`,
        cancel_url: `${req.headers.get("origin")}/?canceled=true`,

        // line_items: [
        //   {
        //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        //     price: "{{PRICE_ID}}",
        //     quantity: 1,
        //   },
        // ],
        // success_url: `${req.headers.get(
        //   "origin"
        // )}/success?session_id={CHECKOUT_SESSION_ID}`,
        // cancel_url: `${req.headers.get("origin")}/checkout`,
      };

      // Create Checkout Sessions from body params.
      const checkoutSession = await stripe.checkout.sessions.create(params);
      return NextResponse.json({ checkoutSession });
      // return new Response(JSON.stringify(checkoutSession));

      // old way of getting status
      // res.status(200).json(checkoutSession);
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);

    return NextResponse.json(err.message);
    // return new Response("OK");
    // res.status(500).json({ statusCode: 500, message: errorMessage });
    // console.log(err);
  }
}
