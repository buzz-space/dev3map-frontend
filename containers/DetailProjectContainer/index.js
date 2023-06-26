import Breadcrumb from "~/components/base/Breadcrumb";
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import InforRepo from "~/components/projects/InforRepo";
import GithubStatistics from "~/components/common/GithubStatistics";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";

import { useRouter } from 'next/router'

import { useEffect } from "react";
import { useGetDeveloperInfor } from "~/hooks/api/useGetInfoChain";
import { useGetCommitInfo } from "~/hooks/api/useCommitInfo";

export default function DetailProjectContainer({ data }) {
    const router = useRouter();
    const { data: dataDeveloper, refetch: refetchDeveloper } = useGetDeveloperInfor({ chain: data?.id })
    const { data: dataCommits, refetch: refetchCommits } = useGetCommitInfo({ chain: data?.id })
    useEffect(() => {
        refetchDeveloper();
        refetchCommits();
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
        <InforRepo logo={data?.avatar} name={data?.name} org={data?.description} stars={data?.total_star} commits={data?.total_commit} github={`https://github.com/${data?.github_prefix}`} web={data?.website} />
        <GithubStatistics data={dataCommits?.data} />
        <ActiveDevelopers data={dataDeveloper?.data} />
    </Container>
}