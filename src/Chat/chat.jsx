import React from "react";
import "./style-chat.scss";

import ChatBlock from "./chat-block";
import { prefixSet, nameSet, getRandomInt } from "./chat-util";

const io = require("socket.io-client");

let socket = null;
class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: "",
      displayName: "",
      chatValue: "",
      chatlogs: [],
    };
  }

  componentDidMount() {
    this.initializeDisplayName().then((displayName) => {
      this.initializeChatServer(displayName);
    });
  }

  initializeChatServer(displayName) {
    socket = io("ws://0.0.0.0:8080", {
      reconnectionDelayMax: 10000,
    });

    socket.emit("login", {
      id: displayName,
    });

    this.listenChatEvent();
  }

  initializeDisplayName() {
    return new Promise((resolve, reject) => {
      const prefix = prefixSet[getRandomInt(prefixSet.length)];
      const name = nameSet[getRandomInt(nameSet.length)];

      console.log(prefix, name);

      this.setState({ displayName: prefix + name }, () => {
        console.log(this.state.displayName);
        resolve(this.state.displayName);
      });
    });
  }

  listenChatEvent() {
    socket.on("chat", (data) => {
      const chatlogs = this.state.chatlogs;
      chatlogs.push(data);
      console.log("chatlogs > ", chatlogs);
      this.setState({ chatlogs });
    });
  }

  handleChatValueChange(e) {
    const chatValue = e.target.value;
    this.setState({ chatValue });
  }

  handleBoardcastChat() {
    socket.emit("chat", {
      name: this.state.displayName,
      value: this.state.chatValue,
    });
  }

  render() {
    return (
      <div className="chat-background">
        <div className="chat-box">
          <div className="chat-logs">
            <ChatBlock
              name="겁먹은천해명"
              message="호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들 김호들
                화이팅! 호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들
                김호들 화이팅!"
            />
            <ChatBlock name="단서찾은유병재" message="역시 유느님!" />
            <ChatBlock name="놀란신동" message="결국 신동이 다 푸는듯" />
            {this.state.chatlogs.map((chat, index) => {
              const isMine = chat.name === this.state.displayName;

              return (
                <ChatBlock
                  key={index}
                  isMine={isMine}
                  name={chat.name}
                  message={chat.value}
                />
              );
            })}
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
