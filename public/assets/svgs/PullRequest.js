import * as React from 'react';
const SvgPullRequest = (props) => (
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
      d="M18.5 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke={'currentColor'}
      strokeLinejoin="round"
    />
    <path
      d="M5.5 6v12M12 5h4.5a2 2 0 0 1 2 2v11"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="m15 8-3-3 3-3" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgPullRequest;
