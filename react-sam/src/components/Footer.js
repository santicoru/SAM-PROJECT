import React from "react";
import { Link } from "react-router-dom";

import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import logo from "../assets/images/logo-a.png";

export function Footer() {
  return (
    <footer className="foot">
      <section className="social">
        <ul>
          <a href="samFacebook">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="samInstagram">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="samLinkedin">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="sanTwitter">
            <img src={twitter} alt="twitter" />
          </a>
        </ul>
      </section>
      <section className="logo">
        <img src={logo} alt="logo" />
      </section>
      <section className="elements">
        <ul>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="">Contacto</Link>
          </li>
          <li>
            <Link to="/legal">Privacidad</Link>
          </li>
          <li>
            <Link to="/fqa">FAQs</Link>
          </li>
        </ul>
      </section>
      <section className="copyright">
        Developed by: Santi, Andy y Martín. Copyright SAM (c).
      </section>
    </footer>
  );
}
