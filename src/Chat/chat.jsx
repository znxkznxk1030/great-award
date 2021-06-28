import React from "react";
import "./style-chat.scss";

class Chat extends React.Component {
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
          </div>
          <div className="chat-form">
            <input
              className="chat-text"
              type="text"
              value="대탈출 멤버틀에게 응원의 메세지를 남겨주세요!"
            ></input>
            <button className="chat-btn--snd"><i class="fas fa-keyboard"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
