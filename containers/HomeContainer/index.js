import { useEffect } from "react";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";
import GithubStatistics from "~/components/common/GithubStatistics";
import HonorableMention from "~/components/home/HonorableMention";
import Introduce from "~/components/home/Introduce";
import StatisChainTable from "~/components/home/StatisChainTable";
import { useGetCommitChart } from "~/hooks/api/useGetCommitChart";
import { useGetDeveloperInfor } from "~/hooks/api/useGetInfoChain";
import { useGetSummaryInfo } from "~/hooks/api/useSummaryInfo";

function HomeContainer() {
  const { data: dataDeveloper, refetch: refetchDeveloper } = useGetDeveloperInfor();
  const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo();
  const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart();
  useEffect(() => {
    refetchSummary();
    refetchDeveloper();
    refetchCommitChart();
  }, [])
  return <div>
    <Introduce />
    <HonorableMention />
    <StatisChainTable />
    <GithubStatistics data={dataCommitChart?.data} dataChart={dataSummary?.data} />
    {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
  </div>;
}

export default HomeContainer;
