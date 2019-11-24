import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//page imports
import Welcome from "./components/Welcome";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Hire from "./components/Hire";
import Work from "./components/Work";
import About from "./components/About";

//global styles set by React
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hire" component={Hire} />
          <Route exact path="/work" component={Work} />
          <Route path="/about/" component={About} />
        </Router>
        <Footer />
    </div>
  );
}

export default App;
