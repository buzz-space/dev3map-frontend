import * as React from 'react';
const SvgIssue = (props) => (
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
      d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5 1.5 6.201 1.5 12 6.201 22.5 12 22.5Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIssue;
