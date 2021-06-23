import React from "react";
import "./style-actors.scss";

import { actors } from "../mock-data/actors";
import Actor from "./actor";

class Actors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actors,
    };
  }

  componentDidMounted() {}

  render() {
    return (
      <div className="actors-background">
        {this.state.actors.map((actor, index) => (
          <Actor actor={actor} index={index} key={index} />
        ))}
      </div>
    );
  }
}

export default Actors;
