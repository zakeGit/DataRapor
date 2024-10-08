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
        description="Title ERP-SAP Entegrasyonları">
        ERP-SAP Entegrasyonları
      </Translate>
    ),
    imageUrl: 'img/erp.svg',
    description: (
      <Translate
        id="ent1"
        description="ERP-SAP entegrasyonlarımız sayesinde işletmenizdeki tüm üretim ve enerji verilerini anlık olarak SAP sisteminize entegre ederek verimliliğinizi artırabilir, iş süreçlerinizi optimize edebilir ve maliyetlerinizi düşürebilirsiniz.">
         ERP-SAP entegrasyonlarımız sayesinde işletmenizdeki tüm üretim ve enerji verilerini anlık olarak SAP sisteminize entegre ederek verimliliğinizi artırabilir, iş süreçlerinizi optimize edebilir ve maliyetlerinizi düşürebilirsiniz.  </Translate>
    ),
  },
 
  {
    title: (
      <Translate
        id="ent2.title"
        description="OPC">
        OPC
      </Translate>
    ),
    imageUrl: 'img/opc.jpg',
    description: (
      <Translate
        values={{starters: (<code>starters</code>)}}
        id="ent2"
        description="OPC Client altyapısı bulunan DataRapor® yazılımlarımız, işletmenizde bulunan cihazlarda kullanılan PLC veya modüllerin haberleşme tiplerinden bağımsız olarak çalışabilir.">
        {`OPC Client altyapısı bulunan DataRapor® yazılımlarımız, işletmenizde bulunan cihazlarda kullanılan PLC veya modüllerin haberleşme tiplerinden bağımsız olarak çalışabilir.`}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="ent3.title"
        description="TCP/IP-RTU">
        Modbus TCP/IP-RTU
      </Translate>
    ),
    imageUrl: 'img/undraw_online_connection.svg',
    description: (
      <Translate
        id="ent3"
        description="Modbus TCP/IP veya RTU haberleşme altyapısını kendi bünyesinde taşıyan DataRapor® yazılımlarımız, herhangi bir ek yazılım kullanmadan cihazlarınızla haberleşebilir.">
        Modbus TCP/IP veya RTU haberleşme altyapısını kendi bünyesinde taşıyan DataRapor® yazılımlarımız, herhangi bir ek yazılım kullanmadan cihazlarınızla haberleşebilir. </Translate>
    ),
  },
  {
    title:  (
      <Translate
        id="ent4.title"
        description="Profinet">
        Profinet
      </Translate>
    ),
    imageUrl: 'img/comm.svg',
    description: (
      <Translate
        id="ent4"
        description="Profinet haberleşme altyapısını kendi bünyesinde taşıyan Datarapor® yazılımlarımız ,  herhangi bir ek yazılım kullanmadan cihazlarınız veya makinalarınızla haberleşebilir.">
        Profinet haberleşme altyapısını kendi bünyesinde taşıyan Datarapor® yazılımlarımız ,  herhangi bir ek yazılım kullanmadan cihazlarınız veya makinalarınızla haberleşebilir.</Translate>
    ),
  },
  {
    title: (
      <Translate
        id="ent5.title"
        description="NFC Kart Entegrasyonu">
        NFC Kart Entegrasyonu
      </Translate>
    ),
    imageUrl: 'img/nfc.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent5"
        description="NFC Kart ile işletmelerinizde, operatörleriniz periyodik olarak el ile topladığı verileri, mobil cihazlar yardımı ile verileri hatasız bir şekilde toplayabilirsiniz.">
        {`NFC Kart ile işletmelerinizde, operatörleriniz periyodik olarak el ile topladığı verileri, mobil cihazlar yardımı ile verileri hatasız bir şekilde toplayabilirsiniz.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="ent6.title"
        description="MQTT">
        MQTT
      </Translate>
    ),
    imageUrl: 'img/mqtt.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent6"
        description="MQTT protokolü ile gerçek zamanlı ve güvenli veri aktarımı sağlayarak IoT cihazlarınızdan toplanan verilerinizi anlık olarak izleyebilir ve yönetebilirsiniz.">
        {`MQTT protokolü ile gerçek zamanlı ve güvenli veri aktarımı sağlayarak IoT cihazlarınızdan toplanan verilerinizi anlık olarak izleyebilir ve yönetebilirsiniz.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="ent7.title"
        description="BACNET">
        BACNET
      </Translate>
    ),
    imageUrl: 'img/building.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="ent7"
        description="BACnet protokolü ile bina otomasyon sistemlerinizi entegre ederek enerji verimliliğini artırabilir, tesis yönetimini optimize edebilirsiniz.">
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
