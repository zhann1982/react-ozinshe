import * as React from "react";

const ChevronRight = ({width, height}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width+8} ${height+8}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.41422L9.4143 5L16.4853 12.0711L9.4143 19.1422L8 17.7279L13.6569 12.0711L8 6.41422Z"
      fill="#171717"
    />
  </svg>
);

export default ChevronRight;
