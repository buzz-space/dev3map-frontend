import clsx from 'clsx';
import Link from 'next/link';
import styles from './styles.module.scss';
export default function Button({
  className = '',
  children,
  onClick = function () { },
  style = {},
  to = '',
  disabled,
  outline = false,
  target,
  ...props
}) {
  return (
    <button
      className={clsx(className, styles['btn-primary'], {
        [styles['disabled']]: disabled,
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
      {children}
      {to != '' && (
        <Link href={to} className={styles['link-href']} target={target}>
        </Link>
      )}
    </button>
  );
}
