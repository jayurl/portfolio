import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Class from "./components/Class";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Class />
      <Contact />
    </div>
  );
}

export default App;
