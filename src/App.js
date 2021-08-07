import React from "react";
// Global Styles
import GlobalStyle from "./golbalStyles";
//Navbar
import Navbar from "./components/Navbar";
//Pages
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
// React Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
