import { Vector2 } from "three/src/math/Vector2.js";
import { Color } from "three/src/math/Color.js";

export default class Cluster {
  static get color() {
    return new Color("#666666");
  }

  static get hightlightedColor() {
    return new Color("#0096ff");
  }

  static get opacity() {
    return 0.3;
  }

  static get hightlightedOpacity() {
    return 0.8;
  }

  static get disabledOpacity() {
    return 0.1;
  }

  get radius() {
    return this.freq;
  }

  constructor(props) {
    const { x, y, topic, freq } = props;

    this.position = new Vector2(x, y);
    this.topic = topic;
    this.freq = freq;
    this.disabled = false;
  }

  disable() {
    this.disabled = true;
  }

  enable() {
    this.disabled = false;
  }
}
