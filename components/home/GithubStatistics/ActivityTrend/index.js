import TabDynamic from "~/components/base/TabDynamic";
import styles from "./styles.module.scss";
import { Code, Commit } from "~/public/assets/svgs";
import { useEffect, useState } from "react";
import { userCode, userCommit } from "./data";
import baseCss from '~/public/styles/base.module.scss';

import Chart from "./Chart";
export default function ActivityTrend() {

    const [typeData, setTypeData] = useState(userCommit);
    const [label, setLabel] = useState('COMMIT');
    const [activeTypeStatis, setActiveStatis] = useState(0);

    function getChartData(datas, label) {
        return {
            labels: datas?.map((data) => data.time),
            datasets: [{
                label: label,
                data: datas?.map((data) => data.number),

            }]
        }
    }

    function changeStatisType(datas, label) {
        setTypeData(datas);
        setData(getChartData(datas, label));
        setLabel(label)
    }

    const [data, setData] = useState(getChartData(userCommit, 'COMMIT'))

    useEffect(() => {
        if (activeTypeStatis == 0) {
            changeStatisType(userCommit, "COMMIT");
        } else if (activeTypeStatis == 1) {
            changeStatisType(userCode, "CODE");

        }
    }, [activeTypeStatis])

    return <div className={styles['activity-trend']}>
        <div className={styles['header']}>
            <h6 className={styles['title']}>Activity Trend</h6>
            <TabDynamic data={[
                {
                    label: 'Except fork',
                }, {
                    label: 'Contain fork',

                }
            ]} />
        </div>
        <div className={styles['body']}>
            <div className={styles['choose-statis']}>
                <TabDynamic data={[
                    {
                        label: 'Commit',
                        icon: <Commit />,
                    }, {
                        label: 'Code',
                        icon: <Code />,
                    }

                ]} setIndexActive={setActiveStatis} />

                <div className={styles['type-statis']}>
                    <span className={styles['circle']}></span>
                    <label className={styles['label']}>{label}</label>
                </div>
            </div>
            <div className={styles['chart']}>
                <Chart data={data} />
            </div>
        </div>
    </div>
}