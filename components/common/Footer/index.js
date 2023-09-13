
import Container from "~/components/base/Container";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { XIcon } from "~/public/assets/svgs";

export default function Footer() {
  return <footer className={styles['footer']}>
    <Container className={styles['container']}>
      <Link href="/" className={styles['logo']}>
        <Image src="/imgs/logo.svg" layout="fill" objectFit="contain" />
      </Link>
      <div className={styles['powered-by']}>
        <label>Follow us on</label>
        <a href="https://twitter.com/dev3_map" target="_blank">
          <XIcon />
        </a>
      </div>
    </Container>
    <Container className={styles['container']}>
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
