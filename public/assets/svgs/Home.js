import * as React from 'react';
const SvgHome = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#home_svg__a)" stroke={'currentColor'} strokeWidth={1.5}>
      <path d="m3.43 6.035 5.752-3.212a1.667 1.667 0 0 1 1.624 0l5.762 3.212c.568.317.9.935.85 1.584l-.633 8.23a1.667 1.667 0 0 1-1.662 1.54H4.877c-.871 0-1.595-.671-1.662-1.54l-.633-8.23a1.667 1.667 0 0 1 .849-1.584Z" />
      <path d="M12.164 12.043a2.164 2.164 0 1 1-4.328 0 2.164 2.164 0 0 1 4.328 0Z" />
    </g>
    <defs>
      <clipPath id="home_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHome;
