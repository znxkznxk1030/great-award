import React from "react";
import "./style-winnercard.scss";

class WinnerCard extends React.Component {
  render() {
    return (
      <div class="ent-card">
        <div class="info-top">
          <div class="profile-left">
            <div class="total-score">
              <span>93</span>
            </div>
            <div class="position">
              <span>MC</span>
            </div>
            <div class="company">
              <img src="https://assets.codepen.io/1328906/SM_OG_image.jpeg?width=60&height=31&format=auto" />
            </div>
          </div>
          <div class="profile-right">
            <img src="https://assets.codepen.io/1328906/kang-001.png?width=174&height=175&format=auto" />
          </div>
        </div>
        <div class="info-name">
          <span>Kang Ho Dong</span>
        </div>
        <div class="info-bottom">
          <div class="cell-1">
            <div class="stat-score">89</div>
            <div class="stat-title">ENT</div>
          </div>
          <div class="cell-2">
            <div class="stat-score">93</div>
            <div class="stat-title">COR</div>
          </div>
          <div class="cell-3">
            <div class="stat-score">81</div>
            <div class="stat-title">DSC</div>
          </div>
          <div class="cell-4">
            <div class="stat-score">89</div>
            <div class="stat-title">INT</div>
          </div>
          <div class="cell-5">
            <div class="stat-score">35</div>
            <div class="stat-title">TSG</div>
          </div>
          <div class="cell-6">
            <div class="stat-score">77</div>
            <div class="stat-title">PHY</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WinnerCard;
