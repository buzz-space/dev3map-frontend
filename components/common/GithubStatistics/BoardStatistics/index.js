import { CommitHorizontal } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import { formatNumber } from "~/utils/number";
import moment from "moment";

export default function BoardStatistics({ total = 0, icon = <></>, colorIcon = '#03DAC6', label = '' }) {
    const date = moment(new Date()).format("DD MMM YYYY");
    return <div className={styles['total-commit']}>
        <span className={styles['commit-icon']} style={{ color: colorIcon }}>
            {icon}
        </span>
        <label className={styles['total-number']}>{formatNumber(total)}</label>
        <label className={styles['des']}>{label}</label>
        <label className={styles['time']}>As of {date}</label>
    </div>
}