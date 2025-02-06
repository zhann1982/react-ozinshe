import * as React from "react";

const UsersIcon = ({width, height}) => (
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
      d="M11 7C11 9.20914 9.2091 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3C9.2091 3 11 4.79086 11 7ZM9 7C9 8.10457 8.1046 9 7 9C5.8954 9 5 8.10457 5 7C5 5.89543 5.8954 5 7 5C8.1046 5 9 5.89543 9 7ZM17 11C19.2091 11 21 9.20914 21 7C21 4.79086 19.2091 3 17 3C14.7909 3 13 4.79086 13 7C13 9.20914 14.7909 11 17 11ZM17 9C18.1046 9 19 8.10457 19 7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7C15 8.10457 15.8954 9 17 9ZM20 14C20.5523 14 21 14.4477 21 15V21H23V15C23 13.3431 21.6569 12 20 12H15L16 14H20ZM10 14C10.5523 14 11 14.4477 11 15V21H13V15C13 13.3431 11.6569 12 10 12H4C2.34315 12 1 13.3431 1 15V21H3V15C3 14.4477 3.44772 14 4 14H10Z"
      fill=''
    />
  </svg>
);

export default UsersIcon;