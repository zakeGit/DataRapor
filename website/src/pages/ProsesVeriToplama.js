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
        id="pvt1.title"
        description="Title of feature of Easy to use on the home page">
          

          Tüm proses verilerinizi tek noktadan izleyin
      </Translate>
    ),
  
    imageUrl: 'img/undraw_electricity.svg',
    description: (
      <Translate
        id="pvt1"
        description="Feature easy to use">
          
          DataRapor® proses veri toplama modulu ile , tesisinizdeki proses verilerinizi kullanıcı dostu arayüzü ile  
         parametre, lokasyon ya da cihaz bazında izleyebilirsiniz.
        
      </Translate>
    ),
  },

 
 
 


  {
    title: (
      <Translate
        id="pvt2.title"
        description="Title of feature of Modern UI on the home page">
        Anlık veri izleme
      </Translate>
    ),
    imageUrl: 'img/undraw_real_time.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="pvt2"
        description="Modern UI">
        {`
         Sahadan çekilen anlık veriler sistemde gecikmesiz gösterilir 
         ve anlık olarak Sıcaklık, basınç, nem, debi, hava hızı, TOC, iletkenlik, PH, O2, CO, SO2, NO, TOZ ve benzeri proses bilgileri görüntülenebilir.        
        
        
        `}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="pvt3.title"
        description="Title of feature of Powered By on the home page">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/undraw_setup_analytics_re_foim.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt3"
        description="Powered by Spring Boot with AngularJS">
        {`Tüm proses parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },



   































  {
    title: (
      <Translate
        id="pvt4.title"
        description="Title of feature of Powered By on the home page">
        Genişletilebilir ve Konfigure Edilebilir Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_programmer_re_owql.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt4"
        description="Powered by Spring Boot with AngularJS">
        {`Online guncellenebilir cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni proses cihazı tanımlayabilir,cihazların ayarlarını guncelleyebilirsiniz.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="pvt5.title"
        description="Title of feature of Powered By on the home page">
        Sanal Cihaz Destegi
      </Translate>
    ),
    imageUrl: 'img/undraw_circuit_sdmr.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt5"
        description="Powered by Spring Boot with AngularJS">
        {`Bu altyapı sayesinde matematiksel hesaplamalar ile yeni sanal cihazlar tanımlayabilir,bir cihazın katkısını belli oranlar ile diğer cihazlara ekleyebilir yada cikarabilirsiniz. 
        Olusturdugunuz cihazlar fiizksel bir cihaz gibi sistemde görünür ve endex hesaplarına dahil edilir.`}
      </Translate>
    ),
  },

  {
    title:  (
      <Translate
        id="pvt6.title"
        description="Title of feature of Customize easy on the home page">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_data_processing_yrrv.svg',
    description: (
      <Translate
        id="pvt6"
        description="Feature Customize easy">
        Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.
      </Translate>
    ),
  },


 

  {
    title: (
      <Translate
        id="pvt7.title"
        description="Title of feature of Powered By on the home page">
        Yuksek Kapasiteli Veri İşleme
      </Translate>
    ),
    imageUrl: 'img/undraw_server_cluster_jwwq.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt7"
        description="Powered by Spring Boot with AngularJS">
        {`Yüksek kapasiteli veri işleme kabiliyeti ve entegre sunucu tarafı desteği ile 
        işletmenizdeki yüzlerce sensör, aktüatör ve analizör gibi veri kaynaklarından herhangi bir gecikme olmadan tüm verileri alabilir, 
        filtreleyebilir, özel matematiksel hesaplamalara tabi tutabilirsiniz.`}
      </Translate>
    ),
  },



 

  {
    title: (
      <Translate
        id="pvt8.title"
        description="Title of feature of Powered By on the home page">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/undraw_version_control_re_mg66.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt8"
        description="Powered by Spring Boot with AngularJS">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },
 


  {
    title: (
      <Translate
        id="pvt9.title"
        description="Title of feature of Powered By on the home page">
       Özelleştirilebilir Raporlar
      </Translate>
    ),
    imageUrl: 'img/undraw_report_re_f5n5.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt9"
        description="Powered by Spring Boot with AngularJS">
        {`Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.`}
      </Translate>
    ),
  },

 
  

  {
    title: (
      <Translate
        id="pvt10.title"
        description="Title of feature of Powered By on the home page">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_alert_re_j2op.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt10"
        description="Powered by Spring Boot with AngularJS">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="pvt11.title"
        description="Title of feature of Powered By on the home page">
       Platformdan Bağımsız Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_cross_platform.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="pvt11"
        description="Powered by Spring Boot with AngularJS">
        {`
          Sistem platformdan bağımsız olarak tasarlanmış olup ; masaüstü bilgisayarlardan tablet ve akıllı telefonlara 
          kadar farklı ekran çözünürlüklerindeki bir çok cihazdan sisteme ulaşılabilir.`}
      </Translate>
    ),

  },















 

];


function Feature({ imageUrl, title, description, isOdd }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('row', styles.feature, isOdd ? styles.oddRow : styles.evenRow)}>
      <div className="col col--6">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="col col--6 text--center">
        {imgUrl && <img className={styles.featureImage} src={imgUrl} alt={title} />}
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
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
              
                  content: (<b className={styles.heroContent}><Translate>Enerji Veri Toplama</Translate></b>)
                }}>
                {`DataRapor  {content} `}
              </Translate>
            </span>
          </h1>
          <div className={styles.indexCtas}>
            <Link className={styles.indexCtasGetStartedButton} to={useBaseUrl('docs/')}>
              <Translate>Göz At</Translate>
            </Link>
            <Link className={clsx('margin-left--md', styles.indexTryMeButton)} to="http://datarapor.com">
              <Translate>Demo</Translate>
            </Link>
          </div>
        </div>
      </div>

      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} isOdd={idx % 2 === 1} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
