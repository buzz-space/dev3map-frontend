import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';

export default function Metric({ label, number, rank, compare = [], title = '', score }) {
  if (compare.includes(title.toLowerCase())) {
    return (
      <div className={styles['metric']}>
        <div className={styles['data']}>
          <label className={styles['label']}>{label}: </label>
          <label className={styles['number']}>{formatNumber(number)}</label>
        </div>
        <div className={styles['rank']}>
          <div className={styles['infor-rank']}>
            <label className={styles['rank-label']}>RANK #{rank}</label>
            <label className={styles['rank-score']}>{score}/100</label>
          </div>
          <div className={styles['rank-progress']}>
            <div className={styles['progress-active']} style={{ width: `${score}%` }}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
