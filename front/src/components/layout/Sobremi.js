import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Styles from './Sobremi.module.css';
import { Helmet } from "react-helmet";


const Sobremi = () => {
  return (
    <div>
        <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@100&family=Old+Standard+TT&family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main className={Styles.container}>
        <div className={Styles.container1}>
          <h2>Como mujer apasionada por el deseño gráfico, me destaco como una profesional creativa y autodidacta en constante evolución. Mi carrera como diseñadora gráfica freelance me ha permitido explorar diversas facetas del arte visual, combinando la estética con la funcionalidad para crear piezas únicas y cautivadoras.</h2>
          <h2>He trabajado con clientes de distintos sectores, comprendiendo la importancia de escuchar sus necesidades y deseos para plasmar sus ideas en soluciones visuales impactantes. Mi enfoque en la comunicación efectiva y el diseño centrado en el usuario garantiza que cada proyecto que abordo sea una experiencia significativa y atractiva para el público objetivo.</h2>
        </div>
      </main>
      <Footer />
    </div>

  )
}

export default Sobremi;