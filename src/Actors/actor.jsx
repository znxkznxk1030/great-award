import React from "react";
import "./style-actors.scss";

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: this.props.actor.name,
    };
  }

  getComments(actor) {
    return actor.comment.split("&");
  }

  changeActorName() {
    this.setState({ displayName: this.props.actor.nickname });
  }

  render() {
    const actor = this.props.actor;
    const index = this.props.index;
    const comments = this.getComments(actor);
    const leftComment = comments[0];
    const rightComment = comments[1];

    return (
      <div
        onMouseOver={this.changeActorName.bind(this)}
        className={"actor-frame actor-animate-" + index}
        key={index}
      >
        <img
          src={actor.src}
          alt={actor.name}
          className={"actor-img-" + index}
        />
        <p className="actor-name">{actor.name}</p>
        <p className="actor-nickname">{actor.nickname}</p>
        <div class="bg-triangle--before"></div>
        <div class="bg-triangle--after"></div>
        <div class="comment--left">{leftComment}</div>
        <div class="comment--right">{rightComment}</div>
      </div>
    );
  }
}

export default Actor;
