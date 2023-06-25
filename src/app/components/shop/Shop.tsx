import React from "react";
import styles from "./shop.module.scss";
function Shop({ data }: { data: any }) {
  return (
    <div>
      <h1>Buy {data.name}</h1>
      <p>{data.sec2pricerange}</p>

      <div className={styles.btm}>
        <h1></h1>
        <div></div>
      </div>
    </div>
  );
}

export default Shop;
