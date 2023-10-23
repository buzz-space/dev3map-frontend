import Breadcrumb from '~/components/base/Breadcrumb';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import InforRepo from '~/components/projects/InforRepo';
import GithubStatistics from '~/components/common/GithubStatistics';
import { useEffect } from 'react';
import { useGetSummaryInfo } from '~/hooks/api/useSummaryInfo';
import { useDeveloperChart } from '~/hooks/api/useDeveloperChart';
import ListRepos from '~/components/projects/ListRepos';
import TopDevelopers from '~/components/projects/TopDevelopers';
import Resources from '~/components/common/Resources';
import PerformanceChart from '~/components/projects/PerformanceChart';
import { useGetPerformance } from '~/hooks/api/usePerformance';
import AnchorPoint from '~/components/projects/AnchorPoint';

const dataAnchorProject = [
  {
    label: 'Resources',
    to: '#resources',
  },
  {
    label: 'GitHub Statistics',
    to: '#github-statistics',
  },
  {
    label: 'Activity Trend',
    to: '#activity-trend',
  },
  {
    label: 'Repositories',
    to: '#repositories',
  },
  {
    label: 'Contributors',
    to: '#contributors',
  },
];

export default function DetailProjectContainer({ data }) {
  const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo({ chain: data?.id });
  // const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart({ chain: data?.id });
  const { data: dataDeveloperChart, refetch: refetchDeveloperChart } = useDeveloperChart({ chain: data?.id });
  const { data: dataPerformance, refetch: refetchPerformance } = useGetPerformance({ id: data?.id });

  useEffect(() => {
    refetchSummary();
    refetchDeveloperChart();
    refetchPerformance();
  }, [data]);

  return (
    <div className={styles['container']}>
      <AnchorPoint data={dataAnchorProject} title={data?.name} />
      <Container>
        <Breadcrumb
          data={[
            {
              label: 'Projects',
              to: '/projects',
            },
            {
              label: data?.name,
              active: true,
            },
          ]}
        />
        <div className={styles['infor-head']}>
          <InforRepo
            logo={data?.avatar}
            name={data?.name}
            des={data?.description}
            stars={data?.stats[0]?.total_star}
            commits={data?.stats[0]?.total_commits}
            github={`https://github.com/${data?.github_prefix}`}
            web={data?.website}
            refer_ici={data?.refer_ici}
          />
          <PerformanceChart data={dataPerformance?.data} />
        </div>
      </Container>
      {
        data?.resources && <Resources data={data} />
      }
      <GithubStatistics data={dataDeveloperChart?.data} dataTotal={dataSummary?.data} homePage={false} />
      <Container className={styles['foot-detail']}>
        <ListRepos chainId={data?.id} />
        <TopDevelopers chainId={data?.id} logo={data?.avatar} />
      </Container>
      {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
    </div>
  );
}
