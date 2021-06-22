import React from "react";
import "./style-actors.scss";

import { actors } from "../mock-data/actors";

class Actors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actors,
    };
  }

  render() {
    return (
      <div className="actors-background">
        {this.state.actors.map((actor, index) => {
          return (
            <div className={"actor-frame actor-animate-" + index} key={index}>
              <img
                src={actor.src}
                alt={actor.name}
                className={"actor-img-" + index}
              />
              <p>{actor.name}</p>
              <div class="bg-triangle--before"></div>
              <div class="bg-triangle--after"></div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Actors;
