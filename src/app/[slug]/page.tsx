import Link from "next/link";
import styles from "./detail.module.scss";
import styles2 from "../utils/card.module.scss";
import styles3 from "../utils/appleTrade.module.scss";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import AppleTrade from "../components/appleTrade/AppleTrade";
import TradeTab1 from "@/types/TradeTab1";

let layoutState: any;

// export default async function Detail({ params }: any) {
//   const { slug } = params;
//   const slugD = slug;

//   const res = await client.fetch(
//     `*[_type == 'detail' && slug.current == "${slug}"][0]`
//   );
//   const res = data;
//   console.log(res.layoutState);

//   return (
//     <>
//       <Nav
//         bgState={res.sec2BackgroundColor}
//         colorState={res.eachSecTitleColor}
//         state={false}
//       />
//       <section
//         style={{ backgroundColor: res.sec2BackgroundColor }}
//         className={styles.grand_wrp}
//       >
//         <div
//           style={{ backgroundColor: res.headerBackgroundColor }}
//           className={styles.header}
//         >
//           <div>
//             <h2 style={{ color: res.eachSecTitleColor }}>{res?.name}</h2>
//             <div>
//               <p>Overview</p>
//               <Link href="">Buy</Link>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{ backgroundColor: res.heroColor }}
//           className={styles.hero_detail}
//         >
//           <div>
//             <h1 style={{ color: res.heroDescColor }}>{res?.desc}</h1>
//             <img src={urlForImage(res?.image).url()} alt="" />
//           </div>
//         </div>

//         <div
//           style={{ backgroundColor: res.sec2BackgroundColor }}
//           className={styles.sec_2}
//         >
//           <h2 style={{ color: res.sec2TitleColor }}>{res.sec2Title}</h2>
//           <p style={{ color: res.sec2pricerangeColor }}>{res.sec2pricerange}</p>

//           <div className={styles.grid_2}>
//             <div
//               style={{ backgroundColor: res.secGridOneItemColor }}
//               className={styles.grid_item_left}
//             >
//               <div className={styles.f_sub_div}>
//                 <h2 style={{ color: res.secGridOneItemTitleColor }}>
//                   {res.secGridOneItemTitle}
//                 </h2>
//                 <img src={urlForImage(res.sec2gridone[0]).url()} alt="" />
//               </div>
//               <div className={styles.btm_sub_div}>
//                 <div className={styles.sub_div}>
//                   <p style={{ color: res?.secGridOneItemText1Color }}>
//                     {res?.secGridOneItemText1}
//                   </p>
//                   <h2 style={{ color: res?.secGridOneItemInch1Color }}>
//                     {res?.secGridOneItemInch1}
//                   </h2>
//                 </div>
//                 <div className={styles.sub_div}>
//                   <p style={{ color: res?.secGridOneItemText2Color }}>
//                     {res?.secGridOneItemText2}
//                   </p>
//                   <h2 style={{ color: res?.secGridOneItemInch2Color }}>
//                     {res?.secGridOneItemInch2}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.grid_item_right}>
//               <div
//                 style={{
//                   backgroundColor: res?.secGridOneItem2Color,
//                   backgroundImage: res.sec2gridoneimgstate
//                     ? `url(${urlForImage(res?.sec2gridone[1]).url()})`
//                     : "",
//                 }}
//                 className={styles.sub_div}
//               >
//                 <p style={{ color: res?.secGridOneItemTitleColor }}>
//                   {res?.secGridOneItem2Title}
//                 </p>
//                 <h2 style={{ backgroundImage: res?.secGridOneItem2TextColor }}>
//                   {res?.secGridOneItem2Text}
//                 </h2>
//               </div>
//               <div
//                 style={{ backgroundColor: res?.secGridOneItem3Color }}
//                 className={styles.sub_div_2}
//               >
//                 <img
//                   className={styles.option_img}
//                   style={{ display: res?.sec2gridone[3] ? "none" : "block" }}
//                   src={urlForImage(res?.sec2gridone[1]).url()}
//                   alt=""
//                 />

//                 <p style={{ color: res?.secGridOneItemTitleColor }}>
//                   {res.secGridOneItem3Title}
//                 </p>
//                 <h2 style={{ color: res?.secGridOneItemText2Color }}>
//                   {res?.secGridOneItem3Text}
//                 </h2>

