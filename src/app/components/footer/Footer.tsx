import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_wrapper_sub_wrapper}>
        To access and use all the features of Apple Card, you must add Apple
        Card to your Wallet on iPhonne or iPad with the latest version of IOS or
        iPadOS. Update to the latest version by going to the Settings : General
        : Software Update. Tap Download and Install. Avaialble for qualifying
        applicants in the United States.
      </div>

      <hr />
      <div className={styles.footer_footer}>
        <div className={styles.footer_footer_sub}>
          <h1 className={styles.title}>Shop and Learn</h1>
          <p className="">Store</p>
          <p className="">Mac</p>
          <p className="">iPad</p>
          <p className="">iPhone</p>
          <p className="">Watch</p>
          <p className="">AirPods</p>
          <p className="">TV & Home</p>
          <p className="">AirTag Accessories </p>
          <p className=""> Gift Cards</p>
        </div>
        <div className={styles.footer_footer_sub}>
          <h1 className={styles.title}>Services</h1>
          <p className="">Apple Music</p>
          <p className="">Apple TV++</p>
          <p className="">Apple Fitness</p>
          <p className="">Apple News</p>
          <p className="">Apple Arcarde</p>
          <p className="">iCloud</p>
          <p className="">Apple one</p>
          <p className="">Apple Card</p>
          <p className="">Apple Books </p>
          <p className=""> Apple Store </p>
          <p className=""> Apple Podcasts</p>
        </div>
        <div className={styles.footer_footer_sub}>
          <h1 className={styles.title}>Apple Store</h1>
          <p className="">Find a Store</p>
          <p className="">Genius Bar</p>
          <p className="">Today at Apple </p>
          <p className="">Apple Camp</p>
          <p className="">Apple Store App</p>
          <p className="">Financing</p>
          <p className="">Apple Trade in</p>
          <p className="">Order Status</p>
          <p className="">Shopping Help </p>
        </div>
        {/* <div className="flex flex-row flex-wrap lg:flex-col gap-3"> */}
        {/* <div className={styles.sub_div}>
          <div className={styles.sub_sub_div}>
            <h1 className={styles.title_2}>For Business</h1>
            <p>Apple and Business</p>
            <p>Shop Business</p>
          </div>

          <div className={styles.sub_sub_div}>
            <h1 className={styles.title_2}>For Education</h1>
            <p> Apple and Education </p>
            <p>Shop for K-12</p>
            <p>Shop for College</p>
          </div>

          <div className={styles.sub_sub_div}>
            <h1 className={styles.title_2}>For Healthcare</h1>
            <p> Apple in Healthcare </p>
            <p>Health on Apple Watch</p>
            <p>Health Records on iPhone</p>
          </div>

          <div className={styles.sub_sub_div}>
            <h1 className={styles.title_2}>For Government</h1>
            <p> Shop for Government </p>
            <p>Shop for Veterans and Military</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
