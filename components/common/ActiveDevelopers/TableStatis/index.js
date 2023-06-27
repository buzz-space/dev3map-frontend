import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Infor } from "~/public/assets/svgs";

const data = [
    {
        devType: 'Full-time',
        today: 100,
        thisWeek: 100,
        thisMonth: 100,
        thisYear: 450,
        allTime: 1,
    }, {
        devType: 'Part-time',
        today: 100,
        thisWeek: 100,
        thisMonth: 100,
        thisYear: 450,
        allTime: 1,
    }, {
        devType: 'One-time',
        today: 100,
        thisWeek: 100,
        thisMonth: 100,
        thisYear: 450,
        allTime: 1,
    }, {
        devType: 'Total',
        today: 100,
        thisWeek: 100,
        thisMonth: 100,
        thisYear: 450,
        allTime: 1,
    }
]

export default function TableStatis({ data = {} }) {
    const [dataTable, setDataTable] = useState([])
    console.log(data)
    useEffect(() => {
        setDataTable(() => {
            const dt = [];
            const arrTable = [{
                type: 'full_time',
                name: 'Full-time',
                des: 'Developers who committed code 10+ days a month'
            }, {
                type: 'part_time',
                name: 'Part-time',
                des: 'Developers who committed code less than 10 days a month',
            }, {
                type: 'one_time',
                name: 'One-time',
                des: 'Developers who only committed code once'
            }]
            for (let i = 0; i < 3; i++) {
                let dataTime = data[arrTable[i]?.type];
                let all_time = 0;
                for (let key in dataTime) {
                    all_time += dataTime[key];
                }
                let value = { dev_type: arrTable[i]?.name, ...dataTime, all_time, ...arrTable[i] }
                dt.push(value)
            }
            let total = { dev_type: 'Total', ath: 0, atl: 0, this_month: 0, this_year: 0, all_time: 0 };
            for (let index in dt) {
                const dataLocal = dt[index];
                total.ath += dataLocal?.ath;
                total.atl += dataLocal?.atl;
                total.this_month += dataLocal?.this_month;
                total.this_year += dataLocal?.this_year;
                total.all_time += dataLocal?.all_time;
            }
            dt.push(total);
            return dt
        })
    }, [data])
    return <table className={styles['table']}>
        <thead>
            <tr>
                <th>DEV TYPE</th>
                <th>ATH</th>
                <th>ATL</th>
                <th>THIS MONTH</th>
                <th>THIS YEAR</th>
                <th>ALL TIME</th>
            </tr>
        </thead>
        <tbody>
            {
                dataTable?.map((item, index) => {
                    return <tr key={index}>
                        <td>
                            <div className={styles['type']}>
                                <label>{item?.dev_type}</label>
                                {
                                    item?.des && <>
                                        <Infor />
                                        <div className={styles['description']}>
                                            {
                                                item?.des
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </td>
                        <td>{item?.ath}</td>
                        <td>{item?.atl}</td>
                        <td>{item?.this_month}</td>
                        <td>{item?.this_year}</td>
                        <td>{item?.all_time}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}