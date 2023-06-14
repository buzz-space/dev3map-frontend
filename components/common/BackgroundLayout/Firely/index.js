import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { randomNum } from "~/utils/random";
export default function Firely({ top = 0, left = 0, height = 0, width = 0 }) {
    const [reset, setReset] = useState(false);
    const firelyRef = useRef();
    useEffect(() => {

    }, []);
    return <div ref={firelyRef} className={styles['firely']} style={{
        top: top,
        left: left,
    }}></div>
}