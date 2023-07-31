import React from 'react'
import styles from './styles.module.scss';
import { formatNumber } from '~/utils/number';

const AnotherBoard = ({ value, label }) => {
    return (
        <div className={styles['another-board']}>
            <label className={styles['value']}>{formatNumber(value || 0)}</label>
            <label className={styles['label']}>{label}</label>
        </div>
    )
}

export default AnotherBoard