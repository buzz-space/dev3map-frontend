import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useChainRepos } from '~/hooks/api/useChainRepos';
import { Fork, Person, Star } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';
import Toggle from '~/components/base/Toggle';

const ListRepos = ({ chainId }) => {
  const { data } = useChainRepos({ id: chainId });
  const [isHide, setIsHide] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(data?.data)
  }, [data])

  useEffect(() => {
    if (isHide) {
      setListData(() => {
        return [...data?.data]?.filter((item, index) => {
          return !item?.is_fork
        })
      })
    } else {
      setListData(data?.data)
    }
  }, [isHide])

  return (
    <div className={styles['list-repos']} id='repositories'>
      <h4 className={styles['title']}>REPOSITORIES ({listData?.length})</h4>
      <div className={styles['toggle']}>
        <Toggle setToggle={setIsHide} />
        <label>{isHide ? 'SHOW' : 'HIDE'} FORKED REPOSITORIES </label>
      </div>
      <div className={styles['list']}>
        {listData?.map((item, index) => {
          return (
            <div className={styles['list-item']} key={index}>
              <h6 className={styles['list-item__title']}>{item?.name}</h6>
              {item?.description && <p className={styles['list-item__des']}>{item?.description}</p>}
              <div className={styles['list-item__other-infor']}>
                <div className={styles['another-infor']} style={{ color: '#18A0FB' }}>
                  <Person />
                  <label>{formatNumber(item?.contributors)}</label>
                </div>
                <div className={styles['another-infor']} style={{ color: '#BB86FC' }}>
                  <Star />
                  <label>{formatNumber(item?.total_star)}</label>
                </div>
                <div className={styles['another-infor']} style={{ color: '#03DAC6' }}>
                  <Fork />
                  <label>{formatNumber(item?.total_commit)}</label>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListRepos;
