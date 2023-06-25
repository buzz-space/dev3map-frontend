import Container from "~/components/base/Container"
import styles from "./styles.module.scss"
import clsx from "clsx"

export default function EllipsePlanet() {
    return <div className={styles['ellipse-planet']}>
        {/* <Container className={styles['container-ellipse']}> */}
        <div className={styles['ellipse-1']}>
            < img src="/imgs/planet1.png" className={clsx('planet', styles['planet-1'])} />
            < img src="/imgs/planet2.png" className={clsx('planet reverse', styles['planet-2'])} />
        </div>
        <div className={styles['ellipse-2']}>
            < img src="/imgs/planet3.png" className={clsx('planet', styles['planet-3'])} />
        </div>
    </div>
}