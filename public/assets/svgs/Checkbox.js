import * as React from 'react';
const SvgCheckbox = (props) => (
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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m9 12 2.25 2L15 10" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgCheckbox;
