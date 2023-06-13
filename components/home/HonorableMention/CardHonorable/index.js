import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Button from "~/components/base/Button";

export default function CardHonorable({ title, logo, name, imgs }) {
    return <div className={styles['card-honorable']}>
        <h4 className={styles['title']}>{title}</h4> {/** uppercase <- */}
        <label className={styles['rank']}>RANK #1</label>
        <div className={styles['repo']}>
            <img src={logo} className={styles['logo']} />
            <label className={styles['name']}>{name}</label>
            <ArrowUpRight />
        </div>
        <Button outline>VIEW MORE</Button>
        <img src={imgs} className={styles['img-bottom-right']} />
    </div>
}