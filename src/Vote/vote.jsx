import React from "react";
import "./style-vote.scss";

import { actors } from "../mock-data/actors";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
class Vote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actors,
      selectedActorId: -1,
      modalIsOpen: false,
    };
  }

  onChangeValue(e) {
    console.log(e.target.value);
    this.setState({ selectedActorId: e.target.value });
  }

  openModal(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  afterOpenModal() {}

  render() {
    return (
      <div className="vote-background">
        <div className="vote-question">
          <p className="vote-title"> 7 / 11 ??? </p>
          <p> 이번주 가장 많이 활약한 멤버는 누구인가요? </p>
        </div>
        <div className="container">
          <form>
            {this.state.actors.map((actor) => {
              const selectedActorId = this.state.selectedActorId;
              return (
                <div className="vote-item" key={actor.id}>
                  <input
                    type="radio"
                    id={actor.id}
                    name={actor.name}
                    value={actor.id}
                    key={actor.id}
                    onChange={this.onChangeValue.bind(this)}
                    checked={selectedActorId === actor.id}
                  ></input>
                  <label htmlFor={actor.id}>{actor.name}</label>
                  <br></br>
                </div>
              );
            })}

            <button className="vote-btn--submit" onClick={this.openModal.bind(this)}>
              제 출
            </button>
          </form>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal.bind(this)}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <button onClick={this.closeModal.bind(this)}>close</button>
          <div>I am a modal</div>
          <form>
            <button>tab navigation</button>
            <button>stays</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Vote;
