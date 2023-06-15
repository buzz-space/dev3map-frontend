import { CommitHorizontal } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import { formatNumber } from "~/utils/number";

export default function TotalCommits() {
    return <div className={styles['total-commit']}>
        <span className={styles['commit-icon']}>
            <CommitHorizontal />
        </span>
        <label className={styles['total-number']}>{formatNumber(6671728)}</label>
        <label className={styles['des']}>TOTAL COSMOS COMMITS</label>
        <label className={styles['time']}>As of 05 Apr 2023</label>
    </div>
}