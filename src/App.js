import React, { Component } from "react";
import "./App.css";
import BioData from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BioData />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
