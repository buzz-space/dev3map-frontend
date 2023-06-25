import { ArrowUpRight } from "~/public/assets/svgs";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useHonorableModal } from "~/context/HonorableModalContext";

export default function ListRepo({ list }) {
    const { setIsOpen } = useHonorableModal();
    return <div className={styles['list-repo']}>
        {
            list?.map((item, index) => {
                return <Link href={`/projects/${item?.id}`}>
                    <a className={styles['item']} onClick={() => {
                        setIsOpen(false);
                    }}><label className={styles['index']}>#{index + 2}</label>
                        <div className={styles['repo']}>
                            <img src={item?.avatar} className={styles['logo']} />
                            <label className={styles['name']}>{item?.name}</label>
                            <ArrowUpRight />
                        </div></a>
                </Link>

            })
        }
    </div>
}