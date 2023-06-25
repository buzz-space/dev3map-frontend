import { formatNumber } from "~/utils/number";
import styles from "./styles.module.scss";

export default function Metric({ label, number }) {
    return <div className={styles['metric']}>
        <label className={styles['label']}>{label}: </label>
        <label className={styles['number']}>{formatNumber(number)}</label>
    </div>
}