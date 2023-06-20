import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import { Developer } from "~/public/assets/svgs-title";
import StatisListCard from "./StatisListCard";
import clsx from "clsx";
import TableStatis from "./TableStatis";
import ChartActiveByType from "./ChartActiveByType";
import ChartActiveAll from "./ChartActiveAll";

export default function ActiveDevelopers({ data = {} }) {
    return <Container className={styles['container']}>
        <h2 className={clsx('title', styles['title'])}>Active Developers <Developer /></h2>
        <StatisListCard totalDev={data?.total_developer} totalFtDev={data?.total_ft_developer} totalMlDev={data?.total_ml_developer} />
        <div className={styles['charts']}>
            <ChartActiveByType data={data?.chart_developer_type} />
            <ChartActiveAll data={data?.chart_all} />
        </div>
        <TableStatis />
    </Container>
}