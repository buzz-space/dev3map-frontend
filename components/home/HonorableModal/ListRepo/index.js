import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";

export default function ListRepo({ list }) {
    return <div className={styles['list-repo']}>
        {
            list?.map((item, index) => {
                return <div className={styles['item']}>
                    <label className={styles['index']}>#{index + 1}</label>
                    <div className={styles['repo']}>
                        <img src={item?.logo} className={styles['logo']} />
                        <label className={styles['name']}>{item?.name}</label>
                        <ArrowUpRight />
                    </div>
                </div>
            })
        }
    </div>
}