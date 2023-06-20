import Breadcrumb from "~/components/base/Breadcrumb";
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import InforRepo from "~/components/projects/InforRepo";
import GithubStatistics from "~/components/common/GithubStatistics";
import ActiveDevelopers from "~/components/common/ActiveDevelopers";

import { useRouter } from 'next/router'
import { useGetChainList } from '~/hooks/api/useGetInfoChain';

import { useEffect } from "react";

export default function DetailProjectContainer() {
    const router = useRouter();
    const { data, refetch } = useGetChainList({ chain: router?.query?.slug })

    useEffect(() => {
        refetch();
    }, [router?.query?.slug])

    return <Container className={styles['container']}>
        <Breadcrumb data={[
            {
                label: 'Projects',
            },
            {
                label: 'Aura Network',
                active: true,
            }
        ]} />
        <InforRepo logo={"/imgs/aura.svg"} name={"Aura Network"} org={"Aura"} stars={8563} commits={8563} github={"https://github.com/aura"} web={"https://www.aura.com"} />
        <GithubStatistics />
        <ActiveDevelopers data={data?.data} />
    </Container>
}