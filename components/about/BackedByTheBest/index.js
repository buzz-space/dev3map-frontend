import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import Container from '~/components/base/Container';

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
    <Container className={styles.container}>
      <h3 className="title">powered by</h3>
      <div className={styles.grid}>
        {data?.map((item) => {
          return (
            <Link href={item?.id ? `/projects/${item?.github_prefix}` : '/'} key={item?.name}>
              <a className={styles.item}>
                <img id={item?.name} className={styles.logo} src={item?.avatar} alt="Logo repo" />
                <label htmlFor={item?.name} className={styles.name}>
                  {item?.name}
                </label>
              </a>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default BackedByTheBest;
