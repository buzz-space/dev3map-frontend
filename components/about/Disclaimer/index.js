import React from 'react';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';

const Disclaimer = () => {
  return (
    <Container className={styles.container}>
      <h3 className="title">Disclaimer</h3>
      <p className={styles.description}>
        The data provided on this website is for informational purposes only and is subject to fraud. It should not be
        solely taken as investment, financial, legal or other advice. Our dashboard is provided for free and we do not
        charge fee for any additional access. By using dev3map.com, you understand that you are using all information
        available here at your own risk. We also disclaim any liability for any loss or damage arising from your use of
        this dashboard.
      </p>
    </Container>
  );
};

export default Disclaimer;