//                 <img
//                   className={styles.option_img}
//                   src={
//                     res.sec2gridoneimgstate
//                       ? urlForImage(res?.sec2gridone[3])?.url()
//                       : ""
//                   }
//                   alt=""
//                 />
//               </div>
//             </div>
//           </div>
//           <div className={styles.grid_3}>
//             <img src={urlForImage(res?.secGridTwoItem1Img).url()} alt="" />
//             <div style={{ backgroundColor: res.secGridTwoItem2BgColor }}>
//               <p style={{ color: res.secGridTwoItem2TitleColor }}>
//                 {res?.secGridTwoItem2Title}
//               </p>
//               <h2 style={{ color: res.secGridTwoItem2TextColor }}>
//                 {res?.secGridTwoItem2Text}
//               </h2>
//               <img src={urlForImage(res?.secGridTwoItem2Img).url()} alt="" />
//             </div>
//           </div>
//           {res.sec2Grid4State && (
//             <div className={styles.grid_4}>
//               <div className={styles.grid_4_left}>
//                 <div
//                   className=""
//                   style={{
//                     backgroundImage: res.sec2gridoneimgstate
//                       ? ""
//                       : `url(${urlForImage(res?.secGridThreeItem1Img).url()})`,
//                   }}
//                 >
//                   <h2 style={{ color: res?.secGridThreeItem1TextColor }}>
//                     {res?.secGridThreeItem1Text}
//                   </h2>
//                 </div>
//                 <div
//                   style={{ backgroundColor: res?.secGridThreeItem2Color }}
//                   className={styles.div_2}
//                 >
//                   <p style={{ color: res?.secGridThreeItem2TextColor }}>
//                     {res?.secGridThreeItem2Text}
//                   </p>
//                   <img
//                     src={
//                       res.sec2gridoneimgstate
//                         ? ""
//                         : urlForImage(res?.secGridThreeItem2Img).url()
//                     }
//                     alt=""
//                   />
//                 </div>
//               </div>
//               <div
//                 style={{
//                   backgroundImage: res.sec2gridoneimgstate
//                     ? ""
//                     : `url(${urlForImage(res?.secGridThreeItem3Img).url()})`,
//                 }}
//                 className={styles.grid_4_right}
//               >
//                 <h2 style={{ color: res?.secGridThreeItem3TextColor }}>
//                   {res?.secGridThreeItem3Text}
//                 </h2>
//               </div>
//             </div>
//           )}

//           <div className={styles.grid_5}>
//             <div
//               style={{
//                 backgroundImage: `url(${urlForImage(
//                   res?.secGridFourItem1Img
//                 ).url()})`,
//               }}
//               className={styles.grid_item_left}
//             >
//               <h2 style={{ color: res.secGridFourItem1TextColor }}>
//                 {res.secGridFourItem1Text}
//               </h2>
//             </div>
//             <div className={styles.grid_item_right}>
//               <img src={urlForImage(res.secGridFourItem2Img).url()} alt="" />
//             </div>
//           </div>
//           <div className={styles.grid_6}>
//             <div
//               style={{ backgroundColor: res.secGridFiveItem1Color }}
//               className={styles.grid_6_item_left}
//             >
//               <p style={{ color: res.secGridFiveItem1Color }}>
//                 {res.secGridFiveItemText1}
//               </p>
//               <h2 style={{ color: res.seGridFiveItem1Text2Color }}>
//                 {res.seGridFiveItem1Text2}
//               </h2>
//               <img src={urlForImage(res.secGridFiveItem1Img).url()} alt="" />
//             </div>
//             <div
//               style={{
//                 backgroundImage: `url(${urlForImage(
//                   res.secGridFiveItem2Img
//                 ).url()})`,
//               }}
//               className={styles.grid_6_item_right}
//             >
//               <h2 style={{ color: res.secGridFiveItem2TextColor }}>
//                 {res.secGridFiveItem2Text}
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{ backgroundColor: res.sec2BackgroundColor }}
//           className={styles.sec_3}
//         >
//           <div className={styles.sec_3_sub}>
//             <div className={styles.top}>
//               <h1 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                 {res.sec2GridMainTitle}
//               </h1>
//             </div>
//             <div className={styles.bottom}>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec2GridItem1Title}
//                 </h2>
//                 <Link href={""}>{res.sec2GridItem1Text}</Link>
//                 <img src={urlForImage(res.sec2GridItem1Image).url()} alt="" />
//               </article>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec2GridItem2Title}
//                 </h2>
//                 <Link href={""}>{res.sec2GridItem2Text}</Link>
//                 <img src={urlForImage(res.sec2GridItem2Image).url()} alt="" />
//               </article>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec2GridItem3Title}
//                 </h2>

