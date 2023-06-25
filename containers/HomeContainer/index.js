import ActiveDevelopers from "~/components/common/ActiveDevelopers";
import GithubStatistics from "~/components/common/GithubStatistics";
import HonorableMention from "~/components/home/HonorableMention";
import Introduce from "~/components/home/Introduce";
import StatisChainTable from "~/components/home/StatisChainTable";
import { useGetCommitInfo } from "~/hooks/api/useCommitInfo";
import { useGetDeveloperInfor } from "~/hooks/api/useGetInfoChain";

function HomeContainer() {
  const { data: dataDeveloper } = useGetDeveloperInfor();
  const { data: dataCommits } = useGetCommitInfo();
  console.log('a', dataCommits)
  return <div>
    <Introduce />
    <HonorableMention />
    <GithubStatistics data={dataCommits?.data} />
    <StatisChainTable />
    <ActiveDevelopers data={dataDeveloper?.data} />
  </div>;
}

export default HomeContainer;
