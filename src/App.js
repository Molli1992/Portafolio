import React from "react";
import "./App.css"
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Services from "./components/services/services";


function App() {

  return (

    <div className="app">

      <Header />
      <Intro />
      <Services />

    </div>

  );

};

export default App;
