import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';
import Image from 'next/image';
import { pathImgTemp } from '~/core/contants';

export default function InforRepo({ logo, name, des, stars, commits, github, web }) {
  return (
    <div className={styles['infor-repo']}>
      <div className={styles['logo']}>
        <Image src={logo || pathImgTemp} alt={name} fill objectFit='contain' className='rounded-full' />
      </div>
      <div className={styles['information']}>
        <h6 className={styles['name']}>{name}</h6>
        {des && <label className={styles['des']}>{des}</label>}
        <div className={styles['rates-frame']}>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/stars.svg'} fill objectFit='contain' alt="Star icon"/>
            </div>
            <label className={styles['rate-value']}>{formatNumber(stars)}</label>
          </div>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/commits.svg'} fill objectFit='contain' alt="Commit icon"/>
            </div>
            <label className={styles['rate-value']}>{formatNumber(commits)}</label>
          </div>
        </div>
        <div className={styles['paths-frame']}>
          <div className={styles['path']}>
            <div className={styles['path-icon']}>
              <Image src={'/imgs/github.svg'} fill objectFit='contain' alt="Github icon"/>
            </div>
            <a href={github} target="_blank" className={styles['path-value']}>
              {github}
            </a>
          </div>
          {web && (
            <div className={styles['path']}>
              <div className={styles['path-icon']}>
                <Image src={'/imgs/web-home.svg'} fill objectFit='contain' alt="Web home icon"/>
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
