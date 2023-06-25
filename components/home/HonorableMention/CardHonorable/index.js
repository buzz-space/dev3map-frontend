import { ArrowUpRight, Infor } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Button from "~/components/base/Button";
import { useHonorableModal } from "~/context/HonorableModalContext";
import { useRanking } from "~/hooks/api/useRanking";

export default function CardHonorable({ title, logo, name, imgs, des, type = '' }) {
    const { isOpen, setIsOpen, setData } = useHonorableModal();
    const { data } = useRanking({
        type: type,
    }, type)
    function open() {
        setIsOpen(true);
    }
    console.log(data);
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
            <img src={data?.data[0]?.avatar} className={styles['logo']} />
            <label className={styles['name']}>{data?.data[0]?.name}</label>
            <ArrowUpRight />
        </div>
        <Button outline onClick={() => {
            open();
            setData(title, data?.data)
        }}>VIEW MORE</Button>
        <img src={imgs} className={styles['img-bottom-right']} />
    </div>
}