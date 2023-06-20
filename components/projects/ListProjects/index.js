import Button from "~/components/base/Button";
import GridProject from "./GridProject";
import styles from "./styles.module.scss";
import { useGetChainList } from "~/hooks/api/useChainList";

export default function ListProject() {
    const { data } = useGetChainList();
    const dataGrid = data?.data?.map((item) => {
        return {
            logo: '/imgs/aura.svg',
            name: item?.name,
            to: '/projects/' + item?.id
        }
    })
    console.log(dataGrid);
    return <div className={styles['list-project']}>
        <GridProject title={'Wallet'} numberProject={dataGrid?.length} projects={dataGrid} />
        {/* <GridProject title={'Infrastructure'} numberProject={50} projects={[
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
        ]} /> */}
        <Button outline className={styles['load-more']}>Load More</Button>
    </div>
}