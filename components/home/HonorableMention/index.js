import Container from "~/components/base/Container";
import { Honorable } from "~/public/assets/svgs-title";
import styles from "./styles.module.scss";
import CardHonorable from "./CardHonorable";

export default function HonorableMention() {
    const data = [
        {
            title: 'Rising Star',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/1.png',
            des: 'They may be the stars of the Cosmos Ecosystem for a time being. However, as the name suggests, Rising Stars form sturdy foundations that are what newer projects should look up to.',
            type: 'rising_star',
        }, {
            title: 'IBC Astronauts',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/2.png',
            des: 'Tirelessly and relentless, these projects have some stubborn warriors that refuse to be mediocre.',
            type: 'ibc_astronaut',
        }, {
            title: 'SERIOUSNESS',
            logo: '/imgs/aura.svg',
            name: 'Aura Network',
            imgs: '/imgs/honorable/3.png',
            des: 'Take a simple idea and take it seriously.',
            type: 'seriousness',
        }
    ]
    return <Container className={styles['container']}>
        <span className={'description-title'}>THIS WEEK</span>
        <h2 className="title">BEST OF 100 <span><Honorable /></span></h2>
        <div className={styles['list-card']}>
            {
                data?.map((item, index) => {
                    return <CardHonorable key={index} {...item} />
                })
            }
        </div>

    </Container>
}