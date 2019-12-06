import _ from "lodash";
import React, { createRef } from "react";
// import root from "react-shadow";
import polylinearScale from "polylinear-scale";

import Nav from "./Nav";
import Renderer from "./Renderer";
import Cluster from "./Cluster";
import Labels from "./Labels";
import * as slectors from "./selectors";
import styles from "./sass/styles.module.sass";

const normalize = (arrays, range) => {
  return arrays.reduce((accum, values) => {
    const linear = polylinearScale(
      [Math.min(...values), Math.max(...values)],
      range
    );
    return accum.concat([values.map(value => linear(value))]);
  }, []);
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.rootRef = createRef();
    this.canvasContainerRef = createRef();
    this.canvasRef = createRef();

    this.onClusterClick = this.onClusterClick.bind(this);
    this.renderer = undefined;

    this.state = {
      setSelectedClusterId: undefined
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

    console.log(mdsDat["Freq"]);
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
    this.renderer.start();
  }

  componentDidUpdate(prevProps) {
    const { current: rootEl } = this.rootRef;
    const { width, height } = this.props;

    if (prevProps.width == width && prevProps.height == height) return;

    rootEl.style.width = width + "px";
    rootEl.style.height = height + "px";

    this.renderer.onResize();
  }

  onClusterClick(data) {
    this.setState({
      selectedClusterId: data.topic
    });
  }

  render() {
    const { data } = this.props;
    const { selectedClusterId } = this.state;
    const skillList = slectors.makeGetSkillList(selectedClusterId)(data);

    return (
      <section className={styles["section"]} ref={this.rootRef}>
        <div
          ref={this.canvasContainerRef}
          className={styles["canvas-container"]}
        >
          <canvas ref={this.canvasRef} />
          <Labels />
        </div>
        <Nav skillList={skillList} />
      </section>
    );
  }
}

export default App;
