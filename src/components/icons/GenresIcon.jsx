import * as React from "react";

const GenresIcon = ({width, height, color}) => (
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
      d="M4 3C2.34315 3 1 4.34315 1 6V10C1 11.6569 2.34315 13 4 13H20C21.6569 13 23 11.6569 23 10V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10V6C21 5.44771 20.5523 5 20 5ZM7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20ZM4 16C4 15.4477 4.44772 15 5 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16Z"
      fill={color}
    />
  </svg>
);

export default GenresIcon;