import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
// import { hot } from "react-hot-loader/root";

import App from "./App";
import "./sass/root.sass";
import data from "./samples/4.json";
console.log(data);
const rootElement = document.createElement("div");
rootElement.className = "root";
document.body.appendChild(rootElement);

const Root = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setWidth(width - 100);
    setHeight(height - 70);
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <App data={data} width={width} height={height} />;
};

const render = Root => ReactDOM.render(<Root />, rootElement);

render(Root);
// render(hot(Root));
