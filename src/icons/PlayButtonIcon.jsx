import * as React from "react";

const PlayButtonIcon = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 18.3301L10 28.6603V8L16 12.3301Z"
      fill="#171717"
    />
  </svg>
);

export default PlayButtonIcon;
