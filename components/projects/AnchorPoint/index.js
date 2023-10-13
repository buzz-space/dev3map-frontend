import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const AnchorPoint = ({ data, title }) => {
  return (
    <div className={styles['anchor-point']}>
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
