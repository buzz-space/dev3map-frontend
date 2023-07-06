import * as React from 'react';
const SvgClose = (props) => (
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
      d="m13.41 12 4.3-4.29a1.004 1.004 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0l4.29-4.3 4.29 4.3a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325L13.41 12Z"
      fill={'currentColor'}
    />
  </svg>
);
export default SvgClose;
