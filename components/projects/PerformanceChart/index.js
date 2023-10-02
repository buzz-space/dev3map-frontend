import React from 'react'
import styles from './styles.module.scss'
import TabDynamic from '~/components/base/TabDynamic'

const PerformanceChart = ({ data }) => {
    console.log(data)
    return (
        <div className={styles['performance-chart']}>
            <h6 className={styles['title']}>OVERALL GITHUB PERFORMANCE</h6>
            <TabDynamic data={[
                {
                    label: 'All'
                },
                {
                    label: '7D',
                },
                {
                    label: '30D'
                }
            ]} />
        </div>
    )
}

export default PerformanceChart