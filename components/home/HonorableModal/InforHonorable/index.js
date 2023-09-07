import { ArrowUpRight } from '~/public/assets/svgs';
import styles from './styles.module.scss';
import Metric from './Metric';
import Link from 'next/link';
import { useHonorableModal } from '~/context/HonorableModalContext';
import Image from 'next/image';
import { pathImgTemp } from '~/core/contants';

export default function InforHonorable({ data, title, des }) {
  const { setIsOpen } = useHonorableModal();
  return (
    <div className={styles['infor-honorable']}>
      <label className={styles['rank']}>RANK #1</label>

      <Link href={`/projects/${data?.github_prefix}`}>
        <div
          className={styles['repo']}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div className={styles['logo']}>
            <Image src={data?.avatar || pathImgTemp} objectFit='contain' layout='fill' className='rounded-full' />
          </div>
          <label className={styles['name']}>{data?.name}</label>
          <ArrowUpRight />
        </div>
      </Link>
      {des && <p className={styles['description']}>{des}</p>}
      <label className={styles['key-metric']}>KEY METRIC</label>
      <div className={styles['metric']}>
        <Metric
          label="WEEKLY COMMITS COUNTS"
          number={Number(data?.total_commit)}
          rank={data?.commit_rank}
          compare={['seriousness', 'rising star', 'ibc astronauts']}
          title={title}
          score={data?.commit_score}
        />
        <Metric
          label="WEEKLY ISSUE"
          number={Number(data?.total_issue)}
          rank={data?.issue_rank}
          compare={['seriousness', 'ibc astronauts']}
          title={title}
          score={data?.issue_score}
        />
        <Metric
          label="WEEKLY PULL REQUESTS CLOSED"
          number={Number(data?.total_pull_merged)}
          rank={data?.pull_rank}
          compare={['seriousness', 'ibc astronauts']}
          title={title}
          score={data?.pulls_score}
        />
        <Metric
          label="ACTIVE DEVS"
          number={Number(data?.total_developer)}
          rank={data?.dev_rank}
          compare={['seriousness']}
          title={title}
          score={data?.dev_score}
        />
        <Metric
          label="FORK"
          number={Number(data?.total_fork)}
          rank={data?.fork_rank}
          compare={['rising star']}
          title={title}
          score={data?.fork_score}
        />
        {/*<Metric label="STAR" number={Number(data?.total_star)} rank={data?.star_rank} compare={["rising star"]} title={title} score={data?.star_score} />*/}
        <Metric
          label="WEEKLY PULL REQUESTS"
          number={Number(data?.total_pull_request)}
          rank={data?.pr_rank}
          compare={['rising star']}
          title={title}
          score={data?.pr_score}
        />
      </div>
    </div>
  );
}
