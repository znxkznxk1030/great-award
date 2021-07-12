import React from "react";
import "./style-spinner.scss";

class Spinner extends React.Component {
  render() {
    return (
      <div class="spinner-wrapper">
        <svg
          class="spinner"
          viewBox="0 0 75 75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    );
  }
}

export default Spinner;
