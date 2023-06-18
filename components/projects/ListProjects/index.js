import Button from "~/components/base/Button";
import GridProject from "./GridProject";
import styles from "./styles.module.scss";

export default function ListProject() {
    return <div className={styles['list-project']}>
        <GridProject title={'Wallet'} numberProject={50} projects={[
            {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
                to: '/projects/aura-network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }
        ]} />
        <GridProject title={'Infrastructure'} numberProject={50} projects={[
            {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }
        ]} />
        <GridProject title={'DeFi'} numberProject={50} projects={[
            {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }, {
                logo: '/imgs/aura.svg',
                name: 'Aura Network',
            }
        ]} />
        <Button outline className={styles['load-more']}>Load More</Button>
    </div>
}