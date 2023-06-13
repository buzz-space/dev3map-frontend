import * as React from 'react';
const SvgPlus = ({ title, titleId, ...props }) => (
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
    <path d="M12 20v-8m0 0V4m0 8h8m-8 0H4" stroke={`currentColor`} strokeWidth={2} strokeLinecap="round" />
  </svg>
);
export default SvgPlus;
