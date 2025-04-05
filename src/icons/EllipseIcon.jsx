import * as React from "react";

const EllipseIcon = ({width, height, color}) => (
  <svg
    width={width || 4}
    height={height || 4}
    viewBox={`0 0 ${width || 4} ${height || 4}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <circle cx={width/2 || 2} cy={height/2 || 2} r={width/2 || 2} fill={color || "#9CA3AF"} />
  </svg>
);
export default EllipseIcon;