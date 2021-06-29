import React from "react";
import "./style-winnercard.scss";

class WinnerCard extends React.Component {
  render() {
    return (
      <div className="ent-card">
        <div className="info-top">
          <div className="profile-left">
            <div className="total-score">
              <span>93</span>
            </div>
            <div className="position">
              <span>MC</span>
            </div>
            <div className="company">
              <img
                alt="sm C&C"
                src="https://assets.codepen.io/1328906/SM_OG_image.jpeg?width=60&height=31&format=auto"
              />
            </div>
          </div>
          <div className="profile-right">
            <img
              alt="kanghodong"
              src="https://assets.codepen.io/1328906/kang-001.png?width=174&height=175&format=auto"
            />
          </div>
        </div>
        <div className="info-name">
          <span>Kang Ho Dong</span>
        </div>
        <div className="info-bottom">
          <div className="cell-1">
            <div className="stat-score">89</div>
            <div className="stat-title">ENT</div>
          </div>
          <div className="cell-2">
            <div className="stat-score">93</div>
            <div className="stat-title">COR</div>
          </div>
          <div className="cell-3">
            <div className="stat-score">81</div>
            <div className="stat-title">DSC</div>
          </div>
          <div className="cell-4">
            <div className="stat-score">89</div>
            <div className="stat-title">INT</div>
          </div>
          <div className="cell-5">
            <div className="stat-score">35</div>
            <div className="stat-title">TSG</div>
          </div>
          <div className="cell-6">
            <div className="stat-score">77</div>
            <div className="stat-title">PHY</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WinnerCard;
