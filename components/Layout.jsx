import Navbar from "./shared/Navbar";
const Layout = ({ children }) => (
  <div>
    <Navbar />
    <canvas id="bouncyBall"></canvas>
    <div className="main-container container">{children}</div>
  </div>
);
export default Layout;
