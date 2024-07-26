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
        id="uvt1.title"
        description="Tüm üretim verilerinizi tek noktadan izleyin">         

          Tüm üretim verilerinizi tek noktadan izleyin
      </Translate>
    ),
  
    imageUrl: 'img/uvt.svg',
    description: (
      <Translate
        id="uvt1"
        description="DataRapor® üretim veri toplama modulu ile , tesisinizdeki üretim verilerinizi kullanıcı dostu arayüzü ile  
         parametre, lokasyon ya da cihaz bazında izleyebilirsiniz.">
          
          DataRapor® üretim veri toplama modulu ile , tesisinizdeki üretim verilerinizi kullanıcı dostu arayüzü ile  
         parametre, lokasyon ya da cihaz bazında izleyebilirsiniz.
        
      </Translate>
    ),
  },

 
 

     
  {
    title: (
    <Translate
      id="uvtt1.title"
      description="Makina Bazlı Üretim Takip Sayfası">
        

        Makina Bazlı Üretim Takip Sayfası
    </Translate>
  ),

  imageUrl: 'img/undraw_chore_list_re_2lq8.svg',
  description: (
    <Translate
      id="uvtt1"
      description="İşletmenizdeki üretim yapan tezgah ve makinelerinizin anlık üretimini, çalışma ve bekleme sürelerini, planlanan üretimin gerçekleşme yüzdesini ve benzeri verileri anlık olarak görebileceğiniz detaylı makine bazlı üretimleri izleyebilirsiniz.">
        
        İşletmenizdeki üretim yapan tezgah ve makinelerinizin anlık üretimini, çalışma ve bekleme sürelerini, planlanan üretimin gerçekleşme yüzdesini ve benzeri verileri anlık olarak görebileceğiniz detaylı makine bazlı üretimleri izleyebilirsiniz.
      
    </Translate>
  ),
},







{
  title: (
  <Translate
    id="uvtt2.title"
    description="Vardiya Bazlı Üretim Takip Sayfası">
      

      Vardiya Bazlı Üretim Takip Sayfası
  </Translate>
),

imageUrl: 'img/undraw_responsive_re_e1nn.svg',
description: (
  <Translate
    id="uvtt2"
    description="Vardiya bazlı üretim verileri takibi ile her vardiyanın performansını izleyebilir, verimlilik analizleri yapabilir ve anlık sorunlara hızlıca müdahale edebilirsiniz. Bu sayede, işletmenizin genel üretim performansını artırabilirsiniz.">
      
      Vardiya bazlı üretim verileri takibi ile her vardiyanın performansını izleyebilir, verimlilik analizleri yapabilir ve anlık sorunlara hızlıca müdahale edebilirsiniz. Bu sayede, işletmenizin genel üretim performansını artırabilirsiniz.
  </Translate>
),
},
 
 
{
  title: (
  <Translate
    id="uvtt3.title"
    description="OEE ile Üretim Verimliliğini Ölçmek">
      

      OEE ile Üretim Verimliliğini Ölçmek
  </Translate>
),

imageUrl: 'img/undraw_report_re_f5n5.svg',
description: (
  <Translate
    id="uvtt3"
    description="Makinelerinizin performansını, kullanılabilirliğini ve kalite oranını analiz eden OEE altyapısı ile işletmenizin zayıf noktalarını tespit etmenize ve iyileştirme stratejileri geliştirmenize yardımcı olur.">
     Makinelerinizin performansını, kullanılabilirliğini ve kalite oranını analiz eden OEE altyapısı ile işletmenizin zayıf noktalarını tespit etmenize ve iyileştirme stratejileri geliştirmenize yardımcı olur.
  </Translate>
),

},




