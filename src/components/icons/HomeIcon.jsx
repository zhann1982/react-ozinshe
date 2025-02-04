import * as React from "react";

const HomeIcon = ({width, height, color}) => (
  <svg
    width={width}
    height={width}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 8.80258L14.0208 3.87039C12.8492 2.70987 10.9497 2.70987 9.77817 3.87039L3 8.60347V21H10V15.0566C10 13.9624 10.8954 13.0755 12 13.0755C13.1046 13.0755 14 13.9624 14 15.0566V21H21V8.80258ZM11.1924 5.28935L5 9.431V19H8V15.0484C8 12.866 9.79086 11.0968 12 11.0968C14.2091 11.0968 16 12.866 16 15.0484V19H19V9.62958L12.6066 5.28935C12.2161 4.90355 11.5829 4.90355 11.1924 5.28935Z"
      fill={color}
    />
  </svg>
);

export default HomeIcon;