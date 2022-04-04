import Navbar from "./shared/Navbar";
import Script from "next/script";

const Layout = ({ children }) => (
  <div>
    <Script src="/scripts/main.js"></Script>
    <Navbar />
    <canvas id="bouncyBall"></canvas>
    {/* <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div> */}
    <div className="main-container container">{children}</div>
  </div>
);
export default Layout;