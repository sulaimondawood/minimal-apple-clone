import Link from "next/link";
import styles from "./nav.module.scss";
const Nav = ({
  state,
  bgState,
  colorState,
}: {
  state: boolean;
  bgState: string;
  colorState: string;
}) => {
  return (
    <div className="">
      <div
        style={{
          // backgroundColor: state === true ? "rgba(22, 22, 23, 0.8)" : "white",
          backgroundColor: bgState,
          position: state ? "fixed" : "static",
        }}
        className={styles.header_wrapper}
      >
        <Link href="/">
          <span>
            <svg
              className={styles.apple_logo}
              viewBox="0 0 17 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: colorState }}
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              ></path>
            </svg>
          </span>
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/store">
          Store
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/mac">
          Mac
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/ipad">
          ipad
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/store">
          iPhone
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/store">
          Watch
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/store">
          Airpods
        </Link>

        <Link style={{ color: colorState }} className="nav-link" href="/store">
          Accesories
        </Link>
        <Link style={{ color: colorState }} className="nav-link" href="/store">
          Support
        </Link>
        <button className="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 44">
            <path
              style={{ fill: colorState }}
              d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"
            ></path>
          </svg>
        </button>
        <button>
          <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
            <path
              style={{ fill: colorState }}
              d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile? */}
      <div
        style={{
          // backgroundColor: state === true ? "rgba(22, 22, 23, 0.8)" : "white",
          backgroundColor: bgState,
          position: state ? "fixed" : "static",
        }}
        className={styles.header_wrapper_2}
      >
        <Link href="/">
          <span>
            <svg
              className={styles.apple_logo}
              viewBox="0 0 17 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: colorState }}
                d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z"
              ></path>
            </svg>
          </span>
        </Link>

        <div className={styles.btn_wrp}>
          <button>
            <svg viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
              <path
                style={{ fill: colorState }}
                d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z"
              ></path>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <polyline
                id="globalnav-menutrigger-bread-bottom"
                fill={colorState}
                stroke={colorState}
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="2 12, 16 12"
                // class="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                className={styles.burger}
              >
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-open"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill={colorState}
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                ></animate>
                <animate
                  id="globalnav-anim-menutrigger-bread-bottom-close"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill={colorState}
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                ></animate>
              </polyline>
              <polyline
                style={{ fill: colorState }}
                id="globalnav-menutrigger-bread-top"
                // fill="currentColor"
                fill={colorState}
                stroke={colorState}
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="2 5, 16 5"
                // class="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
              >
                <animate
                  style={{ fill: colorState }}
                  id="globalnav-anim-menutrigger-bread-top-open"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill={colorState}
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                ></animate>
                <animate
                  style={{ fill: colorState }}
                  id="globalnav-anim-menutrigger-bread-top-close"
                  attributeName="points"
                  keyTimes="0;0.5;1"
                  dur="0.24s"
                  begin="indefinite"
                  fill={colorState}
                  calcMode="spline"
                  keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                  values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                ></animate>
              </polyline>
            </svg>
          </button>
        </div>

        <div className={styles.links_wrp}>
          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            Store
          </Link>
          <Link style={{ color: colorState }} className="nav-link" href="/mac">
            Mac
          </Link>
          <Link style={{ color: colorState }} className="nav-link" href="/ipad">
            ipad
          </Link>
          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            iPhone
          </Link>
          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            Watch
          </Link>
          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            Airpods
          </Link>

          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            Accesories
          </Link>
          <Link
            style={{ color: colorState }}
            className="nav-link"
            href="/store"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
