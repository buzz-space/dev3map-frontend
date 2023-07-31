import { useEffect } from "react";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";
import GithubStatistics from "~/components/common/GithubStatistics";
import HonorableMention from "~/components/home/HonorableMention";
import Introduce from "~/components/home/Introduce";
import StatisChainTable from "~/components/home/StatisChainTable";
import { useDeveloperChart } from "~/hooks/api/useDeveloperChart";
import { useGetCommitChart } from "~/hooks/api/useGetCommitChart";
import { useGetSummaryInfo } from "~/hooks/api/useSummaryInfo";

function HomeContainer() {
  const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo();
  const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart();
  const { data: dataDeveloperChart, refetch: refetchDeveloperChart } = useDeveloperChart();
  useEffect(() => {
    refetchSummary();
    refetchCommitChart();
    refetchDeveloperChart();
  }, [])
  return <div>
    <Introduce />
    <HonorableMention />
    <StatisChainTable />
    <GithubStatistics data={dataCommitChart?.data} dataTotal={dataSummary?.data} dataDeveloper={dataDeveloperChart?.data} />
    {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
  </div>;
}

export default HomeContainer;
