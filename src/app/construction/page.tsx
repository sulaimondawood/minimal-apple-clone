import Image from "../../../src/app/utils/images/image.jpg";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import classes from "./construction.module.scss";

export default function Construction() {
  return (
    <>
      <Nav bgState={"white"} colorState={"black"} state={true} />

      <div className={classes.div}>
        <img src={Image.src} alt="" />
        <h1> Under Construction!😋😎</h1>
      </div>
      <Footer state="#f5f5f5" />
    </>
  );
}
