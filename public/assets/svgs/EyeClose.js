import * as React from 'react';
const SvgEyeClose = ({ title, titleId, ...props }) => (
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
      d="M13.125 5.625c5.25.75 8.25 6.375 8.25 6.375s-.75 1.875-2.25 3.375m-3.75 2.25c-9 3-12.75-5.625-12.75-5.625s.75-2.625 4.5-4.875"
      stroke={`currentColor`}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.938 13.624a1.876 1.876 0 0 1-2.144-3.061L12 12l.938 1.624Z"
      fill={`currentColor`}
      stroke={`currentColor`}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5.625 2.625 12.75 18.75"
      stroke={`currentColor`}
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEyeClose;
