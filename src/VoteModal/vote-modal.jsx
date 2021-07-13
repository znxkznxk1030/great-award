import React from "react";
import "./style-vote-modal.scss";

class VoteModal extends React.Component {
  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-header">
          <h2> 대탈출 대투표</h2>
        </div>
        <div className="modal-body">
          가장 많이 활약한 멤버는 <h2> {this.props.selectedActor} </h2> 맞나요?
        </div>
        <div className="modal-footer">
          <button onClick={this.props.onConfirm}>네</button>
          <button onClick={this.props.onReject}>아니요</button>
        </div>
      </div>
    );
  }
}

export default VoteModal;
