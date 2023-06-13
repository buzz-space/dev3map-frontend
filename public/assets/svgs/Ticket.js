import * as React from 'react';
const SvgTicket = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a1 1 0 0 1 2 0h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2a1 1 0 0 1-2 0Zm1 5.001a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v.001a1 1 0 0 0 1 1Zm1 3a1 1 0 0 1-2 0V12a1 1 0 0 1 2 0v.001Zm-1 5a1 1 0 0 0 1-1V16a1 1 0 0 0-2 0v.001a1 1 0 0 0 1 1ZM6 11a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H6Zm0 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2H6Z"
      fill={props.color}
    />
  </svg>
);
export default SvgTicket;
