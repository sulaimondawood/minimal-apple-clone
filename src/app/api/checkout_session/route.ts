import type { NextApiRequest, NextApiResponse } from "next";

import Stripe from "stripe";

const stripe = require("stripe")(
  "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"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body.products);

    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_type: ["card"],
        billing_address_collection: "auto",
        // shipping_options:[]
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "{{PRICE_ID}}",
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
