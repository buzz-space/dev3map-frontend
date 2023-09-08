import { lazy, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

const Fireflies = lazy(() => import('~/components/base/Fireflies'));

export default function BackgroundLayout({ firelyNumber = 10, width, height }) {
  const [client, setClient] = useState(false);
  // const rainbow = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
  // const [setting, setSetting] = useState({
  //     color: rainbow[0],
  //     count: 50,
  //     size: 4,
  //     blur: 1,
  // });
  // const [index, setIndex] = useState(0);
  // useEffect(() => {
  //     setClient(true);
  //     let id = setInterval(() => {
  //         let indexTemp = index;
  //         setSetting(prev => { return { ...prev, color: rainbow[indexTemp] } })
  //         indexTemp++
  //         if (indexTemp >= rainbow.length) indexTemp = 0;
  //         setIndex(indexTemp);
  //         console.log(setting);
  //     }, 500);
  //     return () => {
  //         clearInterval(id);
  //     }
  // }, [setting])

  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <div className={styles['background-layout']}>
      {client && (
        <Fireflies
          width={width}
          height={height}
          displayFpsStats={false}
          displayParamsChanger={false}
          settings={{
            color: '#FFFFFF',
            count: 50,
            size: 4,
            blur: 1,
          }}
        />
      )}
    </div>
  );
}
