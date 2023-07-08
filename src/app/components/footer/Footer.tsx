import styles from "./footer.module.scss";
const Footer = ({ state }: { state: string }) => {
  return (
    <div style={{ backgroundColor: state }} className={styles.footer_wrapper}>
      <div className={styles.footer_wrapper_sub_wrapper}>
        <p>
          {" "}
          To access and use all the features of Apple Card, you must add Apple
          Card to your Wallet on iPhonne or iPad with the latest version of IOS
          or iPadOS. Update to the latest version by going to the Settings :
          General : Software Update. Tap Download and Install. Avaialble for
          qualifying applicants in the United States. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Necessitatibus cum adipisci ipsa
          eligendi alias voluptates eaque ea vel explicabo inventore, sint,
          dolorum, harum sapiente? Adipisci natus placeat optio cupiditate
          exercitationem!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          exercitationem iste harum quibusdam nemo repellat non aspernatur,
          impedit sint tenetur, repudiandae cum at adipisci culpa vitae vel rem
          expedita minima fugiat quidem sed. Sunt a, reprehenderit nesciunt nam
          temporibus quaerat fugiat, beatae cum vel alias modi sint sed, ut
          recusandae.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
          exercitationem iste harum quibusdam nemo repellat non aspernatur,
          impedit sint tenetur, repudiandae cum at adipisci culpa vitae vel rem
          expedita minima fugiat quidem sed. Sunt a, reprehenderit nesciunt nam
          temporibus quaerat fugiat, beatae cum vel alias modi sint sed, ut
          recusandae.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum
          eligendi sapiente veritatis, cumque minima iusto soluta reiciendis
          nesciunt delectus, molestiae necessitatibus, perspiciatis placeat
          assumenda totam suscipit nostrum voluptate possimus sequi quod quo est
          omnis id! Omnis totam molestiae in id, eligendi itaque doloremque
          tenetur consequatur? Molestiae nesciunt consequatur facilis fugiat
          impedit aperiam odit laborum tempore, maiores fuga fugit dolorum nobis
          in iure sequi, quaerat ratione, aliquam maxime vero laudantium
          voluptate quidem. Quidem fuga officia porro sint deleniti incidunt
          tempore! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatum, exercitationem iste harum quibusdam nemo repellat non
          aspernatur, impedit sint tenetur, repudiandae cum at adipisci culpa
          vitae vel rem expedita minima fugiat quidem sed. Sunt a, reprehenderit
          nesciunt nam temporibus quaerat fugiat, beatae cum vel alias modi sint
          sed, ut recusandae.
        </p>

        <br />

        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to your Wallet on iPhonne or iPad with the latest version of IOS
          or iPadOS. Update to the latest version by going to the Settings :
          General : Software Update. Tap Download and Install. Avaialble for
          qualifying applicants in the United States. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Necessitatibus cum adipisci ipsa
          eligendi alias voluptates eaque ea vel explicabo inventore, sint,
          dolorum, harum sapiente? Adipisci natus placeat optio cupiditate
          exercitationem!
        </p>
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
      </div>
    </div>
  );
};

export default Footer;
