import * as React from 'react';
const SvgRepo = (props) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role={'icon-default'}
    {...props}
  >
    <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114" stroke={'currentColor'} strokeLinecap="round" />
    <path d="M15 17v5l2.5-1.6L20 22v-5" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 17h14" stroke={'currentColor'} strokeLinecap="round" />
    <path d="M6 17a2 2 0 1 0 0 4h5.5" stroke={'currentColor'} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default SvgRepo;
