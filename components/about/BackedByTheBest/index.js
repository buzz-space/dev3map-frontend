import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Container from '~/components/base/Container';

import Image from "next/legacy/image";
import { pathImgTemp } from '~/core/contants';

const data = [
    {
        github_prefix: '/',
        avatar: '/imgs/aura.svg',
        name: 'Aura Network',
    },
    {
        github_prefix: '/',
        avatar: '/imgs/github.svg',
        name: 'Github',
    },
    {
        github_prefix: '/',
        avatar: '/imgs/cosmos.svg',
        name: 'Cosmos',
    },
];

const BackedByTheBest = () => {
    return (
        <Container className={styles['container']}>
            <h3 className='title'>powered by</h3>
            <div className={styles['grid']}>
                {
                    data?.map((item, index) => {
                        return <Link href={item?.id ? `/projects/${item?.github_prefix}` : '/'} key={index}>
                            <div className={styles['item']}>
                                <div className={styles['logo']}>
                                    <Image src={item?.avatar || pathImgTemp} alt={item?.name} layout="fill" // required
                                        objectFit="contain" className={styles['logo-img']} />
                                </div>
                                <label className={styles['name']}>{item?.name}</label>
                            </div>
                        </Link>
                    })
                }
            </div>
        </Container>
    )
}

export default BackedByTheBest;
