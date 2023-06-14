import { lazy, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const Fireflies = lazy(() => import("~/components/base/Fireflies"));

export default function BackgroundLayout({ firelyNumber = 10 }) {

    const [client, setClient] = useState(false);
    useEffect(() => {


        setClient(true);
    }, [])

    return <div className={styles['background-layout']}>

        {
            client && <Fireflies displayFpsStats={false} displayParamsChanger={false} settings={{
                color: '#FFFFFF',
                count: 50,
                size: 4,
                blur: 1,
            }} />
        }
    </div>
}