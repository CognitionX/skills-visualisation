import _ from "lodash";
import React, { createRef } from "react";

import Nav from "./Nav";
import Renderer from "./Renderer";
import Cluster from "./Cluster";
import * as slectors from "./selectors";
import { normalize } from "./utils";

import styles from "./sass/styles.module.sass";
import logoSvg from "./images/logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.rootRef = createRef();
    this.canvasContainerRef = createRef();
    this.canvasRef = createRef();

    this.onClusterClick = this.onClusterClick.bind(this);
    this.onClusterHover = this.onClusterHover.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.renderer = undefined;

    this.state = {
      selectedClusterId: undefined,
      focused: false
    };
  }

  async componentDidMount() {
    const { data } = this.props;

    const mdsDat = data["mdsDat"];
    const range = mdsDat["topics"].length;

    const [mdsDatX, mdsDatY] = normalize(
      [data["mdsDat"]["x"], data["mdsDat"]["y"]],
      [-1, 1]
    );

    const [mdsDatFreq] = normalize([mdsDat["Freq"]], [0.05, 0.3]);

    const clusters = _.range(range).map(index => {
      return new Cluster({
        x: mdsDatX[index],
        y: mdsDatY[index],
        topic: mdsDat["topics"][index],
        freq: mdsDatFreq[index]
      });
    });

    this.renderer = new Renderer({
      canvasContainer: this.canvasContainerRef.current,
      canvas: this.canvasRef.current,
      clusters: clusters
    });

    this.renderer.on("object-click", this.onClusterClick);
    this.renderer.on("object-hover", this.onClusterHover);
    this.renderer.on("background-click", this.onBackgroundClick);
    this.renderer.start();
    this.renderer.onResize();
  }

  onClusterClick(data) {
    const { selectedClusterId } = this.state;

    this.setState({
      focused: true
    });
    this.renderer.focus(selectedClusterId);
  }

  onClusterHover(data) {
    const { focused } = this.state;
    const { topic } = data;

    if (!focused) {
      this.setState({
        selectedClusterId: topic
      });
      this.renderer.select(topic);
    }
  }

  onBackgroundClick() {
    this.setState({
      selectedClusterId: undefined,
      focused: false
    });
    this.renderer.deselect();
  }

  componentWillUnmount() {
    this.renderer.destory();
  }

  componentDidUpdate(prevProps) {
    const { width, height } = this.props;

    if (prevProps.width == width && prevProps.height == height) return;
    if (this.renderer) this.renderer.onResize();
  }

  render() {
    const { data } = this.props;
    const { selectedClusterId, focused } = this.state;
    const skillList = slectors.makeGetSkillList(selectedClusterId)(data);
    const { width, height } = this.props;

    return (
      <section
        className={styles["section"]}
        ref={this.rootRef}
        style={{ width: width + "px", height: height + "px" }}
      >
        <div
          ref={this.canvasContainerRef}
          className={styles["canvas-container"]}
        >
          <div
            className={styles["canvas-container__logo"]}
            style={{ background: `#F6F6F6 url(${logoSvg}) no-repeat` }}
          />

          <a className={styles["canvas-container__logo"]} />

          <canvas ref={this.canvasRef} />
        </div>
        <Nav
          skillList={skillList}
          focused={focused}
          onBackToMainClick={this.onBackgroundClick}
        />
      </section>
    );
  }
}

export default App;
