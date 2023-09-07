import clsx from 'clsx';
import styles from './styles.module.scss';
import { ChevronRight } from '~/public/assets/svgs';
import Link from 'next/link';

export default function Breadcrumb({ data }) {
  return (
    <div className={styles['breadcrumb']}>
      {data?.map((item, index) => {
        return (
          <div
            className={clsx(styles['item'], {
              [styles['active']]: item?.active,
            })}
          >
            {index != '0' ? <ChevronRight /> : <></>}
            {item?.active ? (
              <label>{item?.label}</label>
            ) : (
              <Link href={item?.to || '/'}>
                {item?.label}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
