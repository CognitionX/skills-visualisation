import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { Scene } from "three/src/scenes/Scene.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { Color } from "three/src/math/Color.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { Vector3 } from "three/src/math/Vector3.js";
import { Mesh } from "three/src/objects/Mesh.js";
import { Line } from "three/src/objects/Line.js";
import { CircleGeometry } from "three/src/geometries/CircleGeometry.js";
import { Geometry } from "three/src/core/Geometry.js";
import { LineBasicMaterial } from "three/src/materials/LineBasicMaterial.js";
import { MeshBasicMaterial } from "three/src/materials/MeshBasicMaterial.js";
import { Raycaster } from "three/src/core/Raycaster.js";

// import TWEEN from "@tweenjs/tween.js";

import Mouse from "./Mouse";
import { getComputedElementDimensions } from "./utils";
import EventEmitter from "eventemitter3";

// import clusterVertexShader from "./shaders/cluster.vert";
// import clusterFragmentShader from "./shaders/cluster.frag";
// import { OrbitControls } from "three-orbitcontrols-ts";
export default class Renderer extends EventEmitter {
  constructor({ canvas, canvasContainer, clusters: clustersData }) {
    super();
    this.canvas = canvas;
    this.canvasContainer = canvasContainer;

    this.canvasContainer.addEventListener(
      "mouseup",
      this.onMouseUp.bind(this),
      false
    );
    this.canvasContainer.addEventListener(
      "mousemove",
      this.onMouseMove.bind(this),
      false
    );
    this.canvasContainer.addEventListener("mouseout", () => {}, false);

    const width = 800;
    const height = 800;

    this.renderer = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });

    this.renderer.setPixelRatio(2);

    this.scene = new Scene();

    this.camera = new PerspectiveCamera(70, width / height, 1, 100000);
    this.camera.lookAt(new Vector3(0, 0, 0));
    this.camera.position.z = 2;

    this.clusters = [];
    clustersData.forEach(data => {
      const circle = new Mesh(
        new CircleGeometry(data.radius, 64),
        new MeshBasicMaterial({
          color: 0x666666,
          opacity: 0.3,
          transparent: true
        })
      );
      circle.position.set(data.position.x, data.position.y, -data.radius / 100);
      circle.userData = data;

      this.clusters.push(circle);
      this.scene.add(circle);
    });

    this.raycaster = new Raycaster();
    this.mouse = new Mouse();

    this.render = this.render.bind(this);
    this.animate = this.animate.bind(this);
  }

  start() {
    this.animate();
  }

  onMouseMove(e) {
    e.preventDefault();
    const { left, top, right, bottom } = getComputedElementDimensions(
      this.canvasContainer
    );

    this.mouse.position.set(
      ((e.clientX - left) / (right - left)) * 2 - 1,
      -((e.clientY - top) / (bottom - top)) * 2 + 1
    );

    if (this.mouse.intersect) {
      const { topic } = this.mouse.intersect.object.userData;

      this.emit("object-click", this.mouse.intersect.object.userData);

      this.clusters.forEach(cluster => {
        const hightlighted = new Color("#0096ff");
        const original = new Color("#666666");

        const targetColor =
          topic == cluster.userData.topic ? hightlighted : original;
        const targetOpacity = topic == cluster.userData.topic ? 0.8 : 0.3;

        if (!cluster.material.color.equals(targetColor)) {
          cluster.material.color = targetColor;
          cluster.material.opacity = targetOpacity;
        }
      });
    }
  }

  onMouseUp() {
    if (this.mouse.intersect) {
      this.emit("object-click", this.mouse.intersect.object.userData);
    }
  }

  onResize() {
    const { left, top, right, bottom } = getComputedElementDimensions(
      this.canvasContainer
    );
    const width = right - left;
    const height = bottom - top;

    this.canvas.width = width;
    this.canvas.height = height;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.render();
  }

  toScreenPosition(obj, camera) {
    const vector = new Vector3();

    const widthHalf = 0.5 * this.canvas.width;
    const heightHalf = 0.5 * this.canvas.height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = vector.x * widthHalf + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;

    return {
      x: vector.x,
      y: vector.y
    };
  }

  animate(time) {
    this.render(time);

    setTimeout(() => {
      requestAnimationFrame(this.animate);
    }, 1000 / 30);
  }

  render(time) {
    this.raycaster.setFromCamera(this.mouse.position, this.camera);
    const intersects = this.raycaster.intersectObjects(this.clusters);
    this.mouse.intersect = intersects[0];

    this.renderer.render(this.scene, this.camera);
    // TWEEN.update(time);
    // this.controls.update();
  }

  getElement() {
    return this.canvas;
  }
}
