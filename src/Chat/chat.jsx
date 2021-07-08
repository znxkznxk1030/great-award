import React from "react";
import "./style-chat.scss";

import ChatBlock from "./chat-block";
import { prefixSet, nameSet, getRandomInt } from "./chat-util";
import { firestore } from "../Firebase";

let xss = require("xss");

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

  async componentDidMount() {
    this.messageRef = firestore.collection("message");
    this.query = this.messageRef.orderBy("createdAt").limit(25);

    await this.fetchMessages();
  }

  fetchMessages() {
    return new Promise((resolve, reject) => {
      this.query.onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          const chatlogs = this.state.chatlogs;
          let filteredData = {};
          const data = doc.data();
          Object.keys(data).forEach((key) => {
            filteredData[key] = xss(data[key]);
          });
          chatlogs.push(filteredData);
          this.setState({ chatlogs });
        });
      });
      resolve();
    });
  }

  initializeChatServer(displayName) {
    socket = io("wss://great-award-server.site", {
      secure: true,
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
      let filteredData = {};
      Object.keys(data).forEach((key) => {
        filteredData[key] = xss(data[key]);
      });
      chatlogs.push(filteredData);
      this.setState({ chatlogs });
    });
  }

  setChatValue(e) {
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
            {/* <ChatBlock
              name="겁먹은천해명"
              message="호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들 김호들
                화이팅! 호들호들 김호들 화이팅! 호들호들 김호들 화이팅! 호들호들
                김호들 화이팅!"
            />
            <ChatBlock name="단서찾은유병재" message="역시 유느님!" />
            <ChatBlock name="놀란신동" message="결국 신동이 다 푸는듯" /> */}
            {this.state.chatlogs.map((chat, index) => {
              const isMine = chat.name === this.state.displayName;

              return (
                <ChatBlock
                  key={index}
                  isMine={isMine}
                  name={chat.name}
                  message={chat.text}
                />
              );
            })}
          </div>
          <div className="chat-form">
            <input
              className="chat-text"
              type="text"
              value={this.state.chatValue}
              onChange={this.setChatValue.bind(this)}
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
