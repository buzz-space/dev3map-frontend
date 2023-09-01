import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import clsx from 'clsx';

const Toggle = ({ setToggle }) => {
    const [isToggle, setIsToggle] = useState(false);

    useEffect(() => {
        setToggle(isToggle);
    }, [isToggle])

    return (
        <label className={clsx(styles["switch"], {
            [styles['active']]: isToggle
        })} onClick={() => {
            setIsToggle(!isToggle);
        }}>
            <span className={clsx(styles["slider"])}></span>
        </label>
    )
}

export default Toggle