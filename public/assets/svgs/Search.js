import * as React from 'react';
const SvgSearch = ({ title, titleId, ...props }) => (
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
    <path
      d="M16.927 17.04 20.4 20.4m-1.12-8.96a7.84 7.84 0 1 1-15.68 0 7.84 7.84 0 0 1 15.68 0Z"
      stroke={`currentColor`}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSearch;
