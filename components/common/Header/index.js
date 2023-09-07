import Link from 'next/link';
import styles from './styles.module.scss';
import Container from '~/components/base/Container';
import Navbar from './Navbar';
import Image from 'next/image';

export default function Header({ currentPage = '' }) {
  return (
    <header className={styles['header']}>
      <Container className={styles['container']}>
        <Link href="/">
          <a className={styles['logo']}>
            <Image src="/imgs/logo.svg" layout='fill' objectFit='contain' />
          </a>
        </Link>
        <Navbar currentPage={currentPage} />
      </Container>
    </header>
  );
}
