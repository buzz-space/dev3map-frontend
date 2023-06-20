import StatisCard from "./StatisCard";
import styles from "./styles.module.scss";
import { useState, useEffect } from 'react';
export default function StatisListCard({ totalDev = 0, totalFtDev = 0, totalMlDev = 0 }) {
    const [data, setData] = useState(
        [
            {
                number: totalDev,
                type: 'Developers',
                date: 'As of 05 Apr 2023',
            }, {
                number: totalFtDev,
                type: 'Full-time developers',
                date: 'As of 05 Apr 2023',
            }, {
                number: totalMlDev,
                type: 'Monthly active developers',
                date: 'As of 05 Apr 2023'
            }
        ]
    )
    useEffect(() => {
        setData(
            [
                {
                    number: totalDev,
                    type: 'Developers',
                    date: 'As of 05 Apr 2023',
                }, {
                    number: totalFtDev,
                    type: 'Full-time developers',
                    date: 'As of 05 Apr 2023',
                }, {
                    number: totalMlDev,
                    type: 'Monthly active developers',
                    date: 'As of 05 Apr 2023'
                }
            ]
        )
    }, [totalDev, totalFtDev, totalMlDev])
    return <div className={styles['statis-list-card']}>
        {
            data?.map((item, index) => {
                return <StatisCard key={index} {...item} />
            })
        }
    </div>
}