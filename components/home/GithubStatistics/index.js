import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import { Github } from "~/public/assets/svgs-title";
import TabDynamic from "~/components/base/TabDynamic";
import TotalCommits from "./TotalCommits";
import ActivityTrend from "./ActivityTrend";

export default function GithubStatistics() {
    return <Container className={styles['container']}>
        <h2 className="title">GITHUB STATISTICS <Github /></h2>
        <div className={styles['information-board']}>
            <TotalCommits />
            <ActivityTrend />
        </div>
    </Container>
}