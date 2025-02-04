import * as React from "react";

const AgesIcon = ({width, height, color}) => (
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
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 11C9.55228 11 10 10.5523 10 10C10 9.44771 9.55228 9 9 9C8.44772 9 8 9.44771 8 10C8 10.5523 8.44772 11 9 11ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13H10C10 14.1046 10.8954 15 12 15C13.1046 15 14 14.1046 14 13H16ZM15 11C15.5523 11 16 10.5523 16 10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10C14 10.5523 14.4477 11 15 11Z"
      fill={color}
    />
  </svg>
);

export default AgesIcon;