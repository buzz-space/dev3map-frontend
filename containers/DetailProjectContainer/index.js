import Breadcrumb from '~/components/base/Breadcrumb';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import InforRepo from '~/components/projects/InforRepo';
import GithubStatistics from '~/components/common/GithubStatistics';
import ActiveDevelopers from '~/components/common/ActiveDevelopers';

import { useRouter } from 'next/router';

import { useEffect } from 'react';
import { useGetSummaryInfo } from '~/hooks/api/useSummaryInfo';
import { useGetCommitChart } from '~/hooks/api/useGetCommitChart';
import { useDeveloperChart } from '~/hooks/api/useDeveloperChart';
import ListRepos from '~/components/projects/ListRepos';
import TopDevelopers from '~/components/projects/TopDevelopers';
import Resources from '~/components/common/Resources';
import Specifiation from '~/components/common/Specification';

export default function DetailProjectContainer({ data }) {
  const router = useRouter();
  const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo({ chain: data?.id });
  // const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart({ chain: data?.id });
  const { data: dataDeveloperChart, refetch: refetchDeveloperChart } = useDeveloperChart({ chain: data?.id });
  useEffect(() => {
    refetchSummary();
    refetchDeveloperChart();
  }, [data]);

  return (
    <div className={styles['container']}>
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
        <InforRepo
          logo={data?.avatar}
          name={data?.name}
          des={data?.description}
          stars={data?.stats?.total_star}
          commits={data?.stats?.total_commits}
          github={`https://github.com/${data?.github_prefix}`}
          web={data?.website}
        />
        <Specifiation />
      </Container>
      <Resources data={data} />
      <GithubStatistics data={dataDeveloperChart?.data} dataTotal={dataSummary?.data} homePage={false} />
      <Container className={styles['foot-detail']}>
        <ListRepos chainId={data?.id} />
        <TopDevelopers chainId={data?.id} logo={data?.avatar} />
      </Container>
      {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
    </div>
  );
}
