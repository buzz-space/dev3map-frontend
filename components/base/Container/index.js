import clsx from 'clsx';
import styles from './styles.module.scss';
export default function Container({ children, centerChild = false, className, style = {}, id }) {
  return (
    <div className={`${styles['container']}`} id={id}>
      <div
        className={clsx(className, {
          [styles['center-child']]: centerChild,
        })}
        style={{ ...style }}
      >
        {children}
      </div>
    </div>
  );
}
