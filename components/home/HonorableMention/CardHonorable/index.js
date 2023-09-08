import { ArrowUpRight, Infor } from '~/public/assets/svgs';
import styles from './styles.module.scss';
import Button from '~/components/base/Button';
import { useHonorableModal } from '~/context/HonorableModalContext';
import { useRanking } from '~/hooks/api/useRanking';
import Link from 'next/link';
import Image from "next/legacy/image";
import { pathImgTemp } from '~/core/contants';

export default function CardHonorable({ title, logo, name, imgs, des, info, type = '' }) {
  const { isOpen, setIsOpen, setData } = useHonorableModal();
  const { data } = useRanking(
    {
      type: type,
    },
    type
  );
  function open() {
    setIsOpen(true);
  }
  return (
    <div className={styles['card-honorable']}>
      <div className={styles['head']}>
        <h4 className={styles['title']}>{title}</h4> {/** uppercase <- */}
        <Infor />
        <div className={styles['des-modal']}>{des}</div>
      </div>
      <label className={styles['rank']}>RANK #1</label>
      <Link href={`/projects/${data?.data[0]?.github_prefix}`}>
        <div className={styles['repo']}>
          <div className={styles['logo']} >
            <Image src={data?.data[0]?.avatar || pathImgTemp} objectFit='contain' layout='fill' className='rounded-full' alt={data?.data[0]?.name}/>
          </div>
          <label className={styles['name']}>{data?.data[0]?.name}</label>
          <ArrowUpRight />
        </div>
      </Link>

      <Button
        outline
        onClick={() => {
          open();
          setData(title, data?.data, info);
        }}
      >
        VIEW MORE
      </Button>
      <div className={styles['img-bottom-right']} >
        <Image src={imgs} objectFit='contain' layout='fill' alt="Image"/>
      </div>
    </div>
  );
}
