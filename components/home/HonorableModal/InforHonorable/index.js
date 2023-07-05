import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Metric from "./Metric";
import Link from "next/link";
import { useHonorableModal } from "~/context/HonorableModalContext";

export default function InforHonorable({ data }) {
    const { setIsOpen } = useHonorableModal();
    return <div className={styles['infor-honorable']}>
        <label className={styles['rank']}>RANK #1</label>

        <Link href={`/projects/${data?.github_prefix}`}>
            <a className={styles['repo']} onClick={() => {
                setIsOpen(false);
            }}>
                <img src={data?.avatar} className={styles['logo']} />
                <label className={styles['name']}>{data?.name}</label>
                <ArrowUpRight />
            </a>
        </Link>
        {
            data?.description && <p className={styles['description']}>
                {data?.description}
            </p>
        }
        <label className={styles['key-metric']}>KEY METRIC</label>
        <div className={styles['metric']}>
            <Metric label="COMMITS COUNTS" number={Number(data?.total_commit)} />
            <Metric label="PULL REQUEST CLOSED" number={Number(data?.total_pull_request)} />
            <Metric label="ACTIVE DEVS" number={Number(data?.total_developer)} />
        </div>
    </div>
}