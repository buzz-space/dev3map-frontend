import * as React from 'react';
const SvgDot = ({ title, titleId, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill={`currentColor`} />
  </svg>
);
export default SvgDot;
