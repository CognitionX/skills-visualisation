import polylinearScale from "polylinear-scale";

export const getComputedElementDimensions = element => {
  const style = window.getComputedStyle(element);
  const width = style.getPropertyValue("width");
  const height = style.getPropertyValue("height");
  const { top, left, bottom, right } = element.getBoundingClientRect();

  return {
    width: parseInt(width),
    height: parseInt(height),
    top: top,
    left: left,
    bottom: bottom,
    right: right
  };
};

export const normalize = (arrays, range) => {
  return arrays.reduce((accum, values) => {
    const linear = polylinearScale(
      [Math.min(...values), Math.max(...values)],
      range
    );
    return accum.concat([values.map(value => linear(value))]);
  }, []);
};
