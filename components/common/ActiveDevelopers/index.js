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
        <StatisListCard totalDev={data?.total_developer} totalFtDev={data?.total_full_time} totalMlDev={Number(data?.total_full_time) + Number(data?.total_part_time)} />
        <div className={styles['charts']}>
            <ChartActiveByType data={data?.developer_chart} />
            <ChartActiveAll data={data?.developer_chart} />
        </div>
        <TableStatis data={data} />
    </Container>
}