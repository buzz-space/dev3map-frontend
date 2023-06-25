import BackgroundLayout from "~/components/common/BackgroundLayout";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Close } from "~/public/assets/svgs";
import Container from "~/components/base/Container";
import InforHonorable from "./InforHonorable";
import ListRepo from "./ListRepo";

export default function HonorableModal({ isOpen, setIsOpen }) {

    return <div className={clsx(styles['modal'], {
        [styles['open']]: isOpen,
    })} >
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
                    <h6 className={styles['title']}>PRODUCTIVITY</h6>
                    <div className={styles['main']}>
                        <InforHonorable />
                        <ListRepo list={
                            [
                                {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }, {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }, {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }, {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }, {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }, {
                                    logo: '/imgs/cosmos.svg',
                                    name: 'OSMOSIS',
                                }
                            ]
                        } />
                    </div>
                </div>
            </Container>
        </div>
    </div>
}