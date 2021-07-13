import React from "react";
import "./style-vote-modal.scss";

class WarnModal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-header">
          <h2> {this.props.title}</h2>
        </div>
        <div className="modal-body">
          {this.props.message}
        </div>
        <div className="modal-footer">
          <button onClick={this.props.onClose}>네</button>
        </div>
      </div>
    );
  }
}

export default WarnModal;
