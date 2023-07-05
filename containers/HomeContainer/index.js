import { useEffect } from "react";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";
import GithubStatistics from "~/components/common/GithubStatistics";
import HonorableMention from "~/components/home/HonorableMention";
import Introduce from "~/components/home/Introduce";
import StatisChainTable from "~/components/home/StatisChainTable";
import { useGetCommitInfo } from "~/hooks/api/useCommitInfo";
import { useGetDeveloperInfor } from "~/hooks/api/useGetInfoChain";

function HomeContainer() {
  const { data: dataDeveloper, refetch: refetchDeveloper } = useGetDeveloperInfor();
  const { data: dataCommits, refetch: refetchCommits } = useGetCommitInfo();
  useEffect(() => {
    refetchCommits();
    refetchDeveloper();
  }, [])
  return <div>
    {/* <Introduce /> */}
    <HonorableMention />
    <GithubStatistics data={dataCommits?.data} />
    {/* <StatisChainTable />
    <ActiveDevelopers data={dataDeveloper?.data} /> */}
  </div>;
}

export default HomeContainer;
