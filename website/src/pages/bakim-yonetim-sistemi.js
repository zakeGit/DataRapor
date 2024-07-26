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
        id="bakim1.title"
        description="Bakım Süreçlerinizi Tek Noktadan Yönetin">
        Bakım Süreçlerinizi Tek Noktadan Yönetin
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="bakim1"
        description="DataRapor®, MMS modulu ile tesisinizdeki tüm bakim faaliyetlerinizi tek bir uygulama üzerinden düzenleyebilir kontrol edebilirsiniz.">
         DataRapor®, MMS modulu ile tesisinizdeki tüm bakim faaliyetlerinizi tek bir uygulama üzerinden düzenleyebilir kontrol edebilirsiniz.
              </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="bakim2.title"
        description="Gelişmiş Dashboard">
        Gelişmiş Dashboard
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="bakim2"
        description="Gelişmiş dashboard sayfası ile tek sayfada  planlanan,bekleyen,çalışılan,biten işlerinizi canlı olarak izleyebilirsiniz">
        {`Gelişmiş dashboard sayfası ile tek sayfada  planlanan,bekleyen,çalışılan,biten işlerinizi canlı olarak izleyebilirsiniz.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="bakim3.title"
        description="Planlı Bakımlarda Otomatik İş emirleri">
        Planlı Bakımlarda Otomatik İş emirleri
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="bakim3"
        description="Planlı veya periyodik bakimlar için iş emirleri ve yedek parça listeleri otomatik olusturulur.">
        {`Planlı veya periyodik bakimlar için iş emirleri ve yedek parça listeleri otomatik olusturulur.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="bakim4.title"
        description="Anlık Süreç Bilgilendirmeleri">
        Anlık Süreç Bilgilendirmeleri
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="bakim4"
        description="İş emri oluşturuldugunda operator , iş başlangıcında,çalışma anında ve iş bitiminde yetkili kişiler sistem tarafından otomatik olarak SMS ve E-Mail ile bilgilendirilir.">
        İş emri oluşturuldugunda operator , iş başlangıcında,çalışma anında ve iş bitiminde yetkili kişiler sistem tarafından otomatik olarak SMS ve E-Mail ile bilgilendirilir.
      </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="bakim5.title"
        description="Bakım yapılacak ekipmanlar için  yedek parca listeleri">
        Bakım yapılacak ekipmanlar için  yedek parca listeleri
      </Translate>
    ),
    imageUrl: 'img/undraw_chore_list_re_2lq8.svg',
    description: (
      <Translate
        id="bakim5"
        description="Bakım anında değişim yapılacak yedek parçalar listesi iş emri olusturuldugunda stok bilgileri ile operator e sunulur.">
        Bakım anında değişim yapılacak yedek parçalar listesi iş emri olusturuldugunda stok bilgileri ile operator e sunulur.

      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="bakim6.title"
        description="Envanter kontrolleri">
        Envanter kontrolleri
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="bakim6"
        description="Treeview altyapısı ile envanteriniz gruplar şeklinde sisteme eklenebilir">
        {`Treeview altyapısı ile envanteriniz gruplar şeklinde sisteme eklenebilir`}
      </Translate>
    ),
  },
   

  {
    title: (
      <Translate
        id="bakim7.title"
        description="İş Raporları">
       İş Raporları
      </Translate>
    ),
    imageUrl: 'img/undraw_at_work_re_qotl.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="bakim7"
        description="Tamamlanan işlerin raporu gunluk veya haftalık olarak yetkililere otomatik olarak gönderilir.">
        {`Tamamlanan işlerin raporu gunluk veya haftalık olarak yetkililere otomatik olarak gönderilir.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="bakim8.title"
        description="Depo Stok Yönetimi">
        Depo Stok Yönetimi
      </Translate>
    ),
    imageUrl: 'img/undraw_empty_cart_co35.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="bakim8"
        description="Bakım anında kullanılan yedek parçalar otomatik olarak depo stoğundan düşülür.Bu sayede anlık stok kontrolu ile sürprizlerle karşılaşmazsınız.">
        {`Bakım anında kullanılan yedek parçalar otomatik olarak depo stoğundan düşülür.Bu sayede anlık stok kontrolu ile sürprizlerle karşılaşmazsınız.`}
      </Translate>
    ),
  },



 


  {
    title: (
      <Translate
        id="bakim9.title"
        description="Vardiya Defteri">
        Vardiya Defteri
      </Translate>
    ),
    imageUrl: 'img/undraw_progress_tracking_re_ulfg.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="bakim9"
        description="Çevrimiçi vardiya defteri ile online olarak vardiya anında karşılaşılan ariza veya bildirimler kayıt altında tutulur,dilediğiniz zaman dışarı aktarılabilir.">
        {`Çevrimiçi vardiya defteri ile online olarak vardiya anında karşılaşılan ariza veya bildirimler kayıt altında tutulur,dilediğiniz zaman dışarı aktarılabilir. `}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="bakim10.title"
        description=" Web Tabanlı Çalışma">
        Web Tabanlı Çalışma
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive_re_e1nn.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="bakim10"
        description="Web tabanlı çalışma altyapısı sayesinde herhangi bir uygulama yüklemeye ihtiyaç duymadan web tarayıcısından sisteme erişilebilir.">
        {`Web tabanlı çalışma altyapısı sayesinde herhangi bir uygulama yüklemeye ihtiyaç duymadan web tarayıcısından sisteme erişilebilir.`}
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
            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/DRImage.png')}
            />
            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  enerji: (<b><Translate>Enerji</Translate></b>),
                  proses: (<b><Translate>Proses</Translate></b>),
                  uretim: (<b><Translate>Üretim</Translate></b>),
                  maint: (<b><Translate>Bakım</Translate></b>),
                  content: (<b className={styles.heroContent}><Translate>Bakım Yönetim Sistemi</Translate></b>)
              }}>
                {`DataRapor  {content} `}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('/docs')}>
              <Translate>Docs</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="https://demo.datarapor.com">
              <Translate>Demo</Translate>
            </Link>
          </div>
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