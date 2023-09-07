import { ArrowUpRight } from '~/public/assets/svgs';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useHonorableModal } from '~/context/HonorableModalContext';
import Image from 'next/image';

export default function ListRepo({ list }) {
  const { setIsOpen } = useHonorableModal();
  return (
    <div className={styles['list-repo']}>
      {list?.map((item, index) => {
        return (
          <Link href={`/projects/${item?.github_prefix}`}>
            <div
              className={styles['item']}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <label className={styles['index']}>#{index + 2}</label>
              <div className={styles['repo']}>
                <div className={styles['logo']}>
                  <Image src={item?.avatar || '/'} layout='fill' objectFit='contain' className='rounded-full' />
                </div>
                <label className={styles['name']}>{item?.name}</label>
                <ArrowUpRight />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
