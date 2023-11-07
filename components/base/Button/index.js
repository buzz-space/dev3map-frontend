import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';
import { PuffLoader } from "react-spinners";
export default function Button({
  className = '',
  children,
  onClick = function () { },
  style = {},
  to = '',
  disabled,
  outline = false,
  target,
  isLoading = false,
  ...props
}) {
  return (
    <button
      className={clsx(className, styles['btn-primary'], {
        [styles['disabled']]: disabled || isLoading,
        [styles['outline']]: outline,
      })}
      onClick={(e) => {
        onClick(e);
      }}
      style={{
        color: outline,
        borderColor: outline,
        ...style,
      }}
      {...props}
    >
      {
        isLoading ? <PuffLoader color='#fff' size={16} /> :
          <>
            {children}
            {to != '' && (
              <Link href={to} className={styles['link-href']} target={target}>
              </Link>
            )}
          </>
      }
    </button>
  );
}
