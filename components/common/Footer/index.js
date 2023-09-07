
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return <footer className={styles['footer']}>
    <Container className={styles['container']}>
      <Link href="/">
        <a className={styles['logo']} >
          <Image src="/imgs/logo.svg" layout="fill" objectFit="contain" />
        </a>
      </Link>
      <label className={styles['credit']}>© 2023 Dev3Map</label>
      <div className={styles['powered-by']}>
        <label>POWERED BY</label>
        <div className={styles['buzzspace-logo']}>
          <Image layout="fill" objectFit="contain" src="/imgs/buzzspace.svg" />
        </div>
        {/* <a href="https://aura.network" target="_blank"></a> */}
      </div>
    </Container>
  </footer>;

}
