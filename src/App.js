// calling in all the import im using including the components and pages 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects"
import About from "./pages/about"
import Footer from "./components/footer";
import Contact from "./pages/contact"

//everything is being routed into this function with the switch
function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/links" component={Contact} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  )
}

export default App;
