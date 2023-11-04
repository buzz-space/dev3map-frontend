import * as React from 'react';
const SvgRatio = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#ratio_svg__a)" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.666 9.333 15.999 4l5.334 5.333" />
      <path d="M16 4v7.192a8.982 8.982 0 0 1-4 7.475 8.983 8.983 0 0 0-4 7.474V28" />
      <path d="M16 4v7.192a8.982 8.982 0 0 0 4 7.475 8.983 8.983 0 0 1 4 7.474V28" />
    </g>
    <defs>
      <clipPath id="ratio_svg__a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRatio;
