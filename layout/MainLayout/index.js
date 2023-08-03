import Head from 'next/head';

import Footer from '~/components/common/Footer';
import Header from '~/components/common/Header';
import Space from '~/components/base/Space';

import styles from './styles.module.scss';
import icon from '~/public/favicon.ico';
// import headerBg from '~/public/imgs/background/header-bg.png';
import ScrollToTop from '~/components/common/ScrollToTop';
import { nameWeb } from '~/core/contants';
import BackgroundLayout from '~/components/common/BackgroundLayout';

export default function MainLayout({ children, title = '', currentPage = '', data = null, meta_data = null }) {
  const titlePage = !!title ? `${nameWeb} - ` + title : nameWeb;

  return (
    <>
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-BDHNFW2Q5M" />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', 'G-BDHNFW2Q5M');",
        }}
      ></script> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3K283PFLYL"></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3K283PFLYL');
          `
      }}>
      </script >
      <script dangerouslySetInnerHTML={{
        __html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3561203,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}>

      </script>
      <Head>
        <title>{titlePage}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content='yes' />
        <meta
          property="og:title"
          content={
            !!meta_data
              ? meta_data?.seo_title
                ? `${nameWeb} - ${meta_data?.seo_title}`
                : `${nameWeb} - ${meta_data?.title}`
              : title === ''
                ? nameWeb
                : `${nameWeb} - ${title}`
          }
        />
        <meta
          property="og:description"
          content={
            !!meta_data
              ? meta_data?.seo_description
                ? `${nameWeb} - ${meta_data?.seo_description}`
                : `${nameWeb} - ${meta_data?.description}`
              : title === ''
                ? nameWeb
                : `${nameWeb} - ${title}`
          }
        />
        <meta property="og:url" content={typeof window != 'undefined' ? window.location.href : ''} />
        <meta property="og:image" content={meta_data ? meta_data?.image : icon.src} />
        <meta
          property="og:tag"
          content={`${meta_data?.tag?.map((item, index) => {
            return item;
          })}`}
        />
        <meta name="og:type" content={!!meta_data ? 'article' : 'website'} />
        <link href="/fonts/fonts.css" rel="stylesheet" type="text/css" />
      </Head>

      <div className={`${styles['body']}`}>
        <BackgroundLayout />
        <main className={styles['main']}>
          <Header currentPage={currentPage} />
          <div className={`${styles['section']}`}>
            {children}
            {/* {cloneElement(children, { isDarkmode: isDarkmode })} */}
          </div>
          <Footer />
          {/* <ScrollToTop /> */}
        </main>
      </div>
    </>
  );
}
