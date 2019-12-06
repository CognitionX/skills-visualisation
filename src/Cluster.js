import { Vector2 } from "three/src/math/Vector2.js";

export default class Cluster {
  get radius() {
    return this.freq;
  }

  constructor(props) {
    const { x, y, topic, freq } = props;

    this.position = new Vector2(x, y);
    this.topic = topic;
    this.freq = freq;
  }
}
