import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Footer() {
  return <footer className={styles['footer']}>
    <Container className={styles['container']}>
      <Link href="/">
        <a className={styles['logo']} ><img src="/imgs/logo.svg" /></a>
      </Link>
      <label className={styles['credit']}>© 2023 Dev3Map</label>
      <div className={styles['powered-by']}>
        <label>POWERED BY</label>
        <img src="/imgs/buzzspace.svg" />
        {/* <a href="https://aura.network" target="_blank"></a> */}
      </div>
    </Container>
  </footer>;
}
