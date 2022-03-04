import Navbar from "./shared/Navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  <div>
    <Head>
      <script type="text/javascript" src="/scripts/main.js"></script>
    </Head>
    <Navbar />
    <canvas id="bouncyBall"></canvas>
    <div className="main-container container">{children}</div>
  </div>
);
export default Layout;
