import Breadcrumb from "~/components/base/Breadcrumb";
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import InforRepo from "~/components/projects/InforRepo";
import GithubStatistics from "~/components/common/GithubStatistics";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";

import { useRouter } from 'next/router'

import { useEffect } from "react";
import { useGetSummaryInfo } from "~/hooks/api/useSummaryInfo";
import { useGetCommitChart } from "~/hooks/api/useGetCommitChart";
import { useDeveloperChart } from "~/hooks/api/useDeveloperChart";

export default function DetailProjectContainer({ data }) {
    const router = useRouter();
    const { data: dataSummary, refetch: refetchSummary } = useGetSummaryInfo({ chain: data?.id });
    const { data: dataCommitChart, refetch: refetchCommitChart } = useGetCommitChart({ chain: data?.id });
    const { data: dataDeveloperChart, refetch: refetchDeveloperChart } = useDeveloperChart({ chain: data?.id });
    useEffect(() => {
        refetchSummary();
        refetchCommitChart();
        refetchDeveloperChart();
    }, [data])

    return <Container className={styles['container']}>
        <Breadcrumb data={[
            {
                label: 'Projects',
                to: '/projects'
            },
            {
                label: data?.name,
                active: true,
            }
        ]} />
        <InforRepo logo={data?.avatar} name={data?.name} des={data?.description} stars={data?.stats[data?.stats?.length - 1]?.total_star} commits={data?.stats[data?.stats?.length - 1]?.total_commits} github={`https://github.com/${data?.github_prefix}`} web={data?.website} />
        <GithubStatistics data={dataCommitChart?.data} dataTotal={dataSummary?.data} dataDeveloper={dataDeveloperChart?.data} />
        {/* <ActiveDevelopers data={dataDeveloper?.data} /> */}
    </Container>
}