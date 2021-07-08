import React from "react";
import "./style-chat.scss";

import ChatBlock from "./chat-block";
import { prefixSet, nameSet, getRandomInt } from "./chat-util";
import { firestore } from "../Firebase";
import { uid } from "uid";

let xss = require("xss");
class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatId: "",
      displayName: "",
      chatValue: "",
      chatlogs: [],
      uid: "",
    };
  }

  async componentDidMount() {
    this.firestore = firestore;
    this.messageRef = this.firestore.collection("message");
    this.query = this.messageRef.orderBy("createdAt").limit(200);

    await this.initializeUid();
    await this.initializeDisplayName();
    await this.initializeChatServer();
  }

  initializeChatServer() {
    return new Promise((resolve, reject) => {

      this.query.onSnapshot((snapshot) => {
        const chatlogs = [];
        snapshot.forEach((doc) => {
          let filteredData = {};
          const data = doc.data();
          Object.keys(data).forEach((key) => {
            filteredData[key] = xss(data[key]);
          });
          chatlogs.push(filteredData);
        });
        this.setState({ chatlogs });
      });
      resolve();
    });
  }

  initializeUid() {
    return new Promise((resolve, reject) => {
      this.setState({ uid: uid() }, () => {
        resolve();
      });
    });
  }

  initializeDisplayName() {
    return new Promise((resolve, reject) => {
      const prefix = prefixSet[getRandomInt(prefixSet.length)];
      const name = nameSet[getRandomInt(nameSet.length)];

      this.setState({ displayName: prefix + name }, () => {
        resolve(this.state.displayName);
      });
    });
  }

  setChatValue(e) {
    const chatValue = xss(e.target.value);
    this.setState({ chatValue });
  }

  async onSubmit() {
    await this.messageRef.add({
      text: this.state.chatValue,
      name: this.state.displayName,
      uid: this.state.uid,
      createdAt: new Date().toISOString()
    })

    this.setState({ chatValue: "" });
  }

  render() {
    return (
      <div className="chat-background">
        <div className="chat-box">
          <div className="chat-logs">
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
              onClick={this.onSubmit.bind(this)}
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
