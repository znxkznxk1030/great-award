import React from "react";
import "./style-vote.scss";

import { actors } from "../mock-data/actors";
import Modal from "react-modal";
import VoteModal from "../VoteModal/vote-modal";
import WarnModal from "../VoteModal/warn-modal";

import { firestore } from "../Firebase";
import { uid } from "uid";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
    height: "180px",
    padding: "0px",
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
      uid: "",
      isReady: false,
      isDuplicated: false,
    };
  }

  async componentDidMount() {
    this.firestore = firestore;
    this.voteRef = this.firestore.collection("ballot");

    await this.initializeUid();
  }

  initializeUid() {
    return new Promise((resolve, reject) => {
      this.setState({ uid: uid(), isReady: true }, () => {
        resolve();
      });
    });
  }

  onChangeValue(e) {
    // console.log(e.target.value);
    this.setState({ selectedActorId: e.target.value });
  }

  openModal(e) {
    e.preventDefault();
    if (this.state.selectedActorId === -1) return;
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  async vote(e) {
    e.preventDefault();
    const {
      selectedActorId: candidateId,
      isReady,
      uid,
      isDuplicated,
    } = this.state;

    if (candidateId === -1 || !isReady || isDuplicated) {
      return;
    }

    await this.voteRef.add({
      candidateId,
      voteId: "vote-1",
      episode: "1",
      uid,
      createdAt: new Date().toISOString(),
    });

    this.setState({ isDuplicated: true });
    this.closeModal();
  }

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

            <button
              className="vote-btn--submit"
              onClick={this.openModal.bind(this)}
            >
              제 출
            </button>
          </form>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
          {this.state.isDuplicated ? (
            <WarnModal onClose={this.closeModal.bind(this)}
            title={"대탈출 대투표"}
            message={"이미 투표하였습니다."} />
          ) : (
            <VoteModal
              onConfirm={this.vote.bind(this)}
              onReject={this.closeModal.bind(this)}
              selectedActor={
                this.state.selectedActorId > 0
                  ? actors[this.state.selectedActorId - 1].name
                  : ""
              }
            />
          )}
        </Modal>
      </div>
    );
  }
}

export default Vote;
