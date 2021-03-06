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
import Cluster from "./Cluster";

// import clusterVertexShader from "./shaders/cluster.vert";
// import clusterFragmentShader from "./shaders/cluster.frag";
// import { OrbitControls } from "three-orbitcontrols-ts";
export default class Renderer extends EventEmitter {
  constructor({ canvas, canvasContainer, clusters: clustersData }) {
    super();
    this.canvas = canvas;
    this.canvasContainer = canvasContainer;

    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.canvasContainer.addEventListener("mouseup", this.onMouseUp, false);
    this.canvasContainer.addEventListener("mousemove", this.onMouseMove, false);

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

    const intersect = this.mouse.intersect;

    if (intersect && !intersect.object.userData.disabled) {
      this.emit("object-hover", intersect.object.userData);
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }

  onMouseUp() {
    const intersect = this.mouse.intersect;

    if (intersect && !intersect.object.userData.disabled) {
      const { userData } = this.mouse.intersect.object;
      this.emit("object-click", userData);
    } else {
      this.emit("background-click");
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

    this.timeout = setTimeout(() => {
      this.raf = requestAnimationFrame(this.animate);
    }, 1000 / 30);
  }

  render(time) {
    this.raycaster.setFromCamera(this.mouse.position, this.camera);
    const intersects = this.raycaster.intersectObjects(this.clusters);
    this.mouse.intersect = intersects[0];

    this.renderer.render(this.scene, this.camera);
  }

  focus(clusterId) {
    this.clusters.forEach(cluster => {
      if (cluster.userData.topic === clusterId) {
        cluster.userData.enable();
      } else {
        cluster.userData.disable();
        cluster.material.opacity = Cluster.disabledOpacity;
      }
    });
  }

  select(clusterId) {
    this.clusters.forEach(cluster => {
      const hightlighted = new Color("#0096ff");
      const original = new Color("#666666");

      const targetColor =
        clusterId == cluster.userData.topic ? hightlighted : original;
      const targetOpacity = clusterId == cluster.userData.topic ? 0.8 : 0.3;

      if (!cluster.material.color.equals(targetColor)) {
        cluster.material.color = targetColor;
        cluster.material.opacity = targetOpacity;
      }
    });
  }

  deselect() {
    this.clusters.forEach(cluster => {
      const targetColor = new Color("#666666");
      const targetOpacity = 0.3;

      cluster.material.color = targetColor;
      cluster.material.opacity = targetOpacity;
      cluster.userData.enable();
    });

    const intersect = this.mouse.intersect;

    if (intersect && !intersect.object.userData.disabled) {
      this.emit("object-hover", intersect.object.userData);
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  }

  destory() {
    clearTimeout(this.timeout);
    cancelAnimationFrame(this.raf);
    this.canvasContainer.removeEventListener("mouseup", this.onMouseUp);
    this.canvasContainer.removeEventListener("mousemove", this.onMouseMove);
    this.renderer.context = null;
    this.renderer.domElement = null;
    this.renderer = null;
  }

  getElement() {
    return this.canvas;
  }
}
