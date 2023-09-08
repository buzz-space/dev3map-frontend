import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const data = [
  {
    to: '/',
    label: 'Home',
    activeKey: 'home',
  },
  {
    to: '/projects',
    label: 'Projects',
    activeKey: 'projects',
  },
  {
    to: '/about',
    label: 'About',
    activeKey: 'about',
  },
];

const Navbar = ({ currentPage }) => {
  return (
    <nav className={styles['navbar']}>
      <ul className={styles['nav-ul']}>
        {data?.map((item) => {
          return (
            <li className={styles['nav-item']}>
              <Link href={item?.to} className={clsx(styles['nav-item__label'], {
                [styles['active']]: currentPage == item?.activeKey,
              })}>

                {item?.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
