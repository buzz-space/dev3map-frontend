import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Metric from "./Metric";
import Link from "next/link";
import { useHonorableModal } from "~/context/HonorableModalContext";

export default function InforHonorable({ data, title, des }) {
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
            des && <p className={styles['description']}>
                {des}
            </p>
        }
        <label className={styles['key-metric']}>KEY METRIC</label>
        <div className={styles['metric']}>
            <Metric label="COMMITS COUNTS" number={Number(data?.total_commit)} rank={data?.commit_rank} compare={["seriousness", "ibc astronauts"]} title={title} />
            <Metric label="ISSUE" number={Number(data?.total_issue)} rank={data?.issue_rank} compare={['seriousness']} title={title} />
            <Metric label="PULL REQUEST CLOSED" number={Number(data?.total_pulls)} rank={data?.pull_rank} compare={["seriousness", "ibc astronauts"]} title={title} />
            <Metric label="ACTIVE DEVS" number={Number(data?.total_developer)} rank={data?.dev_rank} compare={["seriousness", "ibc astronauts"]} title={title} />
            <Metric label="FORK" number={Number(data?.total_fork)} rank={data?.fork_rank} compare={["rising star"]} title={title} />
            <Metric label="STAR" number={Number(data?.total_star)} rank={data?.star_rank} compare={["rising star"]} title={title} />
        </div>
    </div>
}