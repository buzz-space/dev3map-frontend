import TabDynamic from "~/components/base/TabDynamic";
import styles from "./styles.module.scss";
import { Code, Commit } from "~/public/assets/svgs";
import { useEffect, useState, useMemo } from "react";
import Chart from "./Chart";
import NoData from "./NoData";
import moment from "moment";

export default function ActivityTrend({ userCode = [], userCommit = [] }) {
    const [activeTypeStatis, setActiveStatis] = useState(0);
    const [indexFilterDate, setIndexFilterDate] = useState(0);
    const [mention, setMention] = useState([{
        color: '#BB86FC',
        label: 'COMMIT',
    }]);
    const [userCodeFilter, setUserCodeFilter] = useState(userCode);
    const [userCommitFilter, setUserCommitFilter] = useState(userCommit);

    function getChartData(datas, label) {
        if (label === 'COMMIT') {
            return {
                labels: datas?.commit?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                datasets: [{
                    label: 'COMMIT',
                    data: datas?.commit?.map((data) => data.number),
                    labelT: datas?.commit?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#BB86FC',
                    borderColor: '#BB86FC',
                }, {
                    label: 'ACTIVE DEV',
                    data: datas.dev?.map((data) => data.number),
                    labelT: datas?.dev?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#03DAC6',
                    borderColor: '#03DAC6',
                }]
            }
        } else {
            return {
                labels: datas.addition?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                datasets: [{
                    label: 'ADDITION',
                    data: datas.addition?.map((data) => data.number),
                    labelT: datas?.addition?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#03DAC6',
                    borderColor: '#03DAC6',
                }, {
                    label: 'DELETION',
                    data: datas.deletion?.map((data) => data.number),
                    labelT: datas?.deletion?.map((data) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#CF6679',
                    borderColor: '#CF6679',
                }]
            }
        }
    }

    const chartData = useMemo(() => getChartData(userCommit, 'COMMIT'), [userCommit]);

    useEffect(() => {
        if (activeTypeStatis === 0) {
            changeStatisType(userCommitFilter, "COMMIT");
            setMention([{ color: '#BB86FC', label: 'COMMIT' }]);
        } else if (activeTypeStatis === 1) {
            changeStatisType(userCodeFilter, "CODE");
            setMention([
                {
                    color: '#03DAC6',
                    label: 'ADDITION',
                }, {
                    color: '#CF6679',
                    label: 'DELETION'
                }
            ]);
        }
    }, [activeTypeStatis, userCommitFilter, userCodeFilter]);

    useEffect(() => {
        const filterDataByDateCommit = (data, days) => {
            return {
                commit: data?.commit?.filter(item => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= days;
                }),
                dev: data?.dev?.filter(item => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= days;
                }),
            };
        };
        const filterDataByDateCode = (data, days) => {
            return {
                addition: data?.addition?.filter(item => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= days;
                }),
                deletion: data?.deletion?.filter(item => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= days;
                }),
            };
        };

        let dataCode = userCode;
        let dataCommit = userCommit;
        let date = moment(process.env.HANDLE_DATE);

        if (indexFilterDate === 1) {
            dataCommit = filterDataByDateCommit(dataCommit, 7);
            dataCode = filterDataByDateCode(dataCode, 7);
        } else if (indexFilterDate === 2) {
            dataCommit = filterDataByDateCommit(dataCommit, 30);
            dataCode = filterDataByDateCode(dataCode, 30);
        }

        setUserCodeFilter(dataCode);
        setUserCommitFilter(dataCommit);
    }, [indexFilterDate, userCommit, userCode]);

    function changeStatisType(datas, label) {
        setData(getChartData(datas, label));
    }

    const [data, setData] = useState(chartData);

    return (
        <div className={styles['activity-trend']} id='activity-trend'>
            <div className={styles['header']}>
                <h6 className={styles['title']}>Activity Trend</h6>
                <div className={styles['tabs-dynamic']}>
                    <TabDynamic data={[
                        {
                            label: 'Commit',
                            icon: <Commit />,
                        }, {
                            label: 'Code',
                            icon: <Code />,
                        }
                    ]} setIndexActive={setActiveStatis} />
                    <TabDynamic data={[
                        {
                            label: 'All',
                        }, {
                            label: '7D',
                        }, {
                            label: '30D',
                        }
                    ]} setIndexActive={setIndexFilterDate} />
                </div>
            </div>
            <div className={styles['body']}>
                {activeTypeStatis === 0 ?
                    userCommit.length === 0 ?
                        <NoData /> :
                        <div className={styles['chart']}>
                            <Chart data={data} />
                        </div>
                    :
                    userCode.addition.length === 0 && userCode.deletion.length === 0 ?
                        <NoData /> :
                        <div className={styles['chart']}>
                            <Chart data={data} />
                        </div>
                }
            </div>
        </div>
    );
}
