import { client } from "../../../sanity/lib/client";
import AppleTrade from "../components/appleTrade/AppleTrade";
import TradeTab1, { Faqs } from "@/types/TradeTab1";
import SharedLayout from "../components/sharedLayout/SharedLayout";
import AppleCard from "../components/appleCard/AppleCard";
// import { useRef } from "react";

let layoutState: any;

export default async function Detail({ params }: any) {
  const { slug } = params;
  const data = await client.fetch(
    `*[_type in ['details2', 'detail'] && slug.current == "${slug}" ][0]`
  );
  const res = data;
  const tab2 = await client.fetch(
    `*[_type == 'appleTab2'] | order(_createdAt)`
  );
  const tab = await client.fetch(`*[_type == 'appleTab1'] | order(_createdAt)`);
  const faqs = await client.fetch(`*[_type == 'faqs']`);

  return slugContent(res?.layoutState, res, tab, tab2, faqs);
}

function slugContent(
  state: any,
  res: any,
  tab: TradeTab1[],
  tab2: any,
  faqs: Faqs[]
) {
  if (state === "sharedLayout") {
    return <SharedLayout res={res} />;
  }
  if (state === "appleCard") {
    return <AppleCard res={res} />;
  }
  if (state === "appleTradeIn") {
    return <AppleTrade tab={tab} res={res} tab2={tab2} faqs={faqs} />;
  }
}
