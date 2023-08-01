import React from 'react'
import styles from './styles.module.scss';
import { useChainRepos } from '~/hooks/api/useChainRepos';
import { Fork, Person, Star } from '~/public/assets/svgs';
import { formatNumber } from '~/utils/number';

const ListRepos = ({ chainId }) => {
    const { data } = useChainRepos({ id: chainId });

    return (
        <div className={styles['list-repos']}>
            <h4 className={styles['title']}>REPOSITORIES ({data?.data?.length})</h4>
            <div className={styles['list']}>
                {
                    data?.data?.map((item, index) => {
                        return <div className={styles['list-item']} key={index}>
                            <h6 className={styles['list-item__title']}>{item?.name}</h6>
                            {
                                item?.description && <p className={styles['list-item__des']}>{item?.description}</p>
                            }
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
                    })
                }
            </div>
        </div>
    )
}

export default ListRepos