import styles from "./styles.module.scss";

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

export default function TableStatis() {
    return <table className={styles['table']}>
        <thead>
            <tr>
                <th>DEV TYPE</th>
                <th>TODAY</th>
                <th>THIS WEEK</th>
                <th>THIS MONTH</th>
                <th>THIS YEAR</th>
                <th>ALL TIME</th>
            </tr>
        </thead>
        <tbody>
            {
                data?.map((item, index) => {
                    return <tr key={index}>
                        <td>{item?.devType}</td>
                        <td>{item?.today}</td>
                        <td>{item?.thisWeek}</td>
                        <td>{item?.thisWeek}</td>
                        <td>{item?.thisYear}</td>
                        <td>{item?.allTime}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}