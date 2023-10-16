import { useEffect } from 'react';
import ActiveDevelopers from '~/components/common/ActiveDevelopers';
import GithubStatistics from '~/components/common/GithubStatistics';
import HonorableMention from '~/components/home/HonorableMention';
import Introduce from '~/components/home/Introduce';
import StatisChainTable from '~/components/home/StatisChainTable';
import AnchorPoint from '~/components/projects/AnchorPoint';
import { useDeveloperChart } from '~/hooks/api/useDeveloperChart';
import { useGetCommitChart } from '~/hooks/api/useGetCommitChart';
import { useGetSummaryInfo } from '~/hooks/api/useSummaryInfo';

const dataAnchorHome = [
  {
    label: 'Best of 100',
    to: '#best-of-100',
  },
  {
    label: 'Chains',
    to: '#chains',
  },
  {
    label: 'GitHub Statistics',
    to: '#github-statistics',
  },
  {
    label: 'Activity Trend',
    to: '#activity-trend',
  },
];

function HomeContainer() {
  const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo();
  // const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart();
  const { data: dataDeveloperChart, refetch: refetchDeveloperChart } = useDeveloperChart();
  useEffect(() => {
    refetchSummary();
    refetchDeveloperChart();
  }, []);
  return (
    <div>
      <div style={{ height: '24px' }}></div>
      <AnchorPoint data={dataAnchorHome} title={'Home'} />
      <Introduce />
      <HonorableMention />
      <StatisChainTable />
      <GithubStatistics data={dataDeveloperChart?.data} dataTotal={dataSummary?.data} />
      {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
    </div>
  );
}

export default HomeContainer;