//                 <Link href={""}>{res.sec2GridItem3Text}</Link>

//                 <img src={urlForImage(res.sec2GridItem3Image).url()} alt="" />
//               </article>
//             </div>
//           </div>
//         </div>
//         <div
//           style={{ backgroundColor: res.sec2BackgroundColor }}
//           className={styles.sec_3}
//         >
//           <div className={styles.sec_3_sub}>
//             <div className={styles.top}>
//               <h1 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                 {res.sec3GridMainTitle}
//               </h1>
//             </div>
//             <div className={styles.bottom}>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <img src={urlForImage(res.sec3GridItem1Icon).url()} alt="" />
//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec3GridItem1Title}
//                 </h2>
//                 <Link href={""}>{res.sec3GridItem1Text}</Link>
//                 <img src={urlForImage(res?.sec3GridItem1Image)?.url()} alt="" />
//               </article>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <img src={urlForImage(res.sec3GridItem2Icon).url()} alt="" />

//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec3GridItem2Title}
//                 </h2>
//                 <Link href={""}>{res.sec3GridItem2Text}</Link>
//                 <img src={urlForImage(res?.sec3GridItem2Image).url()} alt="" />
//               </article>
//               <article
//                 style={{ backgroundColor: res.eachGridItemColor }}
//                 className={styles.bottom_item}
//               >
//                 <img src={urlForImage(res.sec3GridItem3Icon).url()} alt="" />

//                 <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
//                   {res.sec3GridItem3Title}
//                 </h2>

//                 <p>{res.sec3GridItem3Text}</p>

//                 <img src={urlForImage(res.sec3GridItem3Image).url()} alt="" />
//               </article>
//             </div>
//           </div>
//         </div>

//         <div
//           style={{ backgroundColor: res.sec2BackgroundColor }}
//           className={styles.sec_4}
//         >
//           <div className={styles.sec_4_sub}>
//             <article className={styles.sub_wrp}>
//               <div className={styles.top}>
//                 <h1 style={{ color: res.eachSecTitleColor }}>
//                   Which iPhone is right for you?
//                 </h1>
//                 <Link href={""}>Compare all iPhone Models</Link>
//               </div>
//               <div className={styles.bottom}>
//                 <article className={styles.col_1}>
//                   <div>
//                     <img
//                       src={urlForImage(res.sec4GridItem1Image).url()}
//                       alt=""
//                     />
//                     <h2 style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem1Name}
//                     </h2>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem1Text}
//                     </p>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem1Price}
//                     </p>
//                     <Link className={styles.buy_link} href={""}>
//                       Buy
//                     </Link>
//                     <Link className={styles.l_link} href={""}>
//                       Learn more
//                     </Link>
//                   </div>
//                   <div>
//                     <img
//                       src={urlForImage(res.sec4GridItem2Image).url()}
//                       alt=""
//                     />
//                     <h2 style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem2Name}
//                     </h2>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem2Text}
//                     </p>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem2Price}
//                     </p>
//                     <Link className={styles.buy_link} href={""}>
//                       Buy
//                     </Link>
//                     <Link className={styles.l_link} href={""}>
//                       Learn more
//                     </Link>
//                   </div>
//                   <div>
//                     <img
//                       src={urlForImage(res.sec4GridItem3Image).url()}
//                       alt=""
//                     />
//                     <h2 style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem3Name}
//                     </h2>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem3Text}
//                     </p>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem3Price}
//                     </p>
//                     <Link className={styles.buy_link} href={""}>
//                       Buy
//                     </Link>
//                     <Link className={styles.l_link} href={""}>
//                       Learn more
//                     </Link>
//                   </div>
//                   <div>
//                     <img
//                       src={urlForImage(res.sec4GridItem4Image).url()}
//                       alt=""
//                     />
//                     <h2 style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem4Name}
//                     </h2>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem4Text}
//                     </p>
//                     <p style={{ color: res.eachSecTitleColor }}>
//                       {res.sec4GridItem4Price}
//                     </p>
//                     <Link className={styles.buy_link} href={""}>
//                       Buy
//                     </Link>
//                     <Link className={styles.l_link} href={""}>
//                       Learn more
//                     </Link>
//                   </div>
//                 </article>
//               </div>
//             </article>
//           </div>
//         </div>
//       </section>
//       <Footer state={res.sec2BackgroundColor} />
//     </>
//   );
// }
export default async function Detail({ params }: any) {
  const { slug } = params;

  const data = await client.fetch(
    `*[_type in ['details2', 'detail'] && slug.current == "${slug}" ][0]`
  );

  const res = data;

  const tab2 = await client.fetch(`*[_type == 'appleTab2']`);
  const tab = await client.fetch(`*[_type == 'appleTab1']`);

  return slugContent(res.layoutState, res, tab, tab2);
}

