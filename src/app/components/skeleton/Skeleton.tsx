import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./skeleton.module.scss";

export default function Loader() {
  return (
    <>
      <Skeleton height={"50px"} />
      <Skeleton height={"400px"} />
      <div className={styles.layout}>
        <Skeleton height={300} />
        <Skeleton height={300} />
      </div>
    </>
  );
}
