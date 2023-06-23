import Nav from "@/app/components/nav/Nav";
import styles from "./bag.module.scss";
const page = () => {
  return (
    <div>
      <Nav bgState={"white"} colorState={"black"} state={false} />
      <section className={styles.section}>
        <div className={styles.top}>
          <h1>Review your bag.</h1>
          <p>Free delivery and free returns.</p>
        </div>

        <div className={styles.bottom}></div>
      </section>
    </div>
  );
};

export default page;
