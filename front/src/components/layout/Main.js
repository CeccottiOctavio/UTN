import imagen1 from "./imagen1.png";
import Styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <main>
      <div className={Styles.main}>
        <div className={Styles.center}>
          <h2>Diseño Gráfico</h2>
          <h3>Ilustro y diseño para que tu marca sea distintiva</h3>
          <h3>¿Queres trabajar <br /> conmigo? <br /></h3>
          <div className={Styles.list}>
            <ul>
              <li><Link to="/Contacto">Contactame</Link></li>
            </ul>
          </div>
        </div>    
        <img src={imagen1} alt="Ilustracion" className={Styles.img1} />
      </div>
    </main>
  );
};

export default Main;


