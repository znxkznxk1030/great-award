import { lazy, useRef } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Navbar from "./Navbar/navbar";

const Home = lazy(() => import("./Home/home"));
const Actors = lazy(() => import("./Actors/actors"));
const Winner = lazy(() => import("./WeeklyWinner/winner"));
const Vote = lazy(() => import("./Vote/vote"));
const Chat = lazy(() => import("./Chat/chat"));

const App = () => {

  const navbarRef = useRef();
  
  return (
    <div className="app">
      <Router>
        <Navbar ref={navbarRef}></Navbar>
        <Switch>
          <Route exact path="/weekly-winner" component={Winner} />
          <Route exact path="/actors" component={Actors} />
          <Route exact path="/vote" component={Vote} />
          <Route exact path="/chat" component={Chat} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
