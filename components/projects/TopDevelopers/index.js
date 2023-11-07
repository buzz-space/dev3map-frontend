import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useChainDeveloper } from '~/hooks/api/useChainDeveloper';
import { Commit, CommitHorizontal, PullRequest } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';
import IconSort from '~/components/home/StatisChainTable/IconSort';
import Image from "next/legacy/image";
import { pathImgTemp } from '~/core/contants';
import Link from 'next/link';
import clsx from 'clsx';

const TopDevelopers = ({ chainId, logo }) => {
  const { data } = useChainDeveloper({ id: chainId });
  const [dataDev, setDataDev] = useState([]);
  const [directSort, setDirectSort] = useState('');
  function sort() {
    let dt = data?.data;
    if (directSort === 'up') {
      setDirectSort('down');
      dt = dt?.sort((a, b) => {
        return Number(a?.closed) - Number(b?.closed);
      });
    } else {
      setDirectSort('up');
      dt = dt?.sort((a, b) => {
        return Number(b?.closed) - Number(a?.closed);
      });
    }
    setDataDev(dt);
  }
  useEffect(() => {
    setDataDev(data?.data);
  }, [data]);
  return (
    <div className={styles['top-developer']} id='contributors'>
      <h4 className={styles['title']}>CONTRIBUTORS ({data?.data?.length})</h4>
      <div className={styles['sort']} onClick={sort}>
        <label>CONTRIBUTION</label>
        <IconSort direct={directSort} colorDisable="#FFFFFF66" />
      </div>
      <div className={styles['list']}>
        {dataDev?.map((item, index) => {
          return (
            <div key={index} className={styles['list-item']}>
              <Link href={`/developer/${item?.author}`} className='w-max'>
                <div className={clsx(styles['author'], 'cursor-pointer w-max')}>
                  <div className={styles['avatar']}>
                    <Image src={logo || pathImgTemp} alt={item?.author} layout='fill' objectFit='contain' className='rounded-full' />
                  </div>
                  <label className={styles['name']}>{item?.author}</label>
                </div>
              </Link>
              <div className={styles['list-tag']}>
                {item?.repos?.map((item2, index2) => {
                  return (
                    <span key={index2} className={styles['tag']}>
                      {item2}
                    </span>
                  );
                })}
              </div>
              <div className={styles['infor-icons']}>
                <div className={styles['infor-icons__data']}>
                  <CommitHorizontal />
                  <label>{formatNumber(item?.commits)}</label>
                </div>
                <div className={styles['infor-icons__data']}>
                  <PullRequest />
                  <label>{formatNumber(item?.closed)}</label>
                </div>
              </div>

              <div className={styles['pull-merged-request']}>
                <div className={styles['label-pull']}>
                  <span>
                    Pull merged ({formatNumber(item?.closed)})/ pull requests({formatNumber(item?.total)})
                  </span>
                  <span>{Math.round((Number(item?.closed) / Number(item?.total)) * 100)}%</span>
                </div>
                <div className={styles['label-pull-mobile']}>
                  <span>Pull merged ({formatNumber(item?.closed)})/</span>
                  <div className={styles['last-row-pull']}>
                    <span>pull requests({formatNumber(item?.total)})</span>
                    <span>{Math.round((Number(item?.closed) / Number(item?.total)) * 100)}%</span>
                  </div>
                </div>
                <div className={styles['progress']}>
                  <div
                    className={styles['progress-active']}
                    style={{ width: `${Math.round((Number(item?.closed) / Number(item?.total)) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopDevelopers;
