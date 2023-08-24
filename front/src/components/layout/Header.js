import React from "react";
import { Link, } from "react-router-dom";
import { Helmet } from "react-helmet";
import Styles from "./Home.module.css";
import logo from "./logo.png";

const Header = (props) => {

  return (
    <header className={Styles.header} >
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@100&family=Old+Standard+TT&family=Open+Sans:wght@300;400;700&display=swap"rel="stylesheet" />
        <link rel="stylesheet"href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      
      <img className={Styles.img} src={logo} alt="Logo de la empresa" />
      <h1>
        Soledad<span className={Styles.design}>design</span>
      </h1>
      <ul className={Styles.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Sobremi">Sobre mi</Link>
        </li>
        <li>
          <Link to="/Servicios">Servicios</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        <li>
          <Link to='/Clientes'>Clientes</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;


