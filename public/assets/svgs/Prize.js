import * as React from 'react';
const SvgPrize = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#prize_svg__a)">
      <path
        d="m5.118 10.082-.775 7.021a.833.833 0 0 0 1.051.895l4.177-1.16c.29-.08.597-.08.887 0l4.274 1.17a.833.833 0 0 0 1.05-.88l-.648-7.046m.505-2.777a5.639 5.639 0 1 1-11.278 0 5.639 5.639 0 0 1 11.278 0Zm-5.64-3.167.913 1.912 2.1.276-1.536 1.459.386 2.083L10 8.858l-1.862 1.01.386-2.083-1.537-1.459 2.1-.276L10 4.138Z"
        stroke={'currentColor'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="prize_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrize;
