import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';
import Image from "next/legacy/image";
import { pathImgTemp } from '~/core/contants';
import Button from '~/components/base/Button';

export default function InforRepo({ logo, name, des, stars, commits, github, web, refer_ici }) {
  return (
    <div className={styles['infor-repo']}>
      <img src={logo || pathImgTemp} alt={name} className={styles['logo']} />
      <div className={styles['information']}>
        <h6 className={styles['name']}>{name}</h6>
        {des && <div className={styles['des']} dangerouslySetInnerHTML={{ __html: des }} ></div>}
        <Button className={styles['btn']} to={refer_ici} target="_blank">READ MORE ON
          <img src='/imgs/icon-interchain.svg' />
        </Button>
        <div className={styles['rates-frame']}>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/stars.svg'} layout='fill' objectFit='contain' alt="Star icon" />
            </div>
            <label className={styles['rate-value']}>{formatNumber(stars)}</label>
          </div>
          <div className={styles['rate']}>
            <div className={styles['rate-icon']}>
              <Image src={'/imgs/commits.svg'} layout='fill' objectFit='contain' alt="Commit icon" />
            </div>
            <label className={styles['rate-value']}>{formatNumber(commits)}</label>
          </div>
        </div>
        <div className={styles['paths-frame']}>
          <div className={styles['path']}>
            <div className={styles['path-icon']}>
              <Image src={'/imgs/github.svg'} layout='fill' objectFit='contain' alt="Github icon" />
            </div>
            <a href={github} target="_blank" className={styles['path-value']}>
              {github}
            </a>
          </div>
          {web && (
            <div className={styles['path']}>
              <div className={styles['path-icon']}>
                <Image src={'/imgs/web-home.svg'} layout='fill' objectFit='contain' alt="Web home icon" />
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
