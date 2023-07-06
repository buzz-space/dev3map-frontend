import { formatNumber } from '~/utils/number';
import styles from './styles.module.scss';

export default function OtherInforRes({ icon, colorIcon, value }) {
    return <div className={styles['other-infor-res']} style={{ color: colorIcon }}>
        {icon}
        <label>{formatNumber(value)}</label>
    </div>
}