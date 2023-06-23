import { Provider } from "react-redux";
import "./globals.css";
import { Poppins } from "next/font/google";
import { store } from "../redux/store";
import Provide from "@/redux/provider/Provide";
import Context from "@/context/Context";
import { Toaster } from "react-hot-toast";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Minimal Apple Clone -- Dawood",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provide>{children}</Provide>
        <Toaster />
      </body>
    </html>
  );
}
