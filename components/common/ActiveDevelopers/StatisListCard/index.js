import moment from 'moment';
import StatisCard from './StatisCard';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
export default function StatisListCard({ totalDev = 0, totalFtDev = 0, totalMlDev = 0 }) {
  const date = moment(new Date()).format('DD MMM YYYY');
  const [data, setData] = useState([
    {
      number: totalDev,
      type: 'Developers',
      date: `As of ${date}`,
    },
    {
      number: totalFtDev,
      type: 'Full-time developers',
      date: `As of ${date}`,
    },
    {
      number: totalMlDev,
      type: 'Active developers',
      date: `As of ${date}`,
    },
  ]);
  useEffect(() => {
    setData([
      {
        number: totalDev,
        type: 'Developers',
        date: `As of ${date}`,
      },
      {
        number: totalFtDev,
        type: 'Full-time developers',
        date: `As of ${date}`,
      },
      {
        number: totalMlDev,
        type: 'Active developers',
        date: `As of ${date}`,
      },
    ]);
  }, [totalDev, totalFtDev, totalMlDev]);
  return (
    <div className={styles['statis-list-card']}>
      {data?.map((item, index) => {
        return <StatisCard key={index} {...item} />;
      })}
    </div>
  );
}
