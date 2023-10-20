import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRef } from 'react';

const AnchorPoint = ({ data, title }) => {

  const ref = useRef();

  useEffect(() => {
    function scroll() {
      const el = ref.current;
      if (window.scrollY > 50) {
        el.style.visibility = "visible";
        el.style.opacity = "1";
        el.style.position = "fixed";
      } else {
        el.style.visibility = "hidden";
        el.style.opacity = "0";
        el.style.position = "absolute";
      }
    }
    window.addEventListener('scroll', scroll);
    scroll();
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div className={styles['anchor-point']} ref={ref}>
      <label className={styles['network']}>{title}</label>
      <div className={styles['anchor-nav']}>
        {data?.map((item, index) => {
          return (
            <Link className={styles['anchor-link']} href={item?.to} key={index}>
              {item?.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AnchorPoint;
