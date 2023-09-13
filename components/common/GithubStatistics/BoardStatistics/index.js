import { CommitHorizontal, Infor } from '~/public/assets/svgs';
import styles from './styles.module.scss';
import { formatNumber } from '~/utils/number';
import moment from 'moment';

export default function BoardStatistics({ total = 0, icon = <></>, colorIcon = '#03DAC6', label = '', des = '' }) {
  const date = moment(process.env.HANDLE_DATE).format('DD MMM YYYY');
  return (
    <div className={styles['total-commit']}>
      <span className={styles['commit-icon']} style={{ color: colorIcon }}>
        {icon}
      </span>
      <label className={styles['total-number']}>{formatNumber(total)}</label>
      <div className={styles['infor']}>
        <label className={styles['label']}>{label}</label>
        <div className={styles['infor-icon']}>
          <Infor />
        </div>
        <div className={styles['des']}>{des}</div>
      </div>
      {/* <label className={styles['des']}>{label}</label> */}
      <label className={styles['time']}>As of {date}</label>
    </div>
  );
}
