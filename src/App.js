import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Inicio from "./components/inicio/inicio";
import Perfil from "./components/perfil/perfil";
import Contacto from "../src/components/contacto/contacto";


function App() {

  return (

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contacto" element={<Contacto />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

};

export default App;
