export default function IconSort({ direct = '', colorDisable }) {
  return (
    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.28125 9.5H8.71875C9.3875 9.5 9.72188 10.3094 9.25 10.7812L5.53125 14.5C5.2375 14.7938 4.7625 14.7938 4.47188 14.5L0.75 10.7812C0.278125 10.3094 0.6125 9.5 1.28125 9.5Z"
        fill={direct == 'down' ? 'white' : colorDisable || '#2D2D2D'}
      />
      <path
        d="M9.25 6.21873L5.53125 2.49998C5.2375 2.20623 4.7625 2.20623 4.47188 2.49998L2.61094 4.35935L0.75 6.21873C0.278125 6.6906 0.6125 7.49998 1.28125 7.49998H8.71875C9.3875 7.49998 9.72188 6.6906 9.25 6.21873Z"
        fill={direct == 'up' ? 'white' : colorDisable || '#2D2D2D'}
      />
    </svg>
  );
}
