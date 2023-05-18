import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className="max-w-4xl  mx-auto  text-left text-[13px] leading-loose text-ml2-gray">
        To access and use all the features of Apple Card, you must add Apple
        Card to your Wallet on iPhonne or iPad with the latest version of IOS or
        iPadOS. Update to the latest version by going to the Settings : General
        : Software Update. Tap Download and Install. Avaialble for qualifying
        applicants in the United States.
      </div>

      <hr className="max-w-4xl  mx-auto m-4" />
      <div className="grid max-w-4xl  mx-auto grid-cols-3 lg:grid-cols-4 justify-center ">
        <div className="flex flex-col gap-3">
          <h1 className=" text-gray-600 text-sm font-semibold">
            Shop and Learn
          </h1>
          <p className="text-ml2-gray text-xs">Store</p>
          <p className="text-ml2-gray text-xs">Mac</p>
          <p className="text-ml2-gray text-xs">iPad</p>
          <p className="text-ml2-gray text-xs">iPhone</p>
          <p className="text-ml2-gray text-xs">Watch</p>
          <p className="text-ml2-gray text-xs">AirPods</p>
          <p className="text-ml2-gray text-xs">TV & Home</p>
          <p className="text-ml2-gray text-xs">AirTag Accessories </p>
          <p className="text-ml2-gray text-xs"> Gift Cards</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" text-gray-600 text-sm font-semibold">Services</h1>
          <p className="text-ml2-gray text-xs">Apple Music</p>
          <p className="text-ml2-gray text-xs">Apple TV++</p>
          <p className="text-ml2-gray text-xs">Apple Fitness</p>
          <p className="text-ml2-gray text-xs">Apple News</p>
          <p className="text-ml2-gray text-xs">Apple Arcarde</p>
          <p className="text-ml2-gray text-xs">iCloud</p>
          <p className="text-ml2-gray text-xs">Apple one</p>
          <p className="text-ml2-gray text-xs">Apple Card</p>
          <p className="text-ml2-gray text-xs">Apple Books </p>
          <p className="text-ml2-gray text-xs"> Apple Store </p>
          <p className="text-ml2-gray text-xs"> Apple Podcasts</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className=" text-gray-600 text-sm font-semibold">Apple Store</h1>
          <p className="text-ml2-gray text-xs">Find a Store</p>
          <p className="text-ml2-gray text-xs">Genius Bar</p>
          <p className="text-ml2-gray text-xs">Today at Apple </p>
          <p className="text-ml2-gray text-xs">Apple Camp</p>
          <p className="text-ml2-gray text-xs">Apple Store App</p>
          <p className="text-ml2-gray text-xs">Financing</p>
          <p className="text-ml2-gray text-xs">Apple Trade in</p>
          <p className="text-ml2-gray text-xs">Order Status</p>
          <p className="text-ml2-gray text-xs">Shopping Help </p>
        </div>
        {/* <div className="flex flex-row flex-wrap lg:flex-col gap-3"> */}
        <div className="lg:grid w-screen lg:w-auto grid-cols-3 hidden  lg:grid-cols-1 gap-3">
          <div className="flex gap-3 flex-col">
            <h1 className=" text-gray-600 text-sm font-semibold">
              For Business
            </h1>
            <p className="text-ml2-gray text-xs">Apple and Business</p>
            <p className="text-ml2-gray text-xs">Shop Business</p>
          </div>
          {/* //ttjghjthjthg */}

          <div className="flex gap-3 flex-col">
            <h1 className="pt-4 text-gray-600 text-sm font-semibold">
              For Education
            </h1>
            <p className="text-ml2-gray text-xs"> Apple and Education </p>
            <p className="text-ml2-gray text-xs">Shop for K-12</p>
            <p className="text-ml2-gray text-xs">Shop for College</p>
          </div>
          {/* //ttjghjthjthg */}

          <div className="flex gap-3 flex-col">
            <h1 className="pt-4 text-gray-600 text-sm font-semibold">
              For Healthcare
            </h1>
            <p className="text-ml2-gray text-xs"> Apple in Healthcare </p>
            <p className="text-ml2-gray text-xs">Health on Apple Watch</p>
            <p className="text-ml2-gray text-xs">Health Records on iPhone</p>
          </div>
          {/* //ttjghjthjthg */}

          <div className="flex gap-3 flex-col">
            <h1 className="pt-4 text-gray-600 text-sm font-semibold">
              For Government
            </h1>
            <p className="text-ml2-gray text-xs"> Shop for Government </p>
            <p className="text-ml2-gray text-xs">
              Shop for Veterans and Military
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
