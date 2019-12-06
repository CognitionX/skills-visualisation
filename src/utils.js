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
