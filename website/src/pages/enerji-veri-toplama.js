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
        id="evt1.title"
        description="Tüm enerji tuketiminizi tek noktadan izleyin">
          

          Tüm enerji tuketiminizi tek noktadan izleyin
      </Translate>
    ),
  
    imageUrl: 'img/evt.svg',
    description: (
      <Translate
        id="evt1"
        description="DataRapor® enerji veri toplama modülü ile tesisinizdeki enerji üretim ve tüketim verilerini, kullanıcı dostu arayüzü sayesinde parametre, lokasyon veya cihaz bazında izleyebilirsiniz.">
          
          DataRapor® enerji veri toplama modülü ile tesisinizdeki enerji üretim ve tüketim verilerini, kullanıcı dostu arayüzü sayesinde parametre, lokasyon veya cihaz bazında izleyebilirsiniz.
        
      </Translate>
    ),
  },

 
 
 


  {
    title: (
      <Translate
        id="evt2.title"
        description="Anlık Veri izleme">
        Anlık Veri izleme
      </Translate>
    ),
    imageUrl: 'img/undraw_real_time.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="evt2"
        description="Sahadan çekilen anlık veriler sistemde gecikmesiz gösterilir 
         ve anlık olarak akım,gerilim,güç bilgileri görüntülenebilir. ">
        {`
         Sahadan çekilen anlık veriler sistemde gecikmesiz gösterilir 
         ve anlık olarak akım,gerilim,güç bilgileri görüntülenebilir.        
        
        
        `}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="evt3.title"
        description="Grafiksel Analiz">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/undraw_setup_analytics_re_foim.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt3"
        description="Tüm enerji üretim ve tüketim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.">
        {`Tüm enerji üretim ve tüketim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },



  {
    title: (
      <Translate
        id="evt4.title"
        description="Toplam Endex">
        Toplam Endex
      </Translate>
    ),
    imageUrl: 'img/undraw_in_progress_re_m1l6.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt4"
        description="Total endex değerlerine istenen periyotlarda ulasılabilir.Totalizer dashboard ile saatlik ve günlük ani tüketim farklılıkları kolay bir şekilde tespit edilebilir.">
        {`Total endex değerlerine istenen periyotlarda ulasılabilir.Totalizer dashboard ile saatlik ve günlük ani tüketim farklılıkları kolay bir şekilde tespit edilebilir.`}
      </Translate>
    ),
  },































  {
    title: (
      <Translate
        id="evt5.title"
        description="Genişletilebilir ve Konfigure Edilebilir Altyapı">
        Genişletilebilir ve Konfigure Edilebilir Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_programmer_re_owql.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt5"
        description="Online cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni enerji analizörleri tanımlayabilir,cihazların ayarlarını güncelleyebilirsiniz.">
        {`Online cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni enerji analizörleri tanımlayabilir,cihazların ayarlarını güncelleyebilirsiniz.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="evt6.title"
        description="Sanal Cihaz Destegi">
        Sanal Cihaz Destegi
      </Translate>
    ),
    imageUrl: 'img/undraw_circuit_sdmr.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt6"
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
        id="evt7.title"
        description="Entegrasyon">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_data_processing_yrrv.svg',
    description: (
      <Translate
        id="evt7"
        description="Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.">
        Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.
      </Translate>
    ),
  },


 

  {
    title: (
      <Translate
        id="evt8.title"
        description="Yuksek Kapasiteli Veri İşleme">
        Yuksek Kapasiteli Veri İşleme
      </Translate>
    ),
    imageUrl: 'img/undraw_server_cluster_jwwq.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt8"
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
        id="evt9.title"
        description="ISO 50001 - Enerji Yönetimi">
        
ISO 50001 - Enerji Yönetimi
      </Translate>
    ),
    imageUrl: 'img/undraw_business_plan_re_0v81.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt9"
        description="İçinde barındırdığı bir çok grafiksel analiz altyapısı ile ISO 50001 enerji yönetimi sistemini destekler, kanunen zorunlu enerji etüt raporlarının oluşturulmasına yardımcı olur.">
        {`İçinde barındırdığı bir çok grafiksel analiz altyapısı ile ISO 50001 enerji yönetimi sistemini destekler, kanunen zorunlu enerji etüt raporlarının oluşturulmasına yardımcı olur.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="evt10.title"
        description="Haberleşme">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/undraw_version_control_re_mg66.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt10"
        description="Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="evt11.title"
        description="İç Faturalandırma">
        İç Faturalandırma
      </Translate>
    ),
    imageUrl: 'img/undraw_printing_invoices_-5-r4r.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt11"
        description="İşletmenizin bölüm veya lokasyon bazlı tüketimlerini hesaplatarak  sistem üzerinden birimler arası iç fatura kesmenize imkan sağlar.">
        {`İşletmenizin bölüm veya lokasyon bazlı tüketimlerini hesaplatarak  sistem üzerinden birimler arası iç fatura kesmenize imkan sağlar.`}
      </Translate>
    ),
  },


  {
    title: (
      <Translate
        id="evt12.title"
        description="Özelleştirilebilir Raporlar">
       Özelleştirilebilir Raporlar
      </Translate>
    ),
    imageUrl: 'img/undraw_report_re_f5n5.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt12"
        description="Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.">
        {`Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.`}
      </Translate>
    ),
  },

 
  

  {
    title: (
      <Translate
        id="evt13.title"
        description="Alarm Ve Uyarı">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_alert_re_j2op.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt13"
        description="Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="evt14.title"
        description="Platformdan Bağımsız Altyapı">
       Platformdan Bağımsız Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_cross_platform.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="evt14"
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
              
                  content: (<b className={styles.heroContent}><Translate>Enerji Veri Toplama</Translate></b>)
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
