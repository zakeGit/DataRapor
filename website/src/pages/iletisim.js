import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const features = [
  {
    title: 'DataRapor® bir Zake Mühendislik ürünüdür',
    imageUrl: 'img/undraw_product_tour_re_8bai.svg',
    description: 'Zake Mühendislik Otomasyon Çevre LTD. ŞTİ.',
  },
  {
    title: 'İletişim',
    imageUrl: 'img/undraw_location_tracking_re_n3ok.svg',
    description: (
      <div>
        <p><strong>Telefon:</strong> 0 312 386 05 77   ||  0 850 466 9253</p>
        <p><strong>Faks:</strong> 0 312 386 05 22</p>
        <div style={{ marginTop: '1px', marginBottom: '1px' }}>
          <p><strong>Merkez</strong></p>
          <p>Uzayçağı Caddesi 62/3-4 Ostim/ANKARA</p>
        </div>
        <div style={{ marginTop: '1px', marginBottom: '1px' }}>
          <p><strong>Istanbul Ofis</strong></p>
          <p>Mevlana Mah. İSTANBUL</p>
        </div>
      </div>
    ),
  },
  {
    title: 'E-Posta',
    imageUrl: 'img/undraw_mail_sent_re_0ofv.svg',
    description: (
      <p><strong>Email:</strong> info@datarapor.com.tr</p>
    ),
  },
];


function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title}/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig: {customFields = {}, tagline} = {}} = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
          
           
          </h1>
          
        </div>
      </div>
   
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;