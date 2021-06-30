import React from "react";
import "./style-chat.scss";

class ChatBlock extends React.Component {
  isMyChat() {
    return false;
  }

  render() {
    return (
      <div className="chat">
        <div className="user-photo">
          <div className="user-name">{this.props.name}</div>
        </div>
        <p className={"chat-msg " + (this.props.isMine ? "me " : "friend ")}>
          {this.props.message}
        </p>
      </div>
    );
  }
}

export default ChatBlock;
