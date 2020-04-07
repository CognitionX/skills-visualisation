import _ from "lodash";
import React, { createRef } from "react";
import cx from "classnames";

import Nav from "./Nav";
import Renderer from "./Renderer";
import Cluster from "./Cluster";
import ProfilesList from './Profiles';
import * as selectors from "./selectors";
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
    this.onSkillClick = this.onSkillClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.renderer = undefined;

    this.state = {
      selectedClusterId: undefined,
      focused: false,
      skillName: undefined,
      isProfilesView: false
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

  onSkillClick(event, name) {
    this.setState({
      skillName: name,
      isProfilesView: true
    });

    this.props.onSkillClick(event, name);
  }

  onBackClick() {
    this.setState({
      isProfilesView: false
    });
  }

  componentWillUnmount() {
    this.renderer.destory();
  }

  componentDidUpdate(prevProps, prevState) {
    const { width, height } = this.props;
    if(this.state.isProfilesView !== prevState.isProfilesView) {
      this.renderer.onResize();
    }
    if (prevProps.width == width && prevProps.height == height) return;
    if (this.renderer) this.renderer.onResize();
  }

  render() {
    const { data, profilesBySkill, isMobile, isTouch, occupations } = this.props;
    const { selectedClusterId, focused, skillName, isProfilesView } = this.state;
    const skillList = selectors.makeGetSkillList(selectedClusterId)(data);
    const { width, height } = this.props;

    return (
      <section
        className={styles["section"]}
        ref={this.rootRef}
        style={{ width: width + "px", minHeight: height + "px" }}
      >
        <div
          ref={this.canvasContainerRef}
          className={styles["canvas-container"]}
        >
          <div
            className={styles["canvas-container__logo"]}
            style={{ background: `#F6F6F6 url(${logoSvg}) no-repeat` }}
          />
        
  
          <canvas style={{ display: isProfilesView ? "none" : "block"}} ref={this.canvasRef} />
          
          {isProfilesView &&
            <div className={styles["profiles-by-skill"]}>
              <button className={cx(styles["back-button"], isMobile && styles["back-button--mobile"])} onClick={this.onBackClick}>
                <span>{`< Back to the main view`}</span>
              </button>
              <ProfilesList 
                profilesBySkill={profilesBySkill} 
                skillName={skillName}     
                occupations={occupations}        
              />
            </div> 
          }

        </div>
        {
          !isProfilesView &&
          <Nav
            maxHeight={height}
            skillList={skillList}
            focused={focused}
            onBackToMainClick={this.onBackgroundClick}
            onSkillClick={this.onSkillClick}
          />
        }

      </section>
    );
  }
}

export default App;
