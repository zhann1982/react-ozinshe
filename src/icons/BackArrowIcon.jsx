import * as React from "react";

const BackArrowIcon = ({width, height}) => (
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
      d="M16.9407 9.16692V10.8336H6.25051L8.95258 13.5357L7.7741 14.7142L3.06006 10.0002L7.7741 5.28613L8.95258 6.46464L6.25032 9.16692H16.9407Z"
      fill="#171717"
    />
  </svg>
);

export default BackArrowIcon;
