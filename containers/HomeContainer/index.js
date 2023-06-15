import ActiveDevelopers from "~/components/common/ActiveDevelopers";
import GithubStatistics from "~/components/common/GithubStatistics";
import HonorableMention from "~/components/home/HonorableMention";
import StatisChainTable from "~/components/home/StatisChainTable";

function HomeContainer() {
  return <div>
    <HonorableMention />
    <GithubStatistics />
    <StatisChainTable />
    <ActiveDevelopers />
  </div>;
}

export default HomeContainer;
