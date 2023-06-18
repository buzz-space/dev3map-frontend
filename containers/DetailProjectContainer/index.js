import Breadcrumb from "~/components/base/Breadcrumb";
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
export default function DetailProjectContainer() {
    return <Container className={styles['container']}>
        <Breadcrumb data={[
            {
                label: 'Projects',
            },
            {
                label: 'Aura Network',
                active: true,
            }
        ]} />
    </Container>
}