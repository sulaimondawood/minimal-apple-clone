import React from "react";

function Shop({ data }: { data: any }) {
  return (
    <div>
      <h1>Buy {data.name}</h1>
      <p>{data.sec2pricerange}</p>
    </div>
  );
}

export default Shop;
