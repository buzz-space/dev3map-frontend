import React from 'react';
import styles from './styles.module.scss';
import { formatNumber } from '~/utils/number';
import { Infor } from '~/public/assets/svgs';

const AnotherBoard = ({ value, label, icon = <></>, des = '' }) => {
  return (
    <div className={styles['another-board']}>
      <span className={styles['icon']}>{icon}</span>
      <label className={styles['value']}>{value}</label>
      <div className={styles['infor']}>
        <label className={styles['label']}>{label}</label>
        <div className={styles['infor-icon']}>
          <Infor />
        </div>
        <div className={styles['des']}>{des}</div>
      </div>
    </div>
  );
};

export default AnotherBoard;
