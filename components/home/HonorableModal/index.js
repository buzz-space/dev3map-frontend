import BackgroundLayout from "~/components/common/BackgroundLayout";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Close } from "~/public/assets/svgs";
import Container from "~/components/base/Container";
import InforHonorable from "./InforHonorable";
import ListRepo from "./ListRepo";
import { useEffect, useRef } from "react";
import { useHonorableModal } from "~/context/HonorableModalContext";

export default function HonorableModal() {
    const { isOpen, setIsOpen, setData, data, title } = useHonorableModal();
    const modalRef = useRef();
    useEffect(() => {
        if (isOpen) {
            document.querySelector("body").style.overflowY = 'hidden'
        } else {
            document.querySelector("body").style.overflowY = 'auto'
        }
    }, [isOpen])
    useEffect(() => {
        // function resize() {
        //     modalRef.current.innerHTML = modalRef.current.innerHTML;
        // }
        // window.addEventListener('resize', resize);
        // return () => {
        //     window.removeEventListener('resize', resize);
        // }
    }, [])
    return <div className={clsx(styles['modal'], {
        [styles['open']]: isOpen,
    })} ref={modalRef}>
        <div className={styles['backdrop']} onClick={() => {
            setIsOpen(false);
        }}></div>
        <div className={styles['popup']} >
            <Container className={styles['container']}>
                <div className={styles['head']}>
                    <div className={styles['close']} onClick={() => {
                        setIsOpen(false)
                    }}>
                        <Close />
                        <label>Close</label>
                    </div>
                </div>
                <div className={styles['body']}>
                    <h6 className={styles['title']}>{title}</h6>
                    <div className={styles['main']}>
                        <InforHonorable data={data[0]} />
                        <ListRepo list={
                            data?.length > 0 ? data?.slice(1) : []
                        } />
                    </div>
                </div>
            </Container>
        </div>
    </div>
}