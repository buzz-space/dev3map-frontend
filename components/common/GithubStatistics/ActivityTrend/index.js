import TabDynamic from "~/components/base/TabDynamic";
import styles from "./styles.module.scss";
import { Code, Commit } from "~/public/assets/svgs";
import { useEffect, useState } from "react";
// import { userCode, userCommit } from "./data";
import baseCss from '~/public/styles/base.module.scss';

import Chart from "./Chart";
import MentionChart from "./MentionChart";
import Button from "~/components/base/Button";
export default function ActivityTrend({ userCode = [], userCommit = [] }) {
    const [activeTypeStatis, setActiveStatis] = useState(0);
    const [mention, setMention] = useState([{
        color: '#BB86FC',
        label: 'COMMIT',
    }]);

    function getChartData(datas, label) {
        return {
            labels: datas?.map((data) => data.time),
            datasets: [{
                label: label,
                data: datas?.map((data) => data.number),
                backgroundColor: datas?.map((data) => {
                    if (activeTypeStatis === 0) {
                        return '#BB86FC';
                    } else {
                        return data.number >= 0 ? '#03DAC6' : '#CF6679';
                    }
                }),
            }]
        }
    }

    function changeStatisType(datas, label) {
        // setTypeData(datas);
        setData(getChartData(datas, label));
        // setLabel(label)
    }

    const [data, setData] = useState(getChartData(userCommit, 'COMMIT'))

    useEffect(() => {
        if (activeTypeStatis == 0) {
            changeStatisType(userCommit, "COMMIT");
            setMention([{ color: '#BB86FC', label: 'COMMIT' }])
        } else if (activeTypeStatis == 1) {
            changeStatisType(userCode, "CODE");
            setMention([
                {
                    color: '#03DAC6',
                    label: 'ADDITION',
                }, {
                    color: '#CF6679',
                    label: 'DELETION'
                }
            ])
        }
    }, [activeTypeStatis, userCommit, userCode])

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
                    {
                        mention?.map((item, index) => {
                            return <MentionChart color={item?.color} label={item?.label} key={index} />
                        })
                    }
                </div>
            </div>
            <div className={styles['chart']}>
                <Chart data={data} />
            </div>
        </div>
    </div>
}