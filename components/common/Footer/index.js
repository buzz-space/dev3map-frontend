import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Footer() {
  return <footer className={styles['footer']}>
    <Container className={styles['container']}>
      <Link href="/">
        <a className={styles['logo']} ><img src="/imgs/logo.svg" /></a>
      </Link>
      <label className={styles['credit']}>© 2023 ibcLab.io</label>
    </Container>
  </footer>;
}
