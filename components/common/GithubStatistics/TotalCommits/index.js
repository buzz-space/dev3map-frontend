import { CommitHorizontal } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import { formatNumber } from "~/utils/number";
import moment from "moment";

export default function TotalCommits({ total = 0 }) {
    const date = moment(new Date()).format("DD MMM YYYY");
    return <div className={styles['total-commit']}>
        <span className={styles['commit-icon']}>
            <CommitHorizontal />
        </span>
        <label className={styles['total-number']}>{formatNumber(total)}</label>
        <label className={styles['des']}>TOTAL COSMOS COMMITS</label>
        <label className={styles['time']}>As of {date}</label>
    </div>
}