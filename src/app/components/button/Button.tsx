"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./button.module.scss";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/basketSlice";
import { useAppDispatch } from "@/redux/hooks/hook";
import { urlForImage } from "../../../../sanity/lib/image";

function Button({ items, addBasket }: { items: any; addBasket: any }) {
  // const btn = useState()
  const dispatch = useAppDispatch();

  return (
    <div className={styles.btn_wrap}>
      <Link href={`/${items.slug.current}`}> {items.learnmore} </Link>
      <Link onClick={addBasket(items)} href={`/shop/${items.slug.current}`}>
        {items.buy}
      </Link>
    </div>
  );
}

export default Button;
