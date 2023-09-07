import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';

export default function StatisCard({ number, type, date }) {
  return (
    <div className={styles['statis-card']}>
      <label className={styles['number']}>{formatNumber(number)}</label>
      <label className={styles['type']}>{type}</label>
      <label className={styles['date']}>{date}</label>
    </div>
  );
}
