import * as React from 'react';
const SvgXIcon = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#x-icon_svg__a)">
      <path
        d="M14.497 10.157 23.235 0h-2.07l-7.587 8.82L7.518 0H.528l9.164 13.336L.528 23.988H2.6l8.012-9.314 6.4 9.314H24l-9.504-13.83Zm-2.836 3.297-.928-1.328L3.345 1.559h3.18l5.963 8.528.928 1.328 7.75 11.085h-3.18l-6.325-9.046Z"
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id="x-icon_svg__a">
        <path fill="#fff" transform="translate(.528)" d="M0 0h23.472v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgXIcon;
