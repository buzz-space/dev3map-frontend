import Link from 'next/link'
import React from 'react'
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
    }
]

const Navbar = ({ currentPage }) => {
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['nav-ul']}>
                {
                    data?.map((item) => {
                        return <li className={styles['nav-item']}>
                            <Link href={item?.to}>
                                <a className={clsx(styles['nav-item__label'], {
                                    [styles['active']]: currentPage == item?.activeKey,
                                })}>{item?.label}</a>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar