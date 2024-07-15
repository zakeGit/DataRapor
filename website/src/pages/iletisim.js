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
    title: (
      <Translate
        id="srk1.title"
        description=" DataRapor® bir Zake Muhendislik ürünüdür">
        DataRapor® bir Zake Muhendislik ürünüdür
      </Translate>
    ),
    imageUrl: 'img/undraw_product_tour_re_8bai.svg',
    description: (
      <Translate
        id="srk1"
        description="Zake Muhendislik Otomasyon Cevre LTD. ŞTI..">
         Zake Muhendislik Otomasyon Cevre LTD. ŞTI.
              </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="tel2.title"
        description="Gelişmiş Dashboard">
        İletişim
      </Translate>
    ),
    imageUrl: 'img/undraw_location_tracking_re_n3ok.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="tel2"
        description="Tel">
        {`TEL : 0 312 386 0577
        - 
        FAKS :0 312 386 05 22
          



         Adres: Uzayçağı Caddesi 62/3-4 Ostim/ANKARA`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="tel3.title"
        description="Planlı Bakımlarda Otomatik İş emirleri">
        E-Posta
      </Translate>
    ),
    imageUrl: 'img/undraw_mail_sent_re_0ofv.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="tel3"
        description="zake@zake.com.tr">
        {`zake@zake.com.tr`}
      </Translate>
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