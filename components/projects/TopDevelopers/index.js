import React from 'react'
import styles from './styles.module.scss';
import { useChainDeveloper } from '~/hooks/api/useChainDeveloper';
import { Commit, CommitHorizontal } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';

const TopDevelopers = ({ chainId, logo }) => {
    const { data } = useChainDeveloper({ id: chainId })
    return (
        <div className={styles['top-developer']}>
            <h4 className={styles['title']}>TOP DEVELOPERS ({data?.data?.length})</h4>
            <div className={styles['list']}>
                {
                    data?.data?.map((item, index) => {
                        return <div key={index} className={styles['list-item']}>
                            <div className={styles['author']}>
                                <img className={styles['avatar']} src={logo} />
                                <label className={styles['name']}>{item?.author}</label>
                            </div>
                            <div className={styles['list-tag']}>
                                {
                                    item?.repos?.map((item2, index2) => {
                                        return <span key={index2} className={styles['tag']}>
                                            {item2}
                                        </span>
                                    })
                                }
                            </div>
                            <div className={styles['commits']}>
                                <CommitHorizontal />
                                <label>{formatNumber(item?.total)}</label>
                            </div>
                            <div className={styles['pull-merged-request']}>
                                <div className={styles['label-pull']}>
                                    <span>Pull merged ({formatNumber(item?.closed)})/ pull requests({formatNumber(item?.total)})</span>
                                    <span>{Number(item?.total) / Number(item?.closed) * 100}%</span>
                                </div>
                                <div className={styles['label-pull-mobile']}>
                                    <span>Pull merged ({formatNumber(item?.closed)})/</span>
                                    <div className={styles['last-row-pull']}>
                                        <span>pull requests({formatNumber(item?.total)})</span>
                                        <span>{Number(item?.total) / Number(item?.closed) * 100}%</span>
                                    </div>
                                </div>
                                <div className={styles['progress']}>
                                    <div className={styles['progress-active']} style={{ width: `${Number(item?.total) / Number(item?.closed) * 100}%` }}></div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TopDevelopers