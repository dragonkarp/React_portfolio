import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TopNavbar from './components/TopNavbar';
import Homepage from "./pages/Homepage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <TopNavbar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Homepage />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