{
  title: (
    <Translate
      id="uvt12.title"
      description="Üretim Optimizasyonu">
      Üretim Optimizasyonu
    </Translate>
  ),
  imageUrl: 'img/undraw_our_solution_re_8yk6.svg',
  description: (
    <Translate
      values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
      id="uvt12"
      description="Anlık üretim takibi ve geriye dönük verilerin analizi, operasyonlardaki düzensizliklerin ve kusurların tespit edilmesini sağlar. Bu sayede arızalı ürün sayısı azaltılır ve üretim optimizasyonu gerçekleştirilir.">
      {`
        Anlık üretim takibi ve geriye dönük verilerin analizi, operasyonlardaki düzensizliklerin ve kusurların tespit edilmesini sağlar. Bu sayede arızalı ürün sayısı azaltılır ve üretim optimizasyonu gerçekleştirilir.       
      
      
      `}
    </Translate>
  ),
},















  {
    title: (
      <Translate
        id="uvt2.title"
        description="ScoreBoard Veri Aktarma">
        ScoreBoard Veri Aktarma
      </Translate>
    ),
    imageUrl: 'img/undraw_real_time.svg',
    description: (
      <Translate
        values={{angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>)}}
        id="uvt2"
        description="Fabrikanızda üretilen ürün miktarlarını harici bir ekipmana ihtiyaç duymadan ScoreBoard'a aktararak, üretim performansını anlık olarak izleyebilir ve operasyonel verimliliği artırıcı önlemler alabilirsiniz.">
        {`
          Fabrikanızda üretilen ürün miktarlarını harici bir ekipmana ihtiyaç duymadan ScoreBoard'a aktararak, üretim performansını anlık olarak izleyebilir ve operasyonel verimliliği artırıcı önlemler alabilirsiniz.       
        
        
        `}
      </Translate>
    ),
  },




  {
    title: (
      <Translate
        id="uvt3.title"
        description="Grafiksel Analiz">
        Grafiksel Analiz
      </Translate>
    ),
    imageUrl: 'img/undraw_setup_analytics_re_foim.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt3"
        description="Tüm üretim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.">
        {`Tüm üretim parametrelerinizin grafiksel analizini geçmişe dönük olarak saatlik, günlük, aylık bazda yapabilir, gelişmiş dışa aktarma seçenekleri ile dilediğiniz platformlarda kullanabilirsiniz.`}
      </Translate>
    ),
  },



   

  {
    title: (
      <Translate
        id="uvt4.title"
        description="Genişletilebilir ve Konfigure Edilebilir Altyapı">
        Genişletilebilir ve Konfigure Edilebilir Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_programmer_re_owql.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt4"
        description="Online guncellenebilir cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni cihaz tanımlayabilir,cihazların ayarlarını guncelleyebilirsiniz.">
        {`Online guncellenebilir cihaz kütüphanesi desteği ile dakikalar içinde sisteme yeni cihaz tanımlayabilir,cihazların ayarlarını guncelleyebilirsiniz.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="uvt5.title"
        description="Sanal Cihaz Destegi">
        Sanal Cihaz Destegi
      </Translate>
    ),
    imageUrl: 'img/undraw_circuit_sdmr.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt5"
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
        id="uvt6.title"
        description="Entegrasyon">
        Entegrasyon
      </Translate>
    ),
    imageUrl: 'img/undraw_data_processing_yrrv.svg',
    description: (
      <Translate
        id="uvt6"
        description="Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.">
        Hesaplanan maliyetleriniz SAP, ERP gibi kurumsal yönetim sistemlerine kolay bir şekilde entegre edebilir.
      </Translate>
    ),
  },


 

  {
    title: (
      <Translate
        id="uvt7.title"
        description="Yuksek Kapasiteli Veri İşleme">
        Yuksek Kapasiteli Veri İşleme
      </Translate>
    ),
    imageUrl: 'img/undraw_server_cluster_jwwq.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt7"
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
        id="uvt8.title"
        description="Haberleşme">
        Haberleşme
      </Translate>
    ),
    imageUrl: 'img/undraw_version_control_re_mg66.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt8"
        description="Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.">
        {`Modbus TCP/IP ,Modbus RTU, Profinet, Profibus , BACNET , MQTT gibi birçok dijital  haberlesme protokolu desteği yanında OPC, TCP, UDP soket arabirimlerini sisteme entegre edebilirsiniz.`}
      </Translate>
    ),
  },
 


  {
    title: (
      <Translate
        id="uvt9.title"
        description="Özelleştirilebilir Raporlar">
       Özelleştirilebilir Raporlar
      </Translate>
    ),
    imageUrl: 'img/undraw_report_re_f5n5.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt9"
        description="Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.">
        {`Talebiniz doğrultusunda  size özel formatta dizayn edilen rapor ve faturalar belirlediğiniz saatte saatlik, günlük, haftalık yada aylık bazda sizin belirlediğiniz kişilere otomatik olarak sistem tarafından mail atılır.`}
      </Translate>
    ),
  },

 
  

  {
    title: (
      <Translate
        id="uvt10.title"
        description="Alarm Ve Uyarı">
       Alarm Ve Uyarı
      </Translate>
    ),
    imageUrl: 'img/undraw_alert_re_j2op.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt10"
        description="Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.">
        {`Sistemde tanımlı herhangi bir parametreye alarm tanımlanabilir ve tanımlı her bir alarm için limitler, alarm bekleme süreleri eklenebilir ya da değiştirilebilir.Alarm durumunda  tanımlı yetkili gruplarına sistem tarafından otomatik  sms ve mail gönderir.`}
      </Translate>
    ),
  },

  {
    title: (
      <Translate
        id="uvt11.title"
        description="Platformdan Bağımsız Altyapı">
       Platformdan Bağımsız Altyapı
      </Translate>
    ),
    imageUrl: 'img/undraw_cross_platform.svg',
    description: (
      <Translate
        values={{autowired: (<code>@Autowired</code>)}}
        id="uvt11"
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
              
                  content: (<b className={styles.heroContent}><Translate>Üretim Veri Toplama</Translate></b>)
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
