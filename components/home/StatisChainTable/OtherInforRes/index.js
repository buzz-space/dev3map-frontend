import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';
import clsx from 'clsx';

export default function OtherInforRes({ icon, colorIcon, value, percent, colorPercent }) {
    return <div className={styles['other-infor-res']} style={{ color: colorIcon }}>
        {icon}
        <div className={styles['value']}>
            <label>{formatNumber(value)}</label>
            <label className={clsx(styles['percent'], styles[colorPercent])}>{percent}</label>
        </div>
    </div>
}