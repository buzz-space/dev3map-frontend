import * as React from 'react';
const SvgPull = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <g clipPath="url(#pull_svg__a)">
      <path
        d="M-15.975-15c0-.539.436-.975.975-.975h54c.538 0 .975.436.975.975v54a.975.975 0 0 1-.975.975h-54a.975.975 0 0 1-.975-.975v-54Z"
        stroke="#D8D4C7"
        strokeWidth={0.05}
      />
      <circle cx={17.5} cy={17.5} r={2} stroke={'currentColor'} />
      <path
        d="M8.5 6.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM17.5 15.5v-7a2 2 0 0 0-2-2H11m0 0 2-2m-2 2 2 2M6.5 8.5v7"
        stroke={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id="pull_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPull;
