import React from "react";
import "./style-home.scss";

import { actorBgImgList } from "../mock-data/actors";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorBgImgList,
    };
  }

  render() {
    return (
      <div className="home-background">
        <div className="title">
          <p>대탈출 팬 사이트</p>
        </div>
        <div className="video-wrapper">
          <iframe
            className="video--iframe"
            src="https://www.youtube.com/embed/IZfBeMuPSBg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="context">
          {this.state.actorBgImgList.map((actor, index) => (
            <img
              src={actor.src}
              alt="404"
              className={"actor-img-" + index}
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
