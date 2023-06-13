import { useEffect } from 'react';
import styles from './styles.module.scss';

export default function PopupModal({
  children,
  open,
  onClose,
  centerChild = true,
  alignItems = 'center',
  rightTopChild = false,
}) {
  useEffect(() => {
    if (open) {
      document.querySelector('body').classList.add(styles['body-hidden']);
    } else {
      document.querySelector('body').classList.remove(styles['body-hidden']);
    }
  });
  return (
    <>
      <div
        className={`${styles['popup-modal']} ${centerChild && styles['center-child']} ${open && styles['open']} ${
          rightTopChild && styles['right-top-child']
        }`}
        // style={{ alignItems: alignItems }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {children}
      </div>
    </>
  );
}
