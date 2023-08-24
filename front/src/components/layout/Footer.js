import React from "react";
import Styles from "./Home.module.css";
import { BsEnvelope } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div>
        <a href="https://www.instagram.com/soledad.design/" target="_blank" rel="noopener noreferrer">
          <FiInstagram /> <span className={Styles.negrita}>soledad.design</span>
        </a>
        <h4>
          <BsEnvelope /> soledad.desing@gmail.com
        </h4>
      </div>
      <div className={Styles.separador}></div>
      <div>
        <h5>
          Los derechos de autor quedan reservados por Soledad.design - © 2023
        </h5>
      </div>
    </footer>
  );
};

export default Footer;










