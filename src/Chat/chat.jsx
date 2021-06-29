import React from "react";
import "./style-chat.scss";

const io = require("socket.io-client");

let socket = null;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "호들팬",
      chatValue: "",
      chatlogs: [
        {
          value: "채팅 테스트",
        },
      ],
    };
    this.initializeChatServer();
  }

  initializeChatServer() {
    socket = io("ws://0.0.0.0:8080", {
      reconnectionDelayMax: 10000,
    });

    socket.emit("login", {
      id: this.state.displayName,
    });

    this.listenChatEvent();
  }

  listenChatEvent() {
    socket.on("chat", (data) => {
      const chatlogs = this.state.chatlogs;
      chatlogs.push(data);
      console.log("chatlogs > ",  chatlogs);
      this.setState({chatlogs})
    });
  }

  handleChatValueChange(e) {
    const chatValue = e.target.value;
    this.setState({ chatValue });
  }

  handleBoardcastChat() {
    socket.emit("chat", {
      value: this.state.chatValue,
    });
  }

  render() {
    return (
      <div className="chat-background">
        <div className="chat-box">
          <div className="chat-logs">
            <div className="chat">
              <div className="user-photo"></div>
              <p className="chat-msg friend">
                {" "}
                호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들 김호들
                화이팅! 호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들
                김호들 화이팅!{" "}
              </p>
            </div>
            <div className="chat">
              <div className="user-photo"></div>
              <p className="chat-msg me"> 역시 유느님 ! </p>
            </div>
            <div className="chat">
              <div className="user-photo"></div>
              <p className="chat-msg friend"> 결국은 신동이 다 푸는 듯 </p>
            </div>
            {this.state.chatlogs.map((chat, index) => (
              <div className="chat" key={index}>
                <div className="user-photo"></div>
                <p className="chat-msg friend"> {chat.value} </p>
              </div>
            ))}
          </div>
          <div className="chat-form">
            <input
              className="chat-text"
              type="text"
              value={this.state.chatValue}
              onChange={this.handleChatValueChange.bind(this)}
            ></input>
            <button
              className="chat-btn--snd"
              onClick={this.handleBoardcastChat.bind(this)}
            >
              <i className="fas fa-keyboard"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
