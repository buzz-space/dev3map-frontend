import React from 'react';
import styles from './styles.module.scss';

const BackgroundAbout = () => {
  return (
    <div className={styles['background-about']}>
      <img src="/imgs/about-half-circle.png" className={styles['about-half-circle']} />
      <img src="/imgs/about-specify-s.png" className={styles['about-specify-s']} />
      <img src="/imgs/about-circle.png" className={styles['about-circle']} />
      <img src="/imgs/about-specify-v.png" className={styles['about-specify-v']} />
    </div>
  );
};

export default BackgroundAbout;
