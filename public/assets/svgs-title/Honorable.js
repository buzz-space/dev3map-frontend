import * as React from 'react';
const SvgHonorable = ({ title, titleId, ...props }) => (
  <svg
    width="48px"
    height="48px"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={`icon-title`}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m21.017 8.16-4.1 10.625L24 40.84m0 0 7.27-22.241L27.355 8.16M24 40.84 4.8 18.972M24 40.84l19.2-21.868m-38.4 0L13.002 8.16h22.182L43.2 18.972m-38.4 0h38.4"
      stroke={`currentColor`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgHonorable;
