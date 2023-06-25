import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { useCategories } from "~/hooks/api/useCategories";

// const data = [
//     {
//         label: 'All project',
//         count: 500,
//     },
//     {
//         label: 'Wallet',
//         count: 50,
//     },
//     {
//         label: 'Infrastructure',
//         count: 50,
//     },
//     {
//         label: 'DeFi',
//         count: 50,
//     },
//     {
//         label: 'NFT Marketplace',
//         count: 50,
//     },
//     {
//         label: 'NFT Collection',
//         count: 50,
//     },
//     {
//         label: 'Validator',
//         count: 50,
//     },
//     {
//         label: 'Aggregator',
//         count: 50,
//     },
//     {
//         label: 'Media',
//         count: 50,
//     },
//     {
//         label: 'FinTech',
//         count: 50,
//     }
// ]

export default function FilterBar() {
    const [active, setActive] = useState(0);
    const { data } = useCategories();
    console.log(data)
    useEffect(() => {

    }, [active])
    return <div className={styles['filterbar']}>
        {/* {
            data?.data?.map((item, index) => {
                return <div className={clsx(styles['filter'], {
                    [styles['active']]: active == index,
                })} key={index} onClick={() => {
                    setActive(index);
                }}>{item} ({100})</div>
            })
        } */}
    </div>
}