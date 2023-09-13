import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Image from "next/legacy/image";

export default function EllipsePlanet() {
  return (
    <div className={styles['ellipse-planet']}>
      {/* <Container className={styles['container-ellipse']}> */}
      <div className={styles['ellipse-1']}>
        <div className={clsx('planet', styles['planet-1'])} >
          <Image src="/imgs/planet1.png" layout='fill' objectFit='contain' alt="Planet Dev3Map"/>
        </div>
        <div className={clsx('planet reverse', styles['planet-2'])} >
          <Image src="/imgs/planet2.png" layout='fill' objectFit='contain' alt="Planet Dev3Map"/>
        </div>
      </div>
      <div className={styles['ellipse-2']}>
        <div className={clsx('planet', styles['planet-3'])} >
          <Image src="/imgs/planet3.png" layout='fill' objectFit='contain' alt="Planet Dev3Map"/>
        </div>
      </div>
    </div>
  );
}
