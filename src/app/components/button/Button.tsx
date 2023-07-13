"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./button.module.scss";
import { useAppDispatch } from "@/redux/hooks/hook";

function Button({ items }: { items: any }) {
  return (
    <div className={styles.btn_wrap}>
      <Link href={`/${items.slug.current}`}> {items.learnmore} </Link>
      <Link
      
        href={`/shop/${items.slug.current}`}
      >
        {items.buy}
      </Link>
    </div>
  );
}

export default Button;
