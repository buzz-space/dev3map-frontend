import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Metric from "./Metric";

export default function InforHonorable() {
    return <div className={styles['infor-honorable']}>
        <label className={styles['rank']}>RANK #1</label>
        <div className={styles['repo']}>
            <img src="/imgs/aura.svg" className={styles['logo']} />
            <label className={styles['name']}>Aura Network</label>
            <ArrowUpRight />
        </div>
        <p className={styles['description']}>
            Tirelessly and relentless, these projects have some stubborn warriors that refuse to settle down. Although they might lack man power, they make up for it with sheer amount of commitments and efforts. New features are usually shipped on time, and in some cases, these projects even delivered features that are not included in the roadmap (yet). However, can Quantity beat Quality? Only time knows the answer.
        </p>
        <label className={styles['key-metric']}>KEY METRIC</label>
        <div className={styles['metric']}>
            <Metric label="COMMITS COUNTS" number={4215} />
            <Metric label="PULL REQUEST CLOSED" number={4215} />
            <Metric label="ACTIVE DEVS" number={4215} />
        </div>
    </div>
}