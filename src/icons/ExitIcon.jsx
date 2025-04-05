import * as React from "react";

const ExitIcon = ({width, height}) => (
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
      d="M4.51465 20H8.51465V18H4.51465V6H8.51465V4H4.51465C3.41008 4 2.51465 4.89543 2.51465 6V18C2.51465 19.1046 3.41008 20 4.51465 20ZM16.3226 17.451L14.7989 19L8 11.9703L14.8568 5L16.3677 6.56216L12.097 10.9035H21.9271C22.5197 10.9035 23 11.3959 23 12.0034C23 12.6109 22.5197 13.1034 21.9271 13.1034H12.1177L16.3226 17.451Z"
      fill=''
    />
  </svg>
);

export default ExitIcon;