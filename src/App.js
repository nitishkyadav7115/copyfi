import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatcopyfi,
  Header,
} from "./containers";
import { Cta } from "./components";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Whatcopyfi />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