function slugContent(state: any, res: any, tab: TradeTab1[], tab2: any) {
  if (state === "sharedLayout") {
    return (
      <>
        <Nav
          bgState={res.sec2BackgroundColor}
          colorState={res.eachSecTitleColor}
          state={false}
        />
        <section
          style={{ backgroundColor: res.sec2BackgroundColor }}
          className={styles.grand_wrp}
        >
          <div
            style={{ backgroundColor: res.headerBackgroundColor }}
            className={styles.header}
          >
            <div>
              <h2 style={{ color: res.eachSecTitleColor }}>{res?.name}</h2>
              <div>
                <p>Overview</p>
                <Link href="">Buy</Link>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: res.heroColor }}
            className={styles.hero_detail}
          >
            <div>
              <h1 style={{ color: res.heroDescColor }}>{res?.desc}</h1>
              <img src={urlForImage(res?.image).url()} alt="" />
            </div>
          </div>

          <div
            style={{ backgroundColor: res.sec2BackgroundColor }}
            className={styles.sec_2}
          >
            <h2 style={{ color: res.sec2TitleColor }}>{res.sec2Title}</h2>
            <p style={{ color: res.sec2pricerangeColor }}>
              {res.sec2pricerange}
            </p>

            <div className={styles.grid_2}>
              <div
                style={{ backgroundColor: res.secGridOneItemColor }}
                className={styles.grid_item_left}
              >
                <div className={styles.f_sub_div}>
                  <h2 style={{ color: res.secGridOneItemTitleColor }}>
                    {res.secGridOneItemTitle}
                  </h2>
                  <img src={urlForImage(res.sec2gridone[0]).url()} alt="" />
                </div>
                <div className={styles.btm_sub_div}>
                  <div className={styles.sub_div}>
                    <p style={{ color: res?.secGridOneItemText1Color }}>
                      {res?.secGridOneItemText1}
                    </p>
                    <h2 style={{ color: res?.secGridOneItemInch1Color }}>
                      {res?.secGridOneItemInch1}
                    </h2>
                  </div>
                  <div className={styles.sub_div}>
                    <p style={{ color: res?.secGridOneItemText2Color }}>
                      {res?.secGridOneItemText2}
                    </p>
                    <h2 style={{ color: res?.secGridOneItemInch2Color }}>
                      {res?.secGridOneItemInch2}
                    </h2>
                  </div>
                </div>
              </div>
              <div className={styles.grid_item_right}>
                <div
                  style={{
                    backgroundColor: res?.secGridOneItem2Color,
                    backgroundImage: res.sec2gridoneimgstate
                      ? `url(${urlForImage(res?.sec2gridone[1]).url()})`
                      : "",
                  }}
                  className={styles.sub_div}
                >
                  <p style={{ color: res?.secGridOneItemTitleColor }}>
                    {res?.secGridOneItem2Title}
                  </p>
                  <h2
                    style={{ backgroundImage: res?.secGridOneItem2TextColor }}
                  >
                    {res?.secGridOneItem2Text}
                  </h2>
                </div>
                <div
                  style={{ backgroundColor: res?.secGridOneItem3Color }}
                  className={styles.sub_div_2}
                >
                  <img
                    className={styles.option_img}
                    style={{ display: res?.sec2gridone[3] ? "none" : "block" }}
                    src={urlForImage(res?.sec2gridone[1]).url()}
                    alt=""
                  />

                  <p style={{ color: res?.secGridOneItemTitleColor }}>
                    {res.secGridOneItem3Title}
                  </p>
                  <h2 style={{ color: res?.secGridOneItemText2Color }}>
                    {res?.secGridOneItem3Text}
                  </h2>

                  <img
                    className={styles.option_img}
                    src={
                      res.sec2gridoneimgstate
                        ? urlForImage(res?.sec2gridone[3])?.url()
                        : ""
                    }
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.grid_3}>
              <img src={urlForImage(res?.secGridTwoItem1Img).url()} alt="" />
              <div style={{ backgroundColor: res.secGridTwoItem2BgColor }}>
                <p style={{ color: res.secGridTwoItem2TitleColor }}>
                  {res?.secGridTwoItem2Title}
                </p>
                <h2 style={{ color: res.secGridTwoItem2TextColor }}>
                  {res?.secGridTwoItem2Text}
                </h2>
                <img src={urlForImage(res?.secGridTwoItem2Img).url()} alt="" />
              </div>
            </div>
            {res.sec2Grid4State && (
              <div className={styles.grid_4}>
                <div className={styles.grid_4_left}>
                  <div
                    className=""
                    style={{
                      backgroundImage: res.sec2gridoneimgstate
                        ? ""
                        : `url(${urlForImage(
                            res?.secGridThreeItem1Img
                          ).url()})`,
                    }}
                  >
                    <h2 style={{ color: res?.secGridThreeItem1TextColor }}>
                      {res?.secGridThreeItem1Text}
                    </h2>
                  </div>
                  <div
                    style={{ backgroundColor: res?.secGridThreeItem2Color }}
                    className={styles.div_2}
                  >
                    <p style={{ color: res?.secGridThreeItem2TextColor }}>
                      {res?.secGridThreeItem2Text}
                    </p>
                    <img
                      src={
                        res.sec2gridoneimgstate
                          ? ""
                          : urlForImage(res?.secGridThreeItem2Img).url()
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: res.sec2gridoneimgstate
                      ? ""
                      : `url(${urlForImage(res?.secGridThreeItem3Img).url()})`,
                  }}
                  className={styles.grid_4_right}
                >
                  <h2 style={{ color: res?.secGridThreeItem3TextColor }}>
                    {res?.secGridThreeItem3Text}
                  </h2>
                </div>
              </div>
            )}

            <div className={styles.grid_5}>
              <div
                style={{
                  backgroundImage: `url(${urlForImage(
                    res?.secGridFourItem1Img
                  ).url()})`,
                }}
                className={styles.grid_item_left}
              >
                <h2 style={{ color: res.secGridFourItem1TextColor }}>
                  {res.secGridFourItem1Text}
                </h2>
              </div>
              <div className={styles.grid_item_right}>
                <img src={urlForImage(res.secGridFourItem2Img).url()} alt="" />
              </div>
            </div>
            <div className={styles.grid_6}>
              <div
                style={{ backgroundColor: res.secGridFiveItem1Color }}
                className={styles.grid_6_item_left}
              >
                <p style={{ color: res.secGridFiveItem1Color }}>
                  {res.secGridFiveItemText1}
                </p>
                <h2 style={{ color: res.seGridFiveItem1Text2Color }}>
                  {res.seGridFiveItem1Text2}
                </h2>
                <img src={urlForImage(res.secGridFiveItem1Img).url()} alt="" />
              </div>
              <div
                style={{
                  backgroundImage: `url(${urlForImage(
                    res.secGridFiveItem2Img
                  ).url()})`,
                }}
                className={styles.grid_6_item_right}
              >
                <h2 style={{ color: res.secGridFiveItem2TextColor }}>
                  {res.secGridFiveItem2Text}
                </h2>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: res.sec2BackgroundColor }}
            className={styles.sec_3}
          >
            <div className={styles.sec_3_sub}>
              <div className={styles.top}>
                <h1 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                  {res.sec2GridMainTitle}
                </h1>
              </div>
              <div className={styles.bottom}>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec2GridItem1Title}
                  </h2>
                  <Link href={""}>{res.sec2GridItem1Text}</Link>
                  <img src={urlForImage(res.sec2GridItem1Image).url()} alt="" />
                </article>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec2GridItem2Title}
                  </h2>
                  <Link href={""}>{res.sec2GridItem2Text}</Link>
                  <img src={urlForImage(res.sec2GridItem2Image).url()} alt="" />
                </article>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec2GridItem3Title}
                  </h2>

                  <Link href={""}>{res.sec2GridItem3Text}</Link>

                  <img src={urlForImage(res.sec2GridItem3Image).url()} alt="" />
                </article>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: res.sec2BackgroundColor }}
            className={styles.sec_3}
          >
            <div className={styles.sec_3_sub}>
              <div className={styles.top}>
                <h1 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                  {res.sec3GridMainTitle}
                </h1>
              </div>
              <div className={styles.bottom}>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <img src={urlForImage(res.sec3GridItem1Icon).url()} alt="" />
                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec3GridItem1Title}
                  </h2>
                  <Link href={""}>{res.sec3GridItem1Text}</Link>
                  <img
                    src={urlForImage(res?.sec3GridItem1Image)?.url()}
                    alt=""
                  />
                </article>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <img src={urlForImage(res.sec3GridItem2Icon).url()} alt="" />

                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec3GridItem2Title}
                  </h2>
                  <Link href={""}>{res.sec3GridItem2Text}</Link>
                  <img
                    src={urlForImage(res?.sec3GridItem2Image).url()}
                    alt=""
                  />
                </article>
                <article
                  style={{ backgroundColor: res.eachGridItemColor }}
                  className={styles.bottom_item}
                >
                  <img src={urlForImage(res.sec3GridItem3Icon).url()} alt="" />

                  <h2 style={{ color: res.sec2sec3GridItem1TitleColor }}>
                    {res.sec3GridItem3Title}
                  </h2>

                  <p>{res.sec3GridItem3Text}</p>

                  <img src={urlForImage(res.sec3GridItem3Image).url()} alt="" />
                </article>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundColor: res.sec2BackgroundColor }}
            className={styles.sec_4}
          >
            <div className={styles.sec_4_sub}>
              <article className={styles.sub_wrp}>
                <div className={styles.top}>
                  <h1 style={{ color: res.eachSecTitleColor }}>
                    Which iPhone is right for you?
                  </h1>
                  <Link href={""}>Compare all iPhone Models</Link>
                </div>
                <div className={styles.bottom}>
                  <article className={styles.col_1}>
                    <div>
                      <img
                        src={urlForImage(res.sec4GridItem1Image).url()}
                        alt=""
                      />
                      <h2 style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem1Name}
                      </h2>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem1Text}
                      </p>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem1Price}
                      </p>
                      <Link className={styles.buy_link} href={""}>
                        Buy
                      </Link>
                      <Link className={styles.l_link} href={""}>
                        Learn more
                      </Link>
                    </div>
                    <div>
                      <img
                        src={urlForImage(res.sec4GridItem2Image).url()}
                        alt=""
                      />
                      <h2 style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem2Name}
                      </h2>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem2Text}
                      </p>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem2Price}
                      </p>
                      <Link className={styles.buy_link} href={""}>
                        Buy
                      </Link>
                      <Link className={styles.l_link} href={""}>
                        Learn more
                      </Link>
                    </div>
                    <div>
                      <img
                        src={urlForImage(res.sec4GridItem3Image).url()}
                        alt=""
                      />
                      <h2 style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem3Name}
                      </h2>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem3Text}
                      </p>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem3Price}
                      </p>
                      <Link className={styles.buy_link} href={""}>
                        Buy
                      </Link>
                      <Link className={styles.l_link} href={""}>
                        Learn more
                      </Link>
                    </div>
                    <div>
                      <img
                        src={urlForImage(res.sec4GridItem4Image).url()}
                        alt=""
                      />
                      <h2 style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem4Name}
                      </h2>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem4Text}
                      </p>
                      <p style={{ color: res.eachSecTitleColor }}>
                        {res.sec4GridItem4Price}
                      </p>
                      <Link className={styles.buy_link} href={""}>
                        Buy
                      </Link>
                      <Link className={styles.l_link} href={""}>
                        Learn more
                      </Link>
                    </div>
                  </article>
                </div>
              </article>
            </div>
          </div>
        </section>
        <Footer state={res.sec2BackgroundColor} />
      </>
    );
  }
  if (state === "appleCard") {
    return (
      <section>
        <Nav bgState={res?.navBg} colorState={res?.navColor} state={false} />
        <div
          style={{ backgroundColor: res.navColor }}
          className={styles2.header}
        >
          <div>
            <h2 style={{ color: res.navBg }}>{res?.heroName}</h2>
            <div>
              <p>Overview</p>
              <Link href="">Apply</Link>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: `url(${urlForImage(res.heroBg).url()})` }}
          className={styles2.hero_detail}
        >
          <div>
            <img src={urlForImage(res?.heroTitle).url()} alt="" />
            <Link href={""}>Apply now</Link>
          </div>
        </div>
        <article
          style={{ backgroundColor: res.secBg }}
          className={styles2.sec_1}
        >
          <p style={{ backgroundImage: res.secTitleColor }}>
            The simplicity of Apple. In a credit card.
          </p>
          <p>{res.secText}</p>
        </article>
        <article
          style={{ backgroundColor: res.div1Bg }}
          className={styles2.grid1}
        >
          <h2>{res.div1Text}</h2>
          <img src={urlForImage(res.div1Image).url()} alt="" />
        </article>
        <article className={styles2.grid_2}>
          <div
            style={{ backgroundImage: res.div2ItemBgColor }}
            className={styles2.left}
          >
            <h1 style={{ color: res.div2ItemTextColor }}>{res.div2ItemText}</h1>
          </div>
          <div className={styles2.right}>
            <img src={urlForImage(res.div2Item2Image).url()} alt="" />
            <h1 style={{ color: res.div2Item2TextColor }}>
              {res.div2Item2Text}
            </h1>
          </div>
        </article>
        <article
          style={{ backgroundColor: res.div3BgColor }}
          className={styles2.grid_3}
        >
          <img src={urlForImage(res.div3Image).url()} alt="" />
          <h1 style={{ color: res.div3TitleColor }}>{res.div3Title}</h1>
        </article>
        <article className={styles2.grid_4}>
          <div className={styles2.left}>
            <h1 style={{ backgroundImage: res.div4Item1TextColor }}>
              {res.div4Item1Text}
            </h1>
          </div>
          <div
            style={{ backgroundImage: res.div4Item2BgColor }}
            className={styles2.right}
          >
            <h1 style={{ color: res.div4Item2TextColor }}>
              {res.div4Item2Text}
            </h1>
            <img
              className={styles2.img}
              src={urlForImage(res.div4Item2Image[0]).url()}
              alt=""
            />
            <img
              className={styles2.img2}
              src={urlForImage(res.div4Item2Image[1]).url()}
              alt=""
            />
          </div>
        </article>
        <article
          style={{
            backgroundColor: res.div5BgColor,
          }}
          className={styles2.grid_5}
        >
          <img src={urlForImage(res.div5Image).url()} alt="" />
          <h1 style={{ color: res.div5Title }}>{res.div5Title}</h1>
        </article>
        <article
          style={{ backgroundImage: res.div6BgColor }}
          className={styles2.grid_6}
        >
          <p>{res.div6Text}</p>
          <h1>{res.div6Title}</h1>
        </article>
        <article
          style={{
            backgroundImage: `url(${urlForImage(res.sec2BgColor).url()})`,
          }}
          className={styles2.sec_2}
        >
          <img src={urlForImage(res.sec2Img).url()} alt="" />
          <h1>{res.sec2Title}</h1>
          <p>{res.sec2Text}</p>
          <Link href={""}>Apply now</Link>
        </article>
      </section>
    );
  }
  if (state === "appleTradeIn") {
    return <AppleTrade tab={tab} res={res} tab2={tab2} />;
  }
}
