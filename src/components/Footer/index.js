import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import logo from "../../img/logo.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
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
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer__logo">
            <img width={230} src={logo} alt="" />
          </div>
          <nav ref={navRef} className="footer__nav">
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
          </nav>
          <div className="footer__contact-info">
            <p>Наш адрес: Улица, Дом, Город</p>
            <p>Телефон: +7 (123) 456-7890</p>
            <p>Email: example@example.com</p>
          </div>
          {/* <div className="footer__social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
