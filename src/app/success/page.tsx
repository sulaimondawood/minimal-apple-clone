import React from "react";
import classes from "./success.module.scss";
import Link from "next/link";

import { BsFillBagCheckFill } from "react-icons/bs";

const Success = () => {
  return (
    <div className={classes.div}>
      <span>
        <BsFillBagCheckFill color="green" className={classes.bag} />
      </span>
      <h2>Thank you for your order</h2>
      <p>Check your email inbox for the receipt</p>

      <div>
        <p>
          Any questions? please reach us via{" "}
          <span>
            <a href="mailto:sulaimondawod@gmail.com">sulaimondawod@gmail.com</a>
          </span>
        </p>
      </div>

      <Link href={"/"}>Back to Homepage</Link>
    </div>
  );
};

export default Success;
