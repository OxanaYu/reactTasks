import React from "react";

const Boxes = ({ color, width, height }) => {
  return (
    <div style={{ backgroundColor: color, width: width, height: height }}></div>
  );
};

export default Boxes;
