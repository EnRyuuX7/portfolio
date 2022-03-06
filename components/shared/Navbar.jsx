import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setMenu] = useState(false);

  return (
    <nav className="navigation">
      <div className={`menu btn2 ${toggleMenu && 'open'}`} onClick={() => {
        setMenu(prev => !prev)
      }}>
        <div className="icon"></div>
      </div>
      <div className={`wrapper ${toggleMenu && 'show'}`}>
        <ul className={`nav-items ${toggleMenu && 'show'}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
