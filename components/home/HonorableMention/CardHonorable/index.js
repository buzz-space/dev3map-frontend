import { ArrowUpRight, Infor } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Button from "~/components/base/Button";
import { useHonorableModal } from "~/context/HonorableModalContext";

export default function CardHonorable({ title, logo, name, imgs, des }) {
    const { isOpen, setIsOpen } = useHonorableModal();

    function open() {
        setIsOpen(true);
    }

    return <div className={styles['card-honorable']}>
        <div className={styles['head']}>
            <h4 className={styles['title']}>{title}</h4> {/** uppercase <- */}
            <Infor />
            <div className={styles['des-modal']}>
                {des}
            </div>
        </div>
        <label className={styles['rank']}>RANK #1</label>
        <div className={styles['repo']}>
            <img src={logo} className={styles['logo']} />
            <label className={styles['name']}>{name}</label>
            <ArrowUpRight />
        </div>
        <Button outline onClick={() => {
            open();
        }}>VIEW MORE</Button>
        <img src={imgs} className={styles['img-bottom-right']} />
    </div>
}