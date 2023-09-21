import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";
const Header = () => {
  const handleContactClick = (event) => {
    event.preventDefault();
    const footer = document.querySelector(".santehnik");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClic = (event) => {
    event.preventDefault();
    const footer = document.querySelector(".electrick");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const navRef = useRef();
  const showBurger = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img width={230} src={logo} alt="" />
          </div>
          <nav ref={navRef} className="header__nav">
            <NavLink
              onClick={(event) => {
                showBurger();
                handleContactClic(event);
              }}
            >
              Электрик
            </NavLink>
            <NavLink
              onClick={(event) => {
                showBurger();
                handleContactClick(event);
              }}
            >
              Сантехник
            </NavLink>

            <NavLink onClick={showBurger}>Контакты</NavLink>
            <ul className="nav-btn nav-close-btn" onClick={showBurger}></ul>
          </nav>
          <div className="header__tel">
            <a href="tel:+996501597022">+996501597022</a>
          </div>
          <ul onClick={showBurger} className="nav-btn">
            <li></li>
            <li className="li"></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
