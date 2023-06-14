import clsx from "clsx"
import styles from "./styles.module.scss"
import { useEffect, useRef, useState } from "react"

// const data = [
//     {
//         icon: <Commit />,
//         label: 'commit',
//     },
//     {
//         icon: <Code />,
//         label: 'code',
//     }
// ]

export default function TabDynamic({ data = [], setIndexActive = () => { } }) {
    const indicatorRef = useRef();
    const tabRef = useRef();
    const [active, setActive] = useState(0);
    const [tabs, setTabs] = useState([]);
    useEffect(() => {
        if (data?.length > 0) {
            let indicator = indicatorRef.current;
            let tabs = tabRef.current.querySelectorAll('.' + styles['tab-item']);
            setTabs(tabs);
            indicator.style.width = tabs[0].getBoundingClientRect().width + 'px';
            indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + 'px'
            setIndexActive(0);
        }
    }, [])
    useEffect(() => {
        if (tabs) {
            let indicator = indicatorRef.current;
            let tab = tabs[active];
            indicator.style.width = tab?.getBoundingClientRect().width + 'px';
            indicator.style.left = tab?.getBoundingClientRect().left - tab?.parentElement.getBoundingClientRect().left + 'px'
            setIndexActive(active);
        }
    }, [active]);
    function onClick(index) {
        setActive(index);
    }
    return <div ref={tabRef} className={styles['tab-dynamic']}>
        <div ref={indicatorRef} className={styles['active-rounded']}></div>
        {
            data?.map((item, index) => {
                return <button className={clsx(styles['tab-item'], {
                    [styles['active']]: index == active,
                })} onClick={() => onClick(index)} key={index}>{item?.icon}<label>{item?.label}</label></button>
            })
        }
    </div>
}