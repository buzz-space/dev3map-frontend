import React from 'react';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';

const IntroAbout = () => {
  return (
    <Container className={styles['container']}>
      <h1 className={styles['title']}>About Dev3map</h1>
      <p className={styles['description']}>
        <strong>Dev3map.com</strong> is a developer dashboard that provides insights into the activity and contribution
        of developers across the Cosmos ecosystem.This dashboard is a valuable resource for anyone who wants to stay
        up-to-date on the latest developments and activities in the Cosmos ecosystem. Whether you're a developer,
        investor, or simply interested in the future of blockchain technology, <strong>dev3map.com</strong> is a
        must-have tool to track the development potential for any chain in Cosmos Ecosystem.
      </p>
    </Container>
  );
};

export default IntroAbout;
