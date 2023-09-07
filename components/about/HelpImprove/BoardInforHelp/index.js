import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { ArrowUpRight } from '~/public/assets/svgs';

const BoardInforHelp = ({ des, name, href }) => {
  return (
    <Link href={href || '#'}>
      <a className={styles['board']}>
        <span className={styles['des']}>{des}</span>
        <div className={styles['place-receive']}>
          <label className={styles['name']}>{name}</label>
          <ArrowUpRight />
        </div>
      </a>
    </Link>
  );
};

export default BoardInforHelp;
