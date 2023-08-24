import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sobremi from "./components/layout/Sobremi";
import Servicios from "./components/layout/Servicios";
import Contacto from "./components/layout/Contacto";
import ClientesPage from "./components/layout/ClientesPage";

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Sobremi" element={<Sobremi />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Clientes" element={<ClientesPage/>}/>
        </Routes>
        
        
      </Router>
    </div>
  );
}

export default App;



