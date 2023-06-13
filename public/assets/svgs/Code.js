import * as React from 'react';
const SvgCode = ({ title, titleId, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10 5.167 13.333 8.5 10 11.833m-4 0L2.667 8.5 6 5.167"
      stroke={`currentColor`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCode;
