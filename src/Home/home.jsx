import React from "react";
import "./style-home.scss";

import WinnerCard from "../WinnerCard/winnercard";

class Home extends React.Component {
  render() {
    return (
      <main>
        <div class="title">
          <h1 class="title-text">Weekly Winner</h1>
        </div>
        <div class="sub-title">
          <p class="sub-title-text">어둠의 별장</p>
        </div>
        <WinnerCard></WinnerCard>
      </main>
    );
  }
}

export default Home;
