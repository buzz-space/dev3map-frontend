import { formatNumber } from "~/utils/number";
import styles from "./styles.module.scss";

export default function InforRepo({ logo, name, des, stars, commits, github, web }) {
    return <div className={styles['infor-repo']}>
        <img src={logo} alt="Logo" className={styles['logo']} />
        <div className={styles['information']}>
            <h6 className={styles['name']}>{name}</h6>
            <label className={styles['des']}>{des}</label>
            <div className={styles['rates-frame']}>
                <div className={styles['rate']}>
                    <img src={"/imgs/stars.svg"} className={styles['rate-icon']} />
                    <label className={styles['rate-value']}>{formatNumber(stars)}</label>
                </div>
                <div className={styles['rate']}>
                    <img src={"/imgs/commits.svg"} className={styles['rate-icon']} />
                    <label className={styles['rate-value']}>{formatNumber(commits)}</label>
                </div>
            </div>
            <div className={styles['paths-frame']}>
                <div className={styles['path']}>
                    <img src={"/imgs/github.svg"} className={styles['path-logo']} />
                    <a href={github} target="_blank" className={styles['path-value']}>{github}</a>
                </div>
                <div className={styles['path']}>
                    <img src={"/imgs/web-home.svg"} className={styles['path-logo']} />
                    <a href={web} target="_blank" className={styles['path-value']}>{web}</a>
                </div>
            </div>
        </div>
    </div>
}