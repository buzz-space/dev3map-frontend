import React from 'react'
import Container from '~/components/base/Container'
import styles from './styles.module.scss';
import BoardInforHelp from './BoardInforHelp';

const HelpImprove = () => {
    return (
        <Container className={styles['container']}>
            <h3 className='title'>Help us improve this dashboard</h3>
            <div className={styles['board-infor-help']}>
                <BoardInforHelp href="https://buzzspace.sg.larksuite.com/sheets/M6mssVce0hRyKitnjBGloev3gMf?sheet=9N4WQg" des="contribute to our database" name="DEV3MAP.COM INPUTS" />
                <BoardInforHelp href="mailto:hello@dev3map.com" des="Email us about data quality issues" name="HELLO@DEV3MAP.COM" />
            </div>
        </Container>
    )
}

export default HelpImprove