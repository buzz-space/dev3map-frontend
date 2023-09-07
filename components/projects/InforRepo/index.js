import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function InforRepo({ logo, name, des, stars, commits, github, web }) {
  return (
    <div className={styles['infor-repo']}>
      <img src={logo} alt="Logo" className={styles['logo']} />
      <div className={styles['information']}>
        <h6 className={styles['name']}>{name}</h6>
        {des && <label className={styles['des']}>{des}</label>}
        <div className={styles['rates-frame']}>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/stars.svg'} layout='fill' objectFit='contain' />
            </div>
            <label className={styles['rate-value']}>{formatNumber(stars)}</label>
          </div>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/commits.svg'} layout='fill' objectFit='contain' />
            </div>
            <label className={styles['rate-value']}>{formatNumber(commits)}</label>
          </div>
        </div>
        <div className={styles['paths-frame']}>
          <div className={styles['path']}>
            <div className={styles['path-icon']}>
              <Image src={'/imgs/github.svg'} layout='fill' objectFit='contain' />
            </div>
            <a href={github} target="_blank" className={styles['path-value']}>
              {github}
            </a>
          </div>
          {web && (
            <div className={styles['path']}>
              <div className={styles['path-icon']}>
                <Image src={'/imgs/web-home.svg'} layout='fill' objectFit='contain' />
              </div>
              <a href={web} target="_blank" className={styles['path-value']}>
                {web}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
