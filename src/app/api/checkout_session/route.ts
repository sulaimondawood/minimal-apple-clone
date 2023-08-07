import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { NextResponse } from "next/server";
// import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as any, {
  apiVersion: "2022-11-15",
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const products = req.body.products;
  // const transformedProducts = products.map((item: any) => {
  //   price_data: {
  //     currency: "usd";
  //     product_data: {
  //       name: item.name;
  //     }
  //     // unit_amount:item,
  //     quantity: 1;
  //   }
  // });
  const products = req.body.products;
  console.log(products);
  try {
    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      // shipping_options:[]
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,

      // success_url: `${req.headers.origin}/?success=true`,
      // cancel_url: `${req.headers.origin}/?canceled=true`,
    };

    // Create Checkout Sessions from body params.
    const session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create(params);
    res.status(200).json(session);
    // res.redirect(303, session.url as any);
  } catch (err: any) {
    res.status(err.statusCode || 500).json(err.message);
  }
}
