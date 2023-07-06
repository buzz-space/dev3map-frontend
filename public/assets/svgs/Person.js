import * as React from 'react';
const SvgPerson = (props) => (
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
      d="M18.844 7.875c-.138 1.906-1.552 3.375-3.094 3.375-1.542 0-2.959-1.468-3.094-3.375-.14-1.983 1.236-3.375 3.094-3.375 1.858 0 3.234 1.428 3.094 3.375Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 14.25c-3.055 0-5.992 1.517-6.728 4.472-.098.391.147.778.549.778H21.93c.401 0 .645-.387.549-.778-.736-3.002-3.674-4.472-6.729-4.472Z"
      stroke={'currentColor'}
      strokeMiterlimit={10}
    />
    <path
      d="M9.375 8.716c-.11 1.522-1.252 2.722-2.484 2.722s-2.377-1.2-2.485-2.722C4.294 7.132 5.406 6 6.891 6c1.484 0 2.596 1.161 2.484 2.716Z"
      stroke={'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.656 14.344c-.846-.388-1.778-.537-2.765-.537-2.438 0-4.786 1.212-5.375 3.572-.077.312.119.621.44.621h5.263"
      stroke={'currentColor'}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgPerson;
