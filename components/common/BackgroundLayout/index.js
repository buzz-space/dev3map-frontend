import { lazy, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Firely from "./Firely";
import { randomNum } from "~/utils/random";

const Fireflies = lazy(() => import("~/components/base/Fireflies"));

export default function BackgroundLayout({ firelyNumber = 10 }) {
    const bgRef = useRef();
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [client, setClient] = useState(false);
    useEffect(() => {
        let bg = bgRef.current;
        let bounding = bg.getBoundingClientRect();
        let height = bounding.height, width = bounding.width;
        setHeight(height);
        setWidth(width);

        setClient(true);
    }, [])

    return <div ref={bgRef} className={styles['background-layout']}>

        {
            client && <Fireflies width={width} height={height} displayFpsStats={false} displayParamsChanger={false} settings={{
                color: '#FFFFFF',
                count: 50,
                size: 4,
                blur: 1,
            }} />
        }
    </div>
}