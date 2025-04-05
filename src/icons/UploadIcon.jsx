import * as React from "react";

const UploadIcon = ({width, height}) => (
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
      d="M12 15.9861C11.4477 15.9861 11 15.5384 11 14.9861V7.82854L7.75748 11.0711L6.34326 9.65685L12.0001 4L17.657 9.65685L16.2428 11.0711L13 7.82831V14.9861C13 15.5384 12.5523 15.9861 12 15.9861ZM6 14H4V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14H18V18H6V14Z"
      fill="#8F92A1"
    />
  </svg>
);
export default UploadIcon;