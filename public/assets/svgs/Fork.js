import * as React from 'react';
const SvgFork = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <path
      d="M10 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8m-5 4v4"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFork;
