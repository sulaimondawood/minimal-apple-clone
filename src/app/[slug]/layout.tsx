import { useState } from "react";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Nav state={false} /> */}
      {children}
      {/* <Footer state={false} /> */}
    </>
  );
}
