import * as React from "react";

const CategoriesIcon = ({width, height, color}) => (
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
      d="M7 5H17C17.5523 5 18 5.44772 18 6V18C18 18.5523 17.5523 19 17 19H7C6.44772 19 6 18.5523 6 18V6C6 5.44772 6.44772 5 7 5ZM4 6C4 4.34315 5.34315 3 7 3H17C18.6569 3 20 4.34315 20 6V18C20 19.6569 18.6569 21 17 21H7C5.34315 21 4 19.6569 4 18V6ZM16 7H8V9H16V7ZM8 11H16V13H8V11ZM13 15H8V17H13V15Z"
      fill={color}
    />
  </svg>
);

export default CategoriesIcon;