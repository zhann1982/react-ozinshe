import * as React from "react";

const CheckIcon = ({width, height, color}) => (
  <svg
    width={width ?? 16}
    height={height ?? 16}
    viewBox={`0 0 ${width ?? 16} ${height ?? 16}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.0572 8.94313L5.17159 7.05753L4.22878 8.00033L7.0572 10.8287L11.7713 6.11469L10.8285 5.17188L7.0572 8.94313Z"
      fill={color ?? "#171717"}
    />
  </svg>
);
export default CheckIcon;