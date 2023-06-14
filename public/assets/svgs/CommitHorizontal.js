import * as React from 'react';
const SvgCommitHorizontal = ({ title, titleId, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M40 32a8 8 0 0 1-16 0m16 0a8 8 0 0 0-16 0m16 0h16m-32 0H8"
      stroke={`currentColor`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCommitHorizontal;
