import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Style from "./clientes.module.css"

const ClientesPage = () => {
    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const cargarClientes = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/Clientes');
            setClientes(response.data);
            setLoading(false);
        };
        cargarClientes();
    }, []);

    return (
        <section>
            <Header/>
            <div className={Style.container1}>
            {loading ? (
                <p>Cargando...</p>
            ) : (
            
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Finalizado</th>
                            <th>Importe</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.clientes}</td>
                                <td>{cliente.finalizado}</td>
                                <td>{cliente.importe}</td>
                                <td>{cliente.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            </div>
            <Footer/>
        </section>
    );
};

export default ClientesPage;

