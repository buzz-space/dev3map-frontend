import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { useCategories } from '~/hooks/api/useCategories';
import { formatNumber } from '~/utils/number';
import { useFilterProjects } from '~/context/FilterProjectsContext';
import { useSetting } from '~/hooks/api/useSetting';

// const data = [
//     {
//         label: 'All project',
//         count: 500,
//     },
//     {
//         label: 'Wallet',
//         count: 50,
//     },
//     {
//         label: 'Infrastructure',
//         count: 50,
//     },
//     {
//         label: 'DeFi',
//         count: 50,
//     },
//     {
//         label: 'NFT Marketplace',
//         count: 50,
//     },
//     {
//         label: 'NFT Collection',
//         count: 50,
//     },
//     {
//         label: 'Validator',
//         count: 50,
//     },
//     {
//         label: 'Aggregator',
//         count: 50,
//     },
//     {
//         label: 'Media',
//         count: 50,
//     },
//     {
//         label: 'FinTech',
//         count: 50,
//     }
// ]

export default function FilterBar() {
  const { activeIndex, setActiveIndex } = useFilterProjects();
  const { data } = useCategories();
  const [dataCategories, setDataCategories] = useState([]);
  const { data: totalChain } = useSetting({ key: "total_chain" });
  useEffect(() => { }, [activeIndex]);

  useEffect(() => {
    // const total = data?.data?.reduce((prev, curr) => {
    //   return (prev += curr.total);
    // }, 0);
    const all = { name: 'All projects', total: totalChain?.data?.total_chain };
    const dataIter = data?.data ? data?.data : [];
    if (data?.data) {
      setDataCategories([all, ...dataIter]);
    }
  }, [data]);

  return (
    <div className={styles['filterbar']}>
      {dataCategories?.map((item, index) => {
        return (
          <div
            className={clsx(styles['filter'], {
              [styles['active']]: activeIndex == index,
            })}
            key={index}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {item?.name} ({formatNumber(item?.total)})
          </div>
        );
      })}
    </div>
  );
}
