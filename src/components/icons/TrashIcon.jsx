import * as React from "react";
const TrashIcon = ({width, height, viewBox}) => (
  <svg
    width={width}
    height={height}
    // viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3333 3.3335V2.66683C11.3333 1.93045 10.7364 1.3335 10 1.3335H6C5.26362 1.3335 4.66667 1.93045 4.66667 2.66683V3.3335H2.66667C2.29848 3.3335 2 3.63198 2 4.00016C2 4.36835 2.29848 4.66683 2.66667 4.66683H3.33333V12.0002C3.33333 13.1048 4.22877 14.0002 5.33333 14.0002H10.6667C11.7713 14.0002 12.6667 13.1048 12.6667 12.0002V4.66683H13.3333C13.7015 4.66683 14 4.36835 14 4.00016C14 3.63198 13.7015 3.3335 13.3333 3.3335H11.3333ZM10 2.66683H6V3.3335H10V2.66683ZM11.3333 4.66683H4.66667V12.0002C4.66667 12.3684 4.96515 12.6668 5.33333 12.6668H10.6667C11.0349 12.6668 11.3333 12.3684 11.3333 12.0002V4.66683ZM6 6.00016H7.33333V11.3335H6V6.00016ZM10 6.00016H8.66667V11.3335H10V6.00016Z"
      fill="#171717"
      fillOpacity={0.8}
    />
  </svg>
);
export default TrashIcon;
