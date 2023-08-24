import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import emailjs from '@emailjs/browser';

import Styles from './Contacto.module.css';
import { Helmet } from "react-helmet";

const Contacto = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = 'service_ul1wt4w';
    const templateId = 'template_iki8nuq';
    const userId = 'PVpxUthCweOnciMBn';

    emailjs.sendForm(serviceId, templateId, refForm.current, userId)
      .then((result) => {
        console.log(result.text);
        refForm.current.reset(); 
      })
      .catch((error) => console.error(error));
  };

  return (
    
    <div>
         <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora&family=Montserrat:wght@100&family=Old+Standard+TT&family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <form ref={refForm} onSubmit={handleSubmit}>
        <div className={Styles.container}>
          <h2>Contacto Rápido</h2>
          <div className={Styles.container1}>
            <div className={Styles.name}>
              <input name='user_name' type='text' placeholder='Nombre' required />
            </div>
            <div className={Styles.email}>
              <input name='user_email' type='email' placeholder='Email' required />
            </div>
            <div className={Styles.textarea}>
              <textarea maxLength="500" placeholder='Mensaje...' name='message' required />
            </div>
            <div className={Styles.boton}>
              <button type="submit" value="Send">Enviar</button>
            </div>
          </div>
        </div>
        <div className={Styles.container2}>
          <h2>Otras formas de contactarme.</h2>
          <ul>
            <li>WhatsApp: +54 113190-8605</li>
            <li>Instagram: <a href="https://www.instagram.com/soledad.design/" target="_blank" rel="noopener noreferrer"> soledad.design </a></li>
          </ul>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contacto;


