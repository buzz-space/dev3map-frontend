import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import { Github } from "~/public/assets/svgs-title";
import TabDynamic from "~/components/base/TabDynamic";
import TotalCommits from "./TotalCommits";
import ActivityTrend from "./ActivityTrend";
import { useEffect, useState } from "react";
import { handleMonth } from "~/utils/strings";

export default function GithubStatistics({ data = {} }) {
    const [userCommit, setUserCommit] = useState([]);
    const [userCode, setUserCode] = useState([]);

    useEffect(() => {
        if (data?.commit_chart) {
            let dataSorted = data?.commit_chart?.sort((a, b) => {
                if (a.year !== b.year) {
                    return a.year - b.year; // Sort by year in ascending order
                } else {
                    return a.month - b.month; // Sort by month in ascending order
                }
            });
            setUserCommit(() => {
                let value = dataSorted.map((item, index) => {
                    return { time: `${item?.year}/${handleMonth(item?.month)}`, number: Number(item?.total_commit), ...item }
                })
                return value;
            })
            setUserCode(() => {
                let value = dataSorted.reduce((prev, curr) => {
                    prev.addition.push({ time: `${curr?.year}/${handleMonth(curr?.month)}`, number: Number(curr?.total_additions), ...curr })
                    prev.deletion.push({ time: `${curr?.year}/${handleMonth(curr?.month)}`, number: Number(curr?.total_deletions) * -1, ...curr })
                    return prev;
                }, { addition: [], deletion: [] })
                return value;
            })
        }
    }, [data])
    return <Container className={styles['container']}>
        <h2 className="title">GITHUB STATISTICS <Github /></h2>
        <div className={styles['information-board']}>
            <TotalCommits total={data?.total_commit} />
            <ActivityTrend userCode={userCode} userCommit={userCommit} />
        </div>
    </Container>
}