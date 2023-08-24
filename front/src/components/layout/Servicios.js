import React from 'react';
import Header from './Header';
import Footer from './Footer';
import pack1 from './pack1.jpeg';
import pack2 from './pack2.jpeg';
import pack3 from './pack3.jpeg';
import pack4 from './pack4.jpeg';
import pack5 from './pack5.jpeg';
import Insta from './insta.png';
import Styles from './Servicios.module.css';

const Servicios = () => {
  return (
    <div>
      <Header />
      <main className={Styles.container}>
        <div className={Styles.container1}>
          <div className={Styles.separar}>
            <img src={pack1} alt='pack1' />
            <div className={Styles.capa}>
              <a href='https://www.instagram.com/p/CmbzQXfrzay/' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className={Styles.separar1}>
            <img src={pack2} alt='pack2' />
            <div className={Styles.capa}>
              <a href='https://www.instagram.com/p/CpDO_9ArEYA/' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.container2}>
          <div className={Styles.separar2}>
            <img className={Styles.rounded1} src={pack3} alt='pack3' />
            <div className={Styles.capa2}>
              <a href='https://www.instagram.com/p/CsKDc8IvtOW/' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className={Styles.separar2}>
            <img className={Styles.rounded2} src={pack4} alt='pack3' />
            <div className={Styles.capa2}>
              <a href='https://www.instagram.com/p/CsKDIyQv99w/' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className={Styles.separar2}>
            <img className={Styles.rounded3} src={pack5} alt='pack3' />
              <div className={Styles.capa2}>
              <a href='https://www.instagram.com/p/CmMaLG2rH5W/?img_index=1' target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
