import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

export default function EllipsePlanet() {
  return (
    <div className={styles['ellipse-planet']}>
      {/* <Container className={styles['container-ellipse']}> */}
      <div className={styles['ellipse-1']}>
        <div className={clsx('planet', styles['planet-1'])} >
          <Image src="/imgs/planet1.png" layout='fill' objectFit='contain' />
        </div>
        <div className={clsx('planet reverse', styles['planet-2'])} >
          <Image src="/imgs/planet2.png" layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles['ellipse-2']}>
        <div className={clsx('planet', styles['planet-3'])} >
          <Image src="/imgs/planet3.png" layout='fill' objectFit='contain' />
        </div>
      </div>
    </div>
  );
}
