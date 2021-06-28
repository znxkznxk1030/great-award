import React from "react";
import "./style-vote.scss";

import { actors } from "../mock-data/actors";

class Vote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actors,
      selectedActorId: -1,
    };
  }

  onChangeValue(e) {
    console.log(e.target.value);
    this.setState({ selectedActorId: e.target.value });
  }

  render() {
    return (
      <div className="vote-background">
        <div className="vote-question">
          <p className="vote-title"> 7 / 11 ??? </p>
          <p> 이번주 가장 많이 활약한 멤버는 누구인가요? </p>
        </div>
        <div className="container">
          <form>
            {this.state.actors.map((actor) => {
              const selectedActorId = this.state.selectedActorId;
              return (
                <div className="vote-item" key={actor.id}>
                  <input
                    type="radio"
                    id={actor.id}
                    name={actor.name}
                    value={actor.id}
                    key={actor.id}
                    onChange={this.onChangeValue.bind(this)}
                    checked={selectedActorId === actor.id}
                  ></input>
                  <label htmlFor={actor.id}>{actor.name}</label>
                  <br></br>
                </div>
              );
            })}

            <button className="vote-btn--submit" type="submit">
              제 출
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Vote;
