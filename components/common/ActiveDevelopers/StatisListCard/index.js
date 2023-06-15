import StatisCard from "./StatisCard";
import styles from "./styles.module.scss";
const data = [
    {
        number: 2412,
        type: 'Developers',
        date: 'As of 05 Apr 2023',
    }, {
        number: 530,
        type: 'Full-time developers',
        date: 'As of 05 Apr 2023',
    }, {
        number: 1871,
        type: 'Monthly active developers',
        date: 'As of 05 Apr 2023'
    }
]
export default function StatisListCard() {
    return <div className={styles['statis-list-card']}>
        {
            data?.map((item, index) => {
                return <StatisCard key={index} {...item} />
            })
        }
    </div>
}