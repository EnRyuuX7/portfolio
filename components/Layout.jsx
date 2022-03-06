import Navbar from "./shared/Navbar";
import Script from "next/script";

const Layout = ({ children }) => (
  <div>
    <Script src="/scripts/main.js"></Script>
    <Navbar />
    <canvas id="bouncyBall"></canvas>
    <div className="main-container container">{children}</div>
  </div>
);
export default Layout;