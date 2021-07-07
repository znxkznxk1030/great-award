import React from "react";
import "./style-winner.scss";

import WinnerCard from "../WinnerCard/winnercard";
import Particle from "./Particle";

const colorSet = ["#C63347", "#F28E63", "#FAEFC4", "#F75781"];

const particleCount = 200;
const angleIncrement = (Math.PI * 2) / particleCount;

const FPS = 50;
let lastTimestamp = 0;

// Returns: 1 on 'normal' screens, 2 on retina displays
var PIXEL_RATIO = (function () {
  var ctx = document.createElement("canvas").getContext("2d"),
    dpr = window.devicePixelRatio || 1,
    bsr =
      ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio ||
      1;

  return dpr / bsr;
})();

class Winner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mouse: {
        x: 0,
        y: 0,
      },
      ctx: null,
      canvas: null,
      particles: [],
      hadshot: 0,
      eventdone: false,
    };

    this.refMain = React.createRef();
    this.refCanvas = React.createRef();
  }

  componentDidMount() {
    this.initializeFirework();
    this.animate();
  }

  initializeFirework() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const mainEl = this.refMain.current;
    let stageWidth = mainEl.clientWidth;
    let stageHeight = mainEl.clientHeight;

    console.log(mainEl.clientHeight);

    ctx.canvas.width = stageWidth * 2;
    ctx.canvas.height = stageHeight * 2;

    this.setState({
      canvas,
      ctx,
    });

    canvas.addEventListener("click", this.onClickCanvas.bind(this));
    canvas.addEventListener("resize", this.resize.bind(this));

    ctx.scale(2, 2);
    this.resize();
  }

  animate(timestamp) {
    if (this.state.eventdone) return;

    requestAnimationFrame(this.animate.bind(this));
    if (timestamp - lastTimestamp < 1000 / FPS) return;

    const ctx = this.state.ctx;
    const canvas = this.state.canvas;
    const particles = this.state.particles;

    if (!ctx || !canvas) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, i) => {
      if (particle.alpha > 0) {
        particle.update(ctx);
      } else {
        particles.splice(i, 1);
        if (particles.length === 0) {
          this.setState({ eventdone: true });
        }
      }
    });

    lastTimestamp = timestamp;
  }

  onClickCanvas(e) {
    if (this.state.hadshot >= 2) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle(
        clientX,
        clientY,
        2,
        colorSet[i % colorSet.length],
        {
          x: Math.cos(angleIncrement * i) * Math.random() * 10,
          y: Math.sin(angleIncrement * i) * Math.random() * 10,
        }
      );

      this.state.particles.push(particle);
    }

    this.setState({ hadshot: this.state.hadshot + 1 });
  }

  resize() {
    const mainEl = this.refMain.current;
    if (!mainEl) return;

    let stageWidth = mainEl.clientWidth;
    let stageHeight = mainEl.clientHeight;

    const ctx = this.state.ctx;

    if (ctx && ctx.canvas) {
      ctx.canvas.width = stageWidth * PIXEL_RATIO;
      ctx.canvas.height = stageHeight * PIXEL_RATIO;
      this.setState({
        ctx,
      });
    }
  }

  render() {
    return (
      <main ref={this.refMain}>
        <canvas
          ref={this.refCanvas}
          onClick={this.onClickCanvas.bind(this)}
        ></canvas>
        <div className="title">
          <h1 className="title-text">Weekly Winner</h1>
        </div>
        <div className="sub-title">
          <p className="sub-title-text">어둠의 별장</p>
        </div>
        <WinnerCard></WinnerCard>
      </main>
    );
  }
}

export default Winner;
