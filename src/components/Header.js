import React, { useState } from "react"
import { Link, animateScroll as scroll } from "react-scroll";

import {ReactComponent as ReactCircle} from '../assets/images/circle.svg';

const Header = () => {
  const [toggleClass, setToggleClass] = useState(false)

  function handleClick() {
    setToggleClass(!toggleClass);
  }

  return (
    <header className="l-header">
      <div className="header-hamburger" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`header-menu ${toggleClass ? 'is-open' : '' }`}>
        <div className="header-accent">  <ReactCircle/></div>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={120}
                >
                  <span>Home</span>
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={120}
                >
                  <span>Skills</span>
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                  activeClass="active"
                  to="experiment"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={120}
                >
                  <span>Experiments</span>
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={120}
                >
                  <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header
