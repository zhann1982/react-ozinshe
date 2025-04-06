import * as React from "react";

const VideoIcon = ({width, height , color}) => (
  <svg
    width={width || 16}
    height={height || 16}
    viewBox={`0 0 ${width || 16} ${height || 16}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3533 4.76667C14.1471 4.64758 13.8929 4.64758 13.6867 4.76667L11.3333 5.92667C11.2939 4.85084 10.4099 3.99928 9.33333 4H3.33333C2.22876 4 1.33333 4.89543 1.33333 6V10C1.33333 11.1046 2.22876 12 3.33333 12H9.33333C10.4099 12.0007 11.2939 11.1492 11.3333 10.0733L13.7067 11.26C13.7975 11.3066 13.8979 11.3317 14 11.3333C14.1248 11.3337 14.2472 11.2991 14.3533 11.2333C14.5487 11.1113 14.6671 10.897 14.6667 10.6667V5.33333C14.6671 5.103 14.5487 4.88874 14.3533 4.76667ZM9.99999 10C9.99999 10.3682 9.70152 10.6667 9.33333 10.6667H3.33333C2.96514 10.6667 2.66666 10.3682 2.66666 10V6C2.66666 5.63181 2.96514 5.33333 3.33333 5.33333H9.33333C9.70152 5.33333 9.99999 5.63181 9.99999 6V10ZM13.3333 9.58667L11.3333 8.58667V7.41333L13.3333 6.41333V9.58667Z"
      fill={color || "#8F92A1"}
    />
  </svg>
);

export default VideoIcon;