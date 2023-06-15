import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import { Developer } from "~/public/assets/svgs-title";
import StatisListCard from "./StatisListCard";
import clsx from "clsx";
import TableStatis from "./TableStatis";
import ChartActiveByType from "./ChartActiveByType";
import ChartActiveAll from "./ChartActiveAll";

export default function ActiveDevelopers() {
    return <Container className={styles['container']}>
        <h2 className={clsx('title', styles['title'])}>Active Developers <Developer /></h2>
        <StatisListCard />
        <div className={styles['charts']}>
            <ChartActiveByType />
            <ChartActiveAll />
        </div>
        <TableStatis />
    </Container>
}