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
        id="ent1.title"
        description="Title of feature of Easy to use on the home page">
        ERP-SAP Entegrasyonları
      </Translate>
    ),
    imageUrl: 'img/erp.svg',
    description: (
      <Translate
        id="ent1"
        description="Feature easy to use">
         ERP-SAP entegrasyonlarımız sayesinde işletmenizdeki tüm üretim ve enerji verilerini anlık olarak SAP sisteminize entegre ederek verimliliğinizi artırabilir, iş süreçlerinizi optimize edebilir ve maliyetlerinizi düşürebilirsiniz.  </Translate>
    ),
  },
 
  {
    title: (
      <Translate
        id="ent2.title"
        description="Title of feature of pluggable and extensible on the home page">
        OPC
      </Translate>
    ),
    imageUrl: 'img/opc.jpg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="ent2"
        description="Feature Pluggable and Extensible">
        {`OPC Client altyapısı bulunan DataRapor® yazılımlarımız, işletmenizde bulunan cihazlarda kullanılan PLC veya modüllerin haberleşme tiplerinden bağımsız olarak çalışabilir.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="ent3.title"
        description="Title of feature of Connect your information on the home page">
        Modbus TCP/IP-RTU
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="ent3"
        description="Feature Connect your information">
        Modbus TCP/IP veya RTU haberleşme altyapısını kendi bünyesinde taşıyan DataRapor® yazılımlarımız, herhangi bir ek yazılım kullanmadan cihazlarınızla haberleşebilir. </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="ent4.title"
        description="Title of feature of Customize easy on the home page">
        Profinet
      </Translate>
    ),
    imageUrl: 'img/comm.svg',
    description: (
      <Translate
        id="ent4"
        description="Feature Customize easy">
        Profinet haberleşme altyapısını kendi bünyesinde taşıyan Datarapor® yazılımlarımız ,  herhangi bir ek yazılım kullanmadan cihazlarınız veya makinalarınızla haberleşebilir.</Translate>
    ),
  },
  {
    title: (
      <Translate
        id="ent5.title"
        description="Title of feature of Powered By on the home page">
        NFC Kart Entegrasyonu
      </Translate>
    ),
    imageUrl: 'img/nfc.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent5"
        description="Powered by Spring Boot with AngularJS">
        {`NFC Kart ile işletmelerinizde, operatörleriniz periyodik olarak el ile topladığı verileri, mobil cihazlar yardımı ile verileri hatasız bir şekilde toplayabilirsiniz.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="ent6.title"
        description="Title of feature of Powered By on the home page">
        MQTT
      </Translate>
    ),
    imageUrl: 'img/mqtt.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent6"
        description="Powered by Spring Boot with AngularJS">
        {`MQTT protokolü ile gerçek zamanlı ve güvenli veri aktarımı sağlayarak IoT cihazlarınızdan toplanan verilerinizi anlık olarak izleyebilir ve yönetebilirsiniz.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="ent7.title"
        description="Title of feature of Powered By on the home page">
        BACNET
      </Translate>
    ),
    imageUrl: 'img/building.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent7"
        description="Powered by Spring Boot with AngularJS">
        {`BACnet protokolü ile bina otomasyon sistemlerinizi entegre ederek enerji verimliliğini artırabilir, tesis yönetimini optimize edebilirsiniz.`}
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
                  content: (<b className={styles.heroContent}><Translate>Entegrasyon</Translate></b>)
              }}>
                {`DataRapor  {content} `}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/')}>
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
