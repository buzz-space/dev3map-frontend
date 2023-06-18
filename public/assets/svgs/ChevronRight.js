import * as React from 'react';
const SvgChevronRight = ({ title, titleId, ...props }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-default`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.8 4.1 2.4 2.4-2.4 2.4" stroke={`currentColor`} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgChevronRight;