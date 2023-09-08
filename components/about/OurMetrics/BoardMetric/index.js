import React from 'react';
import styles from './styles.module.scss';

const BoardMetric = ({ index, icon, title, color, des }) => {
  return (
    <div className={styles['board-metric']}>
      <span className={styles['icon']} style={{ color: color }}>
        {icon}
      </span>
      <label className={styles['title']}>
        {index + 1}. {title}
      </label>
      <p className={styles['des']}>{des}</p>
    </div>
  );
};

export default BoardMetric;
