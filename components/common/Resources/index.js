import Slider from 'react-slick';
import Container from '~/components/base/Container';
import styles from './styles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ArrowRight } from '~/public/assets/svgs';
import Button from '~/components/base/Button';
import moment from 'moment';

// const data = [
//   {
//     image: '/imgs/resource/resource_image.png',
//     title: `BREAKING NEWS: NATIVE TETHER USDT IS COMING TO COSMOSMAXIMUM 3 LINES...`,
//     tag: 'Article',
//     date: '05 Apr 2023',
//     slug: '#',
//   },
//   {
//     image: '/imgs/resource/resource_image.png',
//     title: `BREAKING NEWS: NATIVE TETHER USDT IS COMING TO COSMOSMAXIMUM 3 LINES...`,
//     tag: 'Article',
//     date: '05 Apr 2023',
//     slug: '#',
//   },
//   {
//     image: '/imgs/resource/resource_image.png',
//     title: `BREAKING NEWS: NATIVE TETHER USDT IS COMING TO COSMOSMAXIMUM 3 LINES...`,
//     tag: 'Article',
//     date: '05 Apr 2023',
//     slug: '#',
//   },
//   {
//     image: '/imgs/resource/resource_image.png',
//     title: `BREAKING NEWS: NATIVE TETHER USDT IS COMING TO COSMOSMAXIMUM 3 LINES...`,
//     tag: 'Article',
//     date: '05 Apr 2023',
//     slug: '#',
//   },
//   {
//     image: '/imgs/resource/resource_image.png',
//     title: `BREAKING NEWS: NATIVE TETHER USDT IS COMING TO COSMOSMAXIMUM 3 LINES...`,
//     tag: 'Article',
//     date: '05 Apr 2023',
//     slug: '#',
//   },
// ];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block', top: '-60px', right: '24px' }} onClick={onClick}>
      <ArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', top: '-60px', left: 'calc(100% - 72px)' }}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
}

export default function Resources({ data }) {
  const settings = {
    className: styles['resource-slide'],
    centerPadding: '0px',
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (data?.resources.length > 0) {
    return (
      <Container className={styles['container']}>
        <h2 className="title">RESOURCES</h2>
        <Slider {...settings}>
          {data?.resources.map((item, index) => (
            // <div key={index}>
            <div key={index}>
              <Link href={item?.refer_ici || ''} className={styles['item']} target='_blank'>
                <img className={styles['image']} src={item?.image} alt="" />
                <div className={styles['content']}>
                  <h6 className={styles['content__title']}>{item?.name}</h6>
                  <div className={styles['content__footer']}>
                    <span className={styles['tag-info']}>
                      {item?.category} • {moment(item?.created_date).format('DD MMM YYYY')}
                    </span>
                    <ArrowUpRight />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <Button to={data?.refer_ici || ''} outline className={styles['more-info']}>
          <span>MORE ON INTERCHAIN INFO</span>
          <img src="/imgs/inter_chain.png" alt="inter-chain" />
        </Button>
      </Container>
    );
  }
  return <></>;
}
