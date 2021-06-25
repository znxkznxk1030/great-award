import React from "react";
import "./style-winner.scss";

import WinnerCard from "../WinnerCard/winnercard";

class Winner extends React.Component {
  render() {
    return (
      <main>
        <div className="title">
          <h1 className="title-text">Weekly Winner</h1>
        </div>
        <div className="sub-title">
          <p className="sub-title-text">어둠의 별장</p>
        </div>
        <WinnerCard></WinnerCard>
      </main>
    );
  }
}

export default Winner;
