import * as React from 'react';
const SvgInfor = ({ title, titleId, ...props }) => (
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
      d="M8 8.5v3.2m0-5.572V6.1M1.6 8.5a6.4 6.4 0 1 1 12.8 0 6.4 6.4 0 0 1-12.8 0Z"
      stroke={`currentColor`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgInfor;
