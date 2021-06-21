import { lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar/navbar";

const Home = lazy(() => import("./Home/home"));
const Actors = lazy(() => import("./Actors/actors"));

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/actors" component={Actors} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
