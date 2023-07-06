import * as React from 'react';
const SvgCalendar = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#calendar_svg__a)" stroke={'currentColor'} strokeWidth={1.5} strokeMiterlimit={10}>
      <path d="m16.73 6.453-2.285 9.17a1.51 1.51 0 0 1-1.477 1.158H4.063c-1.024 0-1.756-1.003-1.45-1.986l2.853-9.162a1.525 1.525 0 0 1 1.45-1.078h8.336c.644 0 1.18.393 1.403.935.129.292.156.624.074.963Z" />
      <path
        d="M12.71 16.781h3.24c.874 0 1.559-.739 1.498-1.613l-.671-9.23M8.427 5.515l.705-1.862M12.968 5.52l.637-1.871M5.285 7.69h11.057"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendar;
