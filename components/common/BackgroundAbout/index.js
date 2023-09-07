import React from 'react'
import styles from './styles.module.scss';
import Image from 'next/image';

const BackgroundAbout = () => {
    return (
        <div className={styles['background-about']}>
            <div className={styles['about-half-circle']}>
                <Image src="/imgs/about-half-circle.png" layout='fill' objectFit='contain' />
            </div>
            <div className={styles['about-specify-s']}>
                <Image src="/imgs/about-specify-s.png" layout='fill' objectFit='contain' />
            </div>
            <div className={styles['about-circle']}>
                <Image src="/imgs/about-circle.png" layout='fill' objectFit='contain' />
            </div>
            <div className={styles['about-specify-v']}>
                <Image src="/imgs/about-specify-v.png" layout='fill' objectFit='contain' />
            </div>
        </div>
    )
}

export default BackgroundAbout