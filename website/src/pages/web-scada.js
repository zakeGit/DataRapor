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
        id="web1.title"
        description="Kolay Kullanım  ">
        Kolay Kullanım         
      </Translate>
       
    ),
  
    imageUrl: 'img/web.svg',
    description: (
      <Translate
        id="web1"
        description="DataRapor Endüstriyel Veri Toplama ve Kontrol Yazılımını tüm web tarayıcılar ile çalıştırabilirsiniz. ">
          
          DataRapor Endüstriyel Veri Toplama ve Kontrol Yazılımını tüm web tarayıcılar ile çalıştırabilirsiniz. 
      </Translate>
    ),
  },


 
 
  {
    title: (
      <Translate
        id="web2.title"
        description="Sınırsız Client">
       Sınırsız Client
      </Translate>
    ),
    imageUrl: 'img/client.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web2"
        description="Mobil ve masaüstü cihazlarla herhangi bir lokasyondan, dilediğiniz sayıda personelin sisteme bağlanmasına olanak tanır.">
        {`Mobil ve masaüstü cihazlarla herhangi bir lokasyondan, dilediğiniz sayıda personelin sisteme bağlanmasına olanak tanır.`}
      </Translate>
    ),
  },


 
  {
    title: (
      <Translate
        id="web2.title"
        description="Çok Dilli Destek">
       Çok Dilli Destek
      </Translate>
    ),
    imageUrl: 'img/language.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web2"
        description="Kullanıcı arayüzü ve dokümantasyon için çoklu dil seçenek sunar.">
        {`Kullanıcı arayüzü ve dokümantasyon için çoklu dil seçenek sunar.`}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="web3.title"
        description="Grafiksel Analiz">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/undraw_setup_analytics_re_foim.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web3"
        description="Tüm proses parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.">
        {`Tüm proses parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },



   


  {
    title: (
      <Translate
        id="web4.title"
        description="Genişletilebilir ve Konfigure Edilebilir Altyapı">
        Genişletilebilir ve Konfigure Edilebilir Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_programmer_re_owql.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web4"
        description="Online guncellenebilir cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni cihazı tanımlayabilir,cihazların ayarlarını guncelleyebilirsiniz.">
        {`Online guncellenebilir cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni cihazı tanımlayabilir,cihazların ayarlarını guncelleyebilirsiniz.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="web5.title"
        description="Sanal Cihaz Destegi">
        Sanal Cihaz Destegi
      </Translate>
    ),
    imageUrl: 'img/undraw_circuit_sdmr.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web5"
        description="Bu altyapı sayesinde matematiksel hesaplamalar ile yeni sanal cihazlar tanımlayabilir,bir cihazın katkısını belli oranlar ile diğer cihazlara ekleyebilir yada cikarabilirsiniz. 
        Olusturdugunuz cihazlar fiizksel bir cihaz gibi sistemde görünür ve endex hesaplarına dahil edilir.">
        {`Bu altyapı sayesinde matematiksel hesaplamalar ile yeni sanal cihazlar tanımlayabilir,bir cihazın katkısını belli oranlar ile diğer cihazlara ekleyebilir yada cikarabilirsiniz. 
        Olusturdugunuz cihazlar fiizksel bir cihaz gibi sistemde görünür ve endex hesaplarına dahil edilir.`}
      </Translate>
    ),
  },

  {
    title:  (
      <Translate
        id="web6.title"
        description="Entegrasyon">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_data_processing_yrrv.svg',
    description: (
      <Translate
        id="web6"
        description="Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.">
        Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.
      </Translate>
    ),
  },


 

  {
    title: (
      <Translate
        id="web7.title"
        description="Yuksek Kapasiteli Veri İşleme">
        Yuksek Kapasiteli Veri İşleme
      </Translate>
    ),
    imageUrl: 'img/undraw_server_cluster_jwwq.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web7"
        description="Yüksek kapasiteli veri işleme kabiliyeti ve entegre sunucu tarafı desteği ile 
        işletmenizdeki yüzlerce sensör, aktüatör ve analizör gibi veri kaynaklarından herhangi bir gecikme olmadan tüm verileri alabilir, 
        filtreleyebilir, özel matematiksel hesaplamalara tabi tutabilirsiniz.">
        {`Yüksek kapasiteli veri işleme kabiliyeti ve entegre sunucu tarafı desteği ile 
        işletmenizdeki yüzlerce sensör, aktüatör ve analizör gibi veri kaynaklarından herhangi bir gecikme olmadan tüm verileri alabilir, 
        filtreleyebilir, özel matematiksel hesaplamalara tabi tutabilirsiniz.`}
      </Translate>
    ),
  },



 

  {
    title: (
      <Translate
        id="web8.title"
        description="Haberleşme">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/undraw_version_control_re_mg66.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web8"
        description="Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },
 


  {
    title: (
      <Translate
        id="web9.title"
        description="Özelleştirilebilir Raporlar">
       Özelleştirilebilir Raporlar
      </Translate>
    ),
    imageUrl: 'img/undraw_report_re_f5n5.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web9"
        description="Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.">
        {`Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.`}
      </Translate>
    ),
  },

 
  

  {
    title: (
      <Translate
        id="web10.title"
        description="Alarm Ve Uyarı">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_alert_re_j2op.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web10"
        description="Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="web11.title"
        description="Platformdan Bağımsız Altyapı">
       Platformdan Bağımsız Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_cross_platform.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="web11"
        description="Sistem platformdan bağımsız olarak tasarlanmış olup ; masaüstü bilgisayarlardan tablet ve akıllı telefonlara 
          kadar farklı ekran çözünürlüklerindeki bir çok cihazdan sisteme ulaşılabilir.">
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
              
                  content: (<b className={styles.heroContent}><Translate>Web Scada</Translate></b>)
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
