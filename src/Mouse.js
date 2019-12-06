import { Vector2 } from "three/src/math/Vector2.js";

export default class Mouse {
  constructor(props) {
    const { x, y } = props || { x: 999999, y: 999999 };
    this.position = new Vector2(x, y);
    this.intersectObject = undefined;
  }

  set intersect(value) {
    this.intersectObject = value;
  }

  get intersect() {
    return this.intersectObject;
  }
}
