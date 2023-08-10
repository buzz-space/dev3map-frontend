import React, { useState } from 'react'
import styles from './styles.module.scss';
import { ChevronRight } from '~/public/assets/svgs';
import classNames from 'classnames';

const AccordionFAQ = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={classNames(styles['faq'], {
            [styles['open']]: open
        })}>
            <div className={styles['question']} onClick={() => {
                setOpen(prev => !prev)
            }}>
                <label className={styles['question__label']}>{question}</label>
                <ChevronRight />
            </div>
            <div className={classNames(styles['answer'])}>
                {answer}
            </div>
        </div>
    )
}

export default AccordionFAQ