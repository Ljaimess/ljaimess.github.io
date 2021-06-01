import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
// import Projects from "./Components/pages/projects"
// import About from "./Components/pages/about"
// import Footer from "./Components/Footer/footer"
// import Contact from "./Components/pages/contact"



function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exat path="/link" component={Links} />
          <Route component={NoMatch} /> */}
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;