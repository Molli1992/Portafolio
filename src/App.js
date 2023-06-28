import React from "react";
import "./App.css"
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";
import Experiences from "./components/experiencies/experiences";
import Works from "./components/works/works";
import Portafolio from "./components/portafolio/portafolio";


function App() {

  return (

    <div className="app">

      <Header />
      <Intro />
      <Services />
      <Experiences />
      <Works />
      <Portafolio />

    </div>

  );

};

export default App;
