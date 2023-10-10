import React from 'react'
import styles from "./styles.module.scss";
import Link from 'next/link';

const AnchorPoint = () => {
    return (
        <div className={styles['anchor-point']}>
            <label className={styles['network']}>Aura Network</label>
            <div className={styles['anchor-nav']}>
                {
                    [
                        {
                            label: 'Resources',
                            to: '#resources'
                        },
                        // {
                        //     label: 'Airdrops',
                        //     to: '#airdrops',
                        // },
                        {
                            label: 'GitHub Statistics',
                            to: '#github-statistics'
                        },
                        {
                            label: 'Activity Trend',
                            to: '#activity-trend'
                        },
                        {
                            label: 'Repositories',
                            to: '#repositories'
                        },
                        {
                            label: 'Contributors',
                            to: '#contributors'
                        }
                    ]?.map((item, index) => {
                        return <Link className={styles['anchor-link']} href={item?.to} key={index}>
                            {item?.label}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default AnchorPoint