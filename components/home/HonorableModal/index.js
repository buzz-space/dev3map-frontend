import BackgroundLayout from "~/components/common/BackgroundLayout";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function HonorableModal({ isOpen, setIsOpen }) {

    return <div className={clsx(styles['modal'], {
        [styles['open']]: isOpen,
    })} >
        <div className={styles['backdrop']} onClick={() => {
            setIsOpen(false);
        }}></div>
        <div className={styles['popup']} >

        </div>
    </div>
}