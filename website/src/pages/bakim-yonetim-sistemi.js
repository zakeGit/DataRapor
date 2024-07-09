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
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        Bakım Süreçlerinizi Tek Noktadan Yönetin
      </Translate>
    ),
    imageUrl: 'img/undraw_just_browsing.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
         DataRapor®, MMS modulu ile tesisinizdeki tüm bakım faaliyetlerinizi tek bir uygulama üzerinden düzenleyebilir kontrol edebilirsiniz.
              </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        Gelişmiş Dashboard
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {`Gelişmiş dashboard sayfası ile tek sayfada  planlanan,bekleyen,çalışılan,biten işlerinizi canlı olarak izleyebilirsiniz.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="Title of feature of pluggable and extensible on the home page">
        Planlı Bakımlarda Otomatik İş emirleri
      </Translate>
    ),
    imageUrl: 'img/undraw_switches.svg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="homepage.features.pluggable-extensible"
        description="Feature Pluggable and Extensible">
        {`Planlı veya periyodik bakımlar için iş emirleri ve yedek parça listeleri otomatik olusturulur.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        Anlık Süreç Bilgilendirmeleri
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        İş emri oluşturuldugunda operator , iş başlangıcında,çalışma anında ve iş bitiminde yetkili kişiler sistem tarafından otomatik olarak SMS ve E-Mail ile bilgilendirilir.
      </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
        Bakım yapılacak ekipmanlar için  yedek parca listeleri
      </Translate>
    ),
    imageUrl: 'img/undraw_chore_list_re_2lq8.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        Bakım anında değişim yapılacak yedek parçalar listesi iş emri olusturuldugunda stok bilgileri ile operator e sunulur.

      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Envanter kontrolleri
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Treeview altyapısı ile envanteriniz gruplar şeklinde sisteme eklenebilir`}
      </Translate>
    ),
  },
   

  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
       İş Raporları
      </Translate>
    ),
    imageUrl: 'img/undraw_at_work_re_qotl.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Tamamlanan işlerin raporu gunluk veya haftalık olarak yetkililere otomatik olarak gönderilir.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Depo Stok Yönetimi
      </Translate>
    ),
    imageUrl: 'img/undraw_empty_cart_co35.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Bakım anında kullanılan yedek parçalar otomatik olarak depo stoğundan düşülür.Bu sayede anlık stok kontrolu ile sürprizlerle karşılaşmazsınız.`}
      </Translate>
    ),
  },



 


  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Vardiya Defteri
      </Translate>
    ),
    imageUrl: 'img/undraw_progress_tracking_re_ulfg.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
        {`Çevrimiçi vardiya defteri ile online olarak vardiya anında karşılaşılan ariza veya bildirimler kayıt altında tutulur,dilediğiniz zaman dışarı aktarılabilir. `}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Web Tabanlı Çalışma
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive_re_e1nn.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="homepage.features.powered-by"
        description="Powered by Spring Boot with AngularJS">
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
              <Translate>Göz At</Translate>
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