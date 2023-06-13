import * as React from 'react';
const SvgArrowUpRight = ({ title, titleId, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M9.376 7.08h8.522m0 0v8.401m0-8.4-9.9 9.899"
      stroke={`currentColor`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrowUpRight;
