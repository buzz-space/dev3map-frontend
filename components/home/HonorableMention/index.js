import Container from "~/components/base/Container";
import { Honorable } from "~/public/assets/svgs-title";
import styles from "./styles.module.scss";
import CardHonorable from "./CardHonorable";

export default function HonorableMention() {
    const data = [
        {
            title: 'ROLE MODEL',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/1.png',
        }, {
            title: 'PRODUCTIVITY',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/2.png',
        }, {
            title: 'SERIOUSNESS',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/3.png',
        }
    ]
    return <Container className={styles['container']}>
        <h2 className="title">HONORABLE MENTION <span><Honorable /></span></h2>
        <div className={styles['list-card']}>
            {
                data?.map((item, index) => {
                    return <CardHonorable key={index} {...item} />
                })
            }
        </div>
        
    </Container>
}