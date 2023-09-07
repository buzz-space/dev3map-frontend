import TabDynamic from "~/components/base/TabDynamic";
import styles from "./styles.module.scss";
import { Code, Commit } from "~/public/assets/svgs";
import { useEffect, useState } from "react";
// import { userCode, userCommit } from "./data";
import baseCss from '~/public/styles/base.module.scss';

import Chart from "./Chart";
import MentionChart from "./MentionChart";
import Button from "~/components/base/Button";
import { handleMonth } from "~/utils/strings";
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
                labels: datas?.commit?.map((data) => moment(data?.exact_date).format("YYYY/MM")),
                datasets: [{
                    label: 'COMMIT',
                    data: datas?.commit?.map((data) => data.number),
                    labelT: datas?.commit?.map((data, index) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#BB86FC',
                    borderColor: '#BB86FC',
                }, {
                    label: 'ACTIVE DEV',
                    data: datas.dev?.map((data) => data.number),
                    labelT: datas?.dev?.map((data, index) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#03DAC6',
                    borderColor: '#03DAC6',
                }]
            }
        } else {
            return {
                labels: datas.addition?.map((data) => moment(data?.exact_date).format("YYYY/MM")),
                datasets: [{
                    label: 'ADDITION',
                    data: datas.addition?.map((data) => data.number),
                    labelT: datas?.addition.map((data, index) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#03DAC6',
                    borderColor: '#03DAC6',
                }, {
                    label: 'DELETION',
                    data: datas.deletion?.map((data) => data.number),
                    labelT: datas?.deletion?.map((data, index) => moment(data?.exact_date).format("DD-MM-YYYY")),
                    backgroundColor: '#CF6679',
                    borderColor: '#CF6679',
                }]
            }
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
            changeStatisType(userCommitFilter, "COMMIT");
            setMention([{ color: '#BB86FC', label: 'COMMIT' }])
        } else if (activeTypeStatis == 1) {
            changeStatisType(userCodeFilter, "CODE");
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
    }, [activeTypeStatis, userCommitFilter, userCodeFilter])



    useEffect(() => {
        let dataCode = userCode;
        let dataCommit = userCommit;
        let date = moment(process.env.HANDLE_DATE);
        if (indexFilterDate === 1) {
            dataCommit = {
                commit: dataCommit?.commit?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                }),
                dev: dataCommit?.dev?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                })
            }
            dataCode = {
                addition: dataCode?.addition?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                }),
                deletion: dataCode?.deletion?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                })
            }
        } else if (indexFilterDate == 2) {
            dataCommit = {
                commit: dataCommit?.commit?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                }),
                dev: dataCommit?.dev?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 7;
                })
            }
            dataCode = {
                addition: dataCode?.addition?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 30;
                }),
                deletion: dataCode?.deletion?.filter((item) => {
                    const diffInDays = date.diff(item?.exact_date, 'days');
                    return Math.abs(diffInDays) <= 30;
                })
            }
        }

        setUserCodeFilter(dataCode);
        setUserCommitFilter(dataCommit)

    }, [indexFilterDate, userCommit, userCode])

    return <div className={styles['activity-trend']}>
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
            {/* <div className={styles['choose-statis']}>


                <div className={styles['type-statis']}>
                    {
                        mention?.map((item, index) => {
                            return <MentionChart color={item?.color} label={item?.label} key={index} />
                        })
                    }
                </div>
            </div> */}
            {
                activeTypeStatis === 0 ?
                    userCommit?.length === 0 ?
                        <NoData /> :
                        <div className={styles['chart']}>
                            <Chart data={data} />
                        </div>
                    :
                    userCode?.addition?.length === 0 && userCode?.deletion?.length === 0 ?
                        <NoData /> :
                        <div className={styles['chart']}>
                            <Chart data={data} />
                        </div>
            }
        </div>
    </div>
}